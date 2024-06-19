import { join } from 'node:path';
import prompts from 'prompts';
import { dedent } from 'ts-dedent';
import execa from 'execa';
import { readJSON } from 'fs-extra';

function tryFindCore() {
  try {
    return require.resolve('@storybook/core');
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
