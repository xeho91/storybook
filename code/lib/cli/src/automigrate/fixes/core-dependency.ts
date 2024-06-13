import { dedent } from 'ts-dedent';
import type { Fix } from '../types';

interface Options {
  storybookVersion: string;
}

/**
 */
export const coreDependency: Fix<Options> = {
  id: 'core-dependency',

  versionRange: ['<8.2.0', '>=8.2.0'],

  async check({ packageManager, storybookVersion }) {
    try {
      const version = await packageManager.getInstalledVersion('@storybook/core');

      if (version !== null) {
        return null;
      }

      return { storybookVersion };
    } catch (e) {
      return { storybookVersion };
    }
  },

  prompt() {
    return dedent`
      New to Storybook 8.2: Our peerDependency structure changed.
      It's now required to have a direct dependency on @storybook/core in your package.json.
      
      Install @storybook/core in your project?
    `;
  },

  async run({ packageManager, dryRun, skipInstall, result }) {
    if (!dryRun) {
      const packageJson = await packageManager.retrievePackageJson();
      await packageManager.addDependencies(
        { installAsDevDependencies: true, skipInstall, packageJson },
        [`@storybook/core@^${result.storybookVersion}`]
      );
    }
  },
};
