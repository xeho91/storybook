```md renderer="angular" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

<Meta title="Async Query Methods" component={MyComponent} />

export const Template = (args) => ({ props: args });

{/*  
 See https://storybook.js.org/docs/angular/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Story
  name="AsyncExample"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Other steps

    // Waits for the component to be rendered before querying the element
    await canvas.findByRole('button', { name: / button label/i }));
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import type { Meta, Story } from '@storybook/angular';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Async Query Methods',
  component: MyComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

/*
* See https://storybook.js.org/docs/angular/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const AsyncExample = Template.bind({});
AsyncExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Other steps

  // Waits for the component to be rendered before querying the element
  await canvas.findByRole('button', { name: / button label/i }));
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Async Query Methods',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const AsyncExample = Template.bind({});
AsyncExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
   // Other steps

  // Waits for the component to be rendered before querying the element
  await canvas.findByRole('button', { name: / button label/i }));
};
```
```md renderer="react" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="Async Query Methods" component={MyComponent} />

export const Template = (args) => <MyComponent {...args} />;

{/*  
 See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="AsyncExample"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Other steps

    // Waits for the component to be rendered before querying the element
    await canvas.findByRole('button', { name: / button label/i }));
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
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Async Query Methods',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const AsyncExample = Template.bind({});
AsyncExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
   // Other steps

  // Waits for the component to be rendered before querying the element
  await canvas.findByRole('button', { name: / button label/i }));
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Async Query Methods',
  component: MyComponent,
};

const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

/*
* See https://storybook.js.org/docs/svelte/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const AsyncExample = Template.bind({});
AsyncExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Other steps

  // Waits for the component to be rendered before querying the element
  await canvas.findByRole('button', { name: / button label/i }));
};
```
```md renderer="svelte" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

<Meta title="Async Query Methods" component={MyComponent} />

export const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

{/*  
  See https://storybook.js.org/docs/svelte/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="AsyncExample"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Other steps

    // Waits for the component to be rendered before querying the element
    await canvas.findByRole('button', { name: / button label/i }));
  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Async Query Methods',
  component: MyComponent,
};

const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const AsyncExample = Template.bind({});
AsyncExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Other steps

  // Waits for the component to be rendered before querying the element
  await canvas.findByRole('button', { name: / button label/i }));
};
```
```md renderer="vue" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

<Meta title="Async Query Methods" component={MyComponent} />

export const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

{/*  
 See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Story
  name="AsyncExample"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Other steps

    // Waits for the component to be rendered before querying the element
    await canvas.findByRole('button', { name: / button label/i }));
  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.ts" renderer="vue" language="ts"
// import { Meta, StoryFn } from '@storybook/vue3'; for Vue 3
import { Meta, StoryFn } from '@storybook/vue';

import { userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Async Query Methods',
  component: MyComponent,
} as Meta<typeof MyComponent>;

const Template: StoryFn<typeof MyComponent> = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const AsyncExample = Template.bind({});
AsyncExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Other steps

  // Waits for the component to be rendered before querying the element
  await canvas.findByRole('button', { name: / button label/i }));
};
```
