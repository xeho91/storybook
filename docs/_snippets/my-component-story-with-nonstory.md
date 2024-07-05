```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

import someData from './data.json';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent', 
  component: MyComponent,
  includeStories: ['SimpleStory', 'ComplexStory'], // 👈 Storybook loads these stories
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const simpleData = { foo: 1, bar: 'baz' };
export const complexData = { foo: 1, foobar: { bar: 'baz', baz: someData } };

export const SimpleStory = Template.bind({});
SimpleStory.args = {
  data: simpleData,
};

export const ComplexStory = Template.bind({});
ComplexStory.args = {
  data: complexData,
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { MyComponent } from './MyComponent';

import someData from './data.json';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent', 
  component: MyComponent,
  includeStories: ['SimpleStory', 'ComplexStory'], // 👈 Storybook loads these stories
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
};

export const simpleData = { foo: 1, bar: 'baz' };
export const complexData = { foo: 1, foobar: { bar: 'baz', baz: someData } };


const Template = (args) => <MyComponent {...args} />;

export const SimpleStory = Template.bind({});
SimpleStory.args = {
  data: simpleData,
};

export const ComplexStory = Template.bind({});
ComplexStory.args = {
  data: complexData,
};
```
```ts filename="MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyComponent } from './MyComponent';

import someData from './data.json';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent', 
  component: MyComponent,
  includeStories: ['SimpleStory', 'ComplexStory'], // 👈 Storybook loads these stories
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
} as ComponentMeta<typeof MyComponent>;

export const simpleData = { foo: 1, bar: 'baz' };
export const complexData = { foo: 1, foobar: { bar: 'baz', baz: someData } };

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const SimpleStory = Template.bind({});
SimpleStory.args = {
  data: simpleData,
};

export const ComplexStory = Template.bind({});
ComplexStory.args = {
  data: complexData,
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import MyComponent from './MyComponent.svelte';

import someData from './data.json';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent', 
  component: MyComponent,
  includeStories: ['SimpleStory', 'ComplexStory'], // 👈 Storybook loads these stories
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
};

export const simpleData = { foo: 1, bar: 'baz' };
export const complexData = { foo: 1, foobar: { bar: 'baz', baz: someData } };


const Template = (args) => ({
  Component: MyComponent,
  props: args,
});


export const SimpleStory = Template.bind({});
SimpleStory.args = {
  data: simpleData,
};

export const ComplexStory = Template.bind({});
ComplexStory.args = {
  data: complexData,
};
```
```js filename="MyComponent.stories.js" renderer="vue" language="js" tabTitle="2"
import MyComponent from './MyComponent.vue';

import someData from './data.json';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent', 
  component: MyComponent,
  includeStories: ['SimpleStory', 'ComplexStory'],
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
};

export const simpleData = { foo: 1, bar: 'baz' };
export const complexData = { foo: 1, foobar: { bar: 'baz', baz: someData } };


const Template = (args, { argTypes }) => ({
  components: { MyComponent },
  props: Object.keys(argTypes),
  template: `<MyComponent v-bind="$props"/>`,
});


export const SimpleStory = Template.bind({});
SimpleStory,args = {
  data: simpleData,
};

export const ComplexStory = Template.bind({});
ComplexStory,args = {
  data: complexData,
};
```
```js filename="MyComponent.stories.js" renderer="vue" language="js" tabTitle="3"
import MyComponent from './MyComponent.vue';

import someData from './data.json';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent', 
  component: MyComponent,
  includeStories: ['SimpleStory', 'ComplexStory'],
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
};

export const simpleData = { foo: 1, bar: 'baz' };
export const complexData = { foo: 1, foobar: { bar: 'baz', baz: someData } };

const Template = (args) => ({
  components: { MyComponent },
  setup() {
    return { args };
  },
  template: `<MyComponent v-bind="args"/>`,
});

export const SimpleStory = Template.bind({});
SimpleStory.args = {
  data: simpleData,
};

export const ComplexStory = Template.bind({});
ComplexStory.args = {
  data: complexData,
};
```
