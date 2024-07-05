```js filename=".storybook/preview.js" renderer="angular" language="ts"
import { componentWrapperDecorator } from '@storybook/angular';

export const decorators = [
  componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
];
```
```js filename=".storybook/preview.js" renderer="react" language="js" tabTitle="story-compoent"
import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
```
```js filename=".storybook/preview.js" renderer="react" language="js" tabTitle="story-function"
import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      {Story()}
    </div>
  ),
];
```
```js filename=".storybook/preview.js" renderer="svelte" language="js"
import MarginDecorator from './MarginDecorator.svelte';

export const decorators = [() => MarginDecorator];
```
```js filename=".storybook/preview.js" renderer="vue" language="js"
export const decorators = [(story) => ({
  components: { story },
  template: '<div style="margin: 3em;"><story /></div>'
})];
```
```js filename=".storybook/preview.js" renderer="web-components" language="js"
export const decorators = [(story) => html`<div style="margin: 3em">${story()}</div>`],
```
