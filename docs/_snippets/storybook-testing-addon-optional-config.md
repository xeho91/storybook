```js filename="setupFile.js" renderer="react" language="js"
import { setGlobalConfig } from '@storybook/testing-react';

// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

// Replace with setProjectAnnotations if you are using the new pre-release version the addon
setGlobalConfig(globalStorybookConfig);
```
```js filename="setupFile.js" renderer="vue" language="js" tabTitle="2"
import { setGlobalConfig } from '@storybook/testing-vue';

// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);
```
```js filename="setupFile.js" renderer="vue" language="js" tabTitle="3"
import { setGlobalConfig } from '@storybook/testing-vue3';

// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);
```
