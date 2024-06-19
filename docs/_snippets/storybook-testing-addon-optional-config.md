```js filename="setupFile.js|ts" renderer="react" language="js"
// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

import { setProjectAnnotations } from '@storybook/react';

setProjectAnnotations(globalStorybookConfig);
```

```js filename="setupFile.js" renderer="vue" language="js" tabTitle="2"
import { setGlobalConfig } from '@storybook/testing-vue';

// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);
```

```js filename="setupFile.js|ts" renderer="vue" language="js"
// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

import { setProjectAnnotations } from '@storybook/testing-vue3';

setProjectAnnotations(globalStorybookConfig);
```

```js filename="vitest.config.js" renderer="vue" language="js" tabTitle="vite"
import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      clearMocks: true,
      setupFiles: './src/setupTests.js', //👈 Our configuration file enabled here
    },
  })
);
```

```ts filename="vitest.config.ts" renderer="vue" language="ts" tabTitle="vite"
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      clearMocks: true,
      setupFiles: './src/setupTests.ts', //👈 Our configuration file enabled here
    },
  })
);
```

