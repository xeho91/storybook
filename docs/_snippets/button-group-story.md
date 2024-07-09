```ts filename="ButtonGroup.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { ButtonGroup } from './ButtonGroup.component';
import { Button } from './button.component';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args },
  ],
  orientation: 'horizontal',
};
```
```js filename="ButtonGroup.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { ButtonGroup } from '../ButtonGroup';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args }
  ],
  orientation: 'horizontal',
};
```
```ts filename="ButtonGroup.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonGroup } from '../ButtonGroup';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args }
  ],
  orientation: 'horizontal',
};
```
```js filename="ButtonGroup.stories.js" renderer="svelte" language="js"
import ButtonGroup from '../ButtonGroup.svelte';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => ({
  Component: ButtonGroup,
  props: args,
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args }
  ],
  orientation: 'horizontal',
};
```
```js filename="ButtonGroup.stories.js" renderer="vue" language="js" tabTitle="2"
import ButtonGroup from './ButtonGroup.vue';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
};

const Template = (args, { argTypes }) => ({
  components: { ButtonGroup },
  props: Object.keys(argTypes),
  template: '<ButtonGroup v-bind="$props" />',
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args }
  ],
  orientation: 'horizontal',
};
```
```js filename="ButtonGroup.stories.js" renderer="vue" language="js" tabTitle="3"
import ButtonGroup from './ButtonGroup.vue';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => ({
  components: { ButtonGroup },
  setup() {
    return { args };
  },
  template: '<ButtonGroup v-bind="args" />',
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args }
  ],
  orientation: 'horizontal',
};
```
```ts filename="ButtonGroup.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import ButtonGroup from './ButtonGroup.vue';

import { Meta, StoryFn } from '@storybook/vue';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonGroup',
  component: ButtonGroup,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args, { argTypes }) => ({
  components: { ButtonGroup },
  props: Object.keys(argTypes),
  template: '<ButtonGroup v-bind="$props" />',
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Secondary.args }],
  orientation: 'horizontal',
};
```
```ts filename="ButtonGroup.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import ButtonGroup from './ButtonGroup.vue';

import { Meta, StoryFn } from '@storybook/vue3';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonGroup',
  component: ButtonGroup,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { ButtonGroup },
  setup() {
    return { args };
  },
  template: '<ButtonGroup v-bind="args" />',
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Secondary.args }],
  orientation: 'horizontal',
};
```
```js filename="demo-button-group.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button-group';

//👇 Imports the Button stories
import * as ButtonStories from './demo-button.stories';

export default {
  title: 'ButtonGroup',
};

const Template = ({ buttons, orientation }) => {
  return html`
    <demo-button-group .buttons=${buttons} .orientation=${orientation}></demo-button-group>
  `;
};

export const Pair = Template.bind({});
Pair.args = {
  buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Secondary.args }],
  orientation: 'horizontal',
};
```
