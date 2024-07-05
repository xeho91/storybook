```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

<Meta title="WithSelectEvent" component={MyComponent}/>

{/* Function to emulate pausing between interactions */}

export const sleep= (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Template = (args) => ({ props: args });

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story 
  name="ExampleChangeEvent"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = canvas.getByRole('listbox');

    await userEvent.selectOptions(select, ['One Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Another Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Yet another item']);

  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithSelectEvent',
  component: MyComponent,
} as Meta;

// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: Story = (args) => ({
  props: args,
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play =  async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const select = canvas.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);
  
  await userEvent.selectOptions(select, ['Yet another item']);
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
  title: 'WithSelectEvent',
  component: MyComponent,
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const select = canvas.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
};
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="WithSelectEvent" component={MyComponent}/>

{/* Function to emulate pausing between interactions */}

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Template = (args) => <MyComponent {...args} />;

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story 
  name="ExampleChangeEvent"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('listbox');

    await userEvent.selectOptions(select, ['One Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Another Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Yet another item']);

  }}>
  {Template.bind({})}
</Story>
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
  title: 'WithSelectEvent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const select = canvas.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
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
  title: 'WithSelectEvent',
  component: MyComponent,
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const select = canvas.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
};
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

<Meta title="WithSelectEvent" component={MyComponent} />

{/* Function to emulate pausing between interactions */}

export const sleep(ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Template= (args)=>({
  Component: MyComponent,
  props: args,
});

{/*  
  See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
*/}
<Story 
  name="ExampleChangeEvent"
   play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = canvas.getByRole('listbox');

    await userEvent.selectOptions(select, ['One Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Another Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Yet another item']);

  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithSelectEvent',
  component: MyComponent,
 
};

// Custom function to emulate a pause
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const select = canvas.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

<Meta title="ExampleChangeEvent" component={MyComponent} />

{/* Function to emulate pausing between interactions */}

export const sleep= (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Story 
  name="ExampleChangeEvent"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = canvas.getByRole('listbox');

    await userEvent.selectOptions(select, ['One Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Another Item']);
    await sleep(2000);

    await userEvent.selectOptions(select, ['Yet another item']);

  }}>
  {Template.bind({})}
</Story>
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
  title: 'WithSelectEvent',
  component: WithSelectEvent,
} as Meta<typeof MyComponent>;

// Custom function to emulate a pause
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


const Template: StoryFn<typeof MyComponent> = (args) => ({
 components: { MyComponent },
  template: '<MyComponent />',
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleChangeEvent = Template.bind({});
ExampleChangeEvent.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const select = canvas.getByRole('listbox');

  await userEvent.selectOptions(select, ['One Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Another Item']);
  await sleep(2000);

  await userEvent.selectOptions(select, ['Yet another item']);
};
```
