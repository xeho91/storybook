```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

<Meta title="QueryMethods" component={MyComponent} />

export const Template = (args) => ({ props: args });

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Story
  name="ExampleWithRole"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'QueryMethods',
  component: MyComponent,
  
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
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
  title: 'QueryMethods',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
};
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="QueryMethods" component={MyComponent} />

export const Template = (args) => <MyComponent {...args} />;

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ExampleWithRole"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
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
  title: 'QueryMethods',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

/* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
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
  title: 'QueryMethods',
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
export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
};
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

<Meta title="QueryMethods" component={MyComponent} />

export const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

{/*  
  See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ExampleWithRole"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import {  userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'QueryMethods',
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
export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

<Meta title="QueryMethods" component={MyComponent} />

export const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Story
  name="ExampleWithRole"
   play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
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
  title: 'QueryMethods',
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
export const ExampleWithRole = Template.bind({});
ExampleWithRole.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
};
```
