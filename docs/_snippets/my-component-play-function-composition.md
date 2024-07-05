```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent, 
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FirstStory = Template.bind({});
FirstStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.type(canvas.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async ({ canvasElement }) => {
   const canvas = within(canvasElement);
   
  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play({ canvasElement });
  await SecondStory.play({ canvasElement });
  await userEvent.type(canvas.getByTestId('another-element'), 'random value');
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FirstStory = Template.bind({});
FirstStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play({ canvasElement });
  await SecondStory.play({ canvasElement });
  await userEvent.type(canvas.getByTestId('another-element'), 'random value');
};
```
```ts filename="MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FirstStory = Template.bind({});
FirstStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play({ canvasElement });
  await SecondStory.play({ canvasElement });
  await userEvent.type(canvas.getByTestId('another-element'), 'random value');
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FirstStory = Template.bind({});
FirstStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play({ canvasElement });
  await SecondStory.play({ canvasElement });
  await userEvent.type(canvas.getByTestId('another-element'), 'random value');
};
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FirstStory = Template.bind({});
FirstStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play({ canvasElement });
  await SecondStory.play({ canvasElement });
  await userEvent.type(canvas.getByTestId('another-element'), 'random value');
};
```
```ts filename="MyComponent.stories.ts" renderer="vue" language="ts"
// import { Meta, StoryFn } from '@storybook/vue3'; for Vue 3
import { Meta, StoryFn } from '@storybook/vue';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MyComponent',
  component: MyComponent,
} as Meta<typeof MyComponent>;


const Template: StoryFn<typeof MyComponent> = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FirstStory = Template.bind({});
FirstStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('an-element'), 'example-value');
};

export const SecondStory = Template.bind({});
SecondStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('other-element'), 'another value');
};

export const CombinedStories = Template.bind({});
CombinedStories.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Runs the FirstStory and Second story play function before running this story's play function
  await FirstStory.play({ canvasElement });
  await SecondStory.play({ canvasElement });
  await userEvent.type(canvas.getByTestId('another-element'), 'random value');
};
```
