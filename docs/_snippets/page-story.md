```ts filename="Page.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { Button } from './button.component';
import { Header } from './header.component';
import { Page } from './page.component';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [Button, Header],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const LoggedIn = {
  args: {
    ...HeaderStories.LoggedIn.args,
  },
};
```
```js filename="Page.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Page } from './Page';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
```
```ts filename="Page.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
```
```js filename="Page.stories.js" renderer="svelte" language="js"
import Page from './Page.svelte';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args) => ({
  Component: Page,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
```
```js filename="Page.stories.js" renderer="vue" language="js" tabTitle="2"
import Page from './Page.vue';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};


const Template = (args, { argTypes }) => ({
  components: { Page },
  props: Object.keys(argTypes),
  template: '<page v-bind="$props" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
```
```js filename="Page.stories.js" renderer="vue" language="js" tabTitle="3"
import Page from './Page.vue';

//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args) => ({
  components: { Page },
  setup() {
    return { args };
  },
  template: '<page v-bind="args" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
```
