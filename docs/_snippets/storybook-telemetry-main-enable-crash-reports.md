```js filename=".storybook/main.js" renderer="common" language="js" tabTitle="main-js"
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    enableCrashReports: true, // 👈 Appends the crash reports to the telemetry events
  },
};
```
```ts filename=".storybook/main.ts" renderer="common" language="ts" tabTitle="main-ts"
// Imports Storybook's configuration API
import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    enableCrashReports: true, // 👈 Appends the crash reports to the telemetry events
  },
};

module.exports = config;
```
