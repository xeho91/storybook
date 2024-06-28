```js filename=".storybook/preview.js" renderer="angular" language="ts"
import { componentWrapperDecorator } from '@storybook/angular';
import { ThemeProvider } from './theme-provider.component';

export const decorators = [
  moduleMetadata({ declarations: [ThemeProvider] }),
  componentWrapperDecorator((story) => `<theme-provider class="default">${story}</theme-provider>`),
];

// or with globals of story context
export const decorators = [
  moduleMetadata({ declarations: [ThemeProvider] }),
  componentWrapperDecorator(
    (story) => `<theme-provider [class]="theme">${story}</theme-provider>`,
    ({ globals }) => ({ theme: globals.theme })
  ),
];
```
```js filename=".storybook/preview.js" renderer="react" language="js"
import React from 'react';

import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
];
```
```js filename=".storybook/preview.js" renderer="react" language="js" tabTitle="story-function"
import React from 'react';

import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      {Story()}
    </ThemeProvider>
  ),
];
```
