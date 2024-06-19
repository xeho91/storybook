```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as Meta;

export const Text: Story = ({ label, onClick }) => ({
  props: {
    label,
    onClick,
  },
});

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```
```js filename="Button.stories.js|jsx|ts|tsx" renderer="react" language="js"
import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text = ({ label, onClick }) => <Button label={label} onClick={onClick} />;

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```
```js filename="Button.stories.js" renderer="svelte" language="js"
import Button from './Button.svelte';

import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text  = ({ label, click }) => ({
  Component: Button,
  props: {
    label,
  },
  on: {
    click,
  },
});

Text.args = {
  label: 'Hello',
  click: action('clicked'),
};
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="2"
import Button from './Button.vue';

import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" :label="label" />'
});

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="3"
import Button from './Button.vue';

import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text = ({ label, onClick }) => ({
  components: { Button },
  setup() {
    return {
      label,
      onClick,
    };
  },
  template: '<Button @onClick="onClick" :label="label" />',
});

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```
