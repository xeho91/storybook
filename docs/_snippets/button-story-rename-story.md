```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as Meta;


export const Primary: Story = () => ({
  props: {
    label: 'Button',
    primary: true,
  },
});

Primary.storyName = 'I am the primary';
```
```js filename="Button.stories.js" renderer="html" language="js"
import { createButton } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
};

export const Primary = (args) => createButton(args);
Primary.storyName = 'I am the primary';
```
```ts filename="Button.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

import { createButton, ButtonArgs } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
} as Meta<ButtonArgs>;

export const Primary: StoryFn<ButtonArgs> = (args) => createButton(args);
Primary.storyName = 'I am the primary';
```
```js filename="Button.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button primary label="Button"/>;
Primary.storyName = 'I am the primary';
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button primary label="Button"/>;
Primary.storyName = 'I am the primary';
```
```js filename="Button.stories.js" renderer="svelte" language="js"
import Button from './Button.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  Component: Button,
  props: {
      primary: true,
      label: 'Button',
    },
});

Primary.storyName = 'I am the primary';
```
```js filename="Button.stories.js" renderer="vue" language="js"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
Primary.storyName = 'I am the primary';
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import Button from './Button.vue';

import { Meta, StoryFn } from '@storybook/vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
Primary.storyName = 'I am the primary';
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import Button from './Button.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
Primary.storyName = 'I am the primary';
```
```js filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button';

export default {
  title: 'Button',
};

export const Primary = () => html`<demo-button primary></demo-button>`;

Primary.storyName = 'I am the primary';
```
