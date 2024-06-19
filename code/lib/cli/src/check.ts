import { join } from 'node:path';
import prompts from 'prompts';
import findUp from 'find-up';
import { dedent } from 'ts-dedent';
import execa from 'execa';
import { readJSON, readJsonSync } from 'fs-extra';

/** Try to find the `@storybook/core` package
 * Just resolving it is not enough.
 *
 * Due to how some package manager do auto-install missing peerDependencies, `@storybook/cli` might be able to find `@storybook/core`, without it being in the user's `package.json` file.
 * So what we do is, try to resolve it, then find the top level `node_modules` path, and then find the `package.json` file in the parent directories.
 * This should reliably tell us if the user has `@storybook/core` in their project as a top-level dependency or not.
 */
function tryFindCore() {
  try {
    const found = require.resolve('@storybook/core');

    if (!found.includes('node_modules')) {
      // We're either in PNP-mode, linked-mode or in npx-mode. There's nothing left to check...
      // We were able to find the core package, so let's hope for the best.
      return true;
    }

    const TopLevelNodeModulesPath = found.split('node_modules')[0];
    const projectPackageJsonPath = findUp.sync('package.json', { cwd: TopLevelNodeModulesPath });

    if (!projectPackageJsonPath) {
      return false;
    }

    const projectPackageJsonContents = readJsonSync(projectPackageJsonPath);

    return (
      projectPackageJsonContents.dependencies['@storybook/core'] ||
      projectPackageJsonContents.devDependencies['@storybook/core'] ||
      projectPackageJsonContents.peerDependencies['@storybook/core']
    );
  } catch (e) {
    return false;
  }
}

async function maybePrompt() {
  if (process.env.CI) {
    return false;
  }

  const { runMigration } = await prompts({
    type: 'confirm',
    initial: true,
    name: 'runMigration',
    message: dedent`
      We detected you have not installed storybook core. Did you upgrade storybook recently without running the upgrade command?

      At the very least we need to have the @storybook/core package installed in the project.
      We recommend running the following command to upgrade storybook:
      > npx storybook@latest upgrade

      If that is for some reason not an option for you, follow this guide:
      https://storybook.js.org/docs/react/workflows/migrating-to-8-2/

      Would you want to run the migration now?
      (answering no will exit the process)
    `,
  });

  return runMigration;
}

export async function check() {
  const packageJson = await readJSON(join(__dirname, '..', 'package.json'));

  const core = tryFindCore();

  if (core) {
    return true;
  }

  const shouldRunMigration = await maybePrompt();

  if (!shouldRunMigration) {
    console.log(dedent`
      You opted not to run the automatic migration. Please install @storybook/core manually.
      
      To understand this change, and why it was needed, read this guide:
      https://storybook.js.org/docs/react/workflows/migrating-to-8-2/
    `);
    return false;
  }

  await execa('npx', [`storybook@${packageJson.version}`, 'automigrate'], { stdio: 'inherit' });

  console.log(dedent`
    Success! The migration has been completed. Please commit the changes to your project.
    
    Then run the command again.
  `);

  return false;
}
