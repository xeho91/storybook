```ts filename=".storybook/preview.js" renderer="angular" language="ts" tabTitle="theme-provider"
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
```ts filename=".storybook/preview.js" renderer="angular" language="ts" tabTitle="preview-polyfill"
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

import '../src/polyfills';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};
```
```ts filename="src/polyfills.ts" renderer="angular" language="ts" tabTitle="angular-localize-polyfill"
import '@angular/localize/init';
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
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="2-library"
import Vue from 'vue';

import Vuex from 'vuex';

//👇 Storybook Vue app being extended and registering the library
Vue.use(Vuex);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="3-library"
import { app } from '@storybook/vue3';

import Vuex from 'vuex';

//👇 Storybook Vue app being extended and registering the library
app.use(Vuex);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="2-component"
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare as fasPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasPlusSquare);

//👇 Storybook Vue app being extended and registering the component
Vue.component('font-awesome-icon', FontAwesomeIcon);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="3-component"
import { app } from '@storybook/vue3';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare as fasPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasPlusSquare);

//👇 Storybook Vue app being extended and registering the component
app.component('font-awesome-icon', FontAwesomeIcon);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="2-mixin"
import Vue from 'vue';

//👇 Storybook Vue app being extended and registering the mixin
Vue.mixin({
  // Your mixin code
});

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="3-mixin"
import { app } from '@storybook/vue3';

//👇 Storybook Vue app being extended and registering the mixin
app.mixin({
  // Your mixin code
});

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
