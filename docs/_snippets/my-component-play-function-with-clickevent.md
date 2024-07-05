```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { fireEvent, screen, userEvent } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

<Meta title="ClickExamples" component={MyComponent} />

export const Template = (args) => ({ props: args });

{/*  
 See https://storybook.js.org/docs/6/configure#configure-story-loading
 to learn more about using the canvasElement to query the DOM
 */}
<Story
  name="ClickExample"
   play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  }}>
  {Template.bind({})}
</Story>

<Story
  name="FireEventExample"
   play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(canvas.getByTestId('data-testid'));
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { fireEvent, userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ClickExamples',
  component: MyComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ClickExample = Template.bind({});
ClickExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(canvas.getByTestId('data-testid'));
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { fireEvent, userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ClickExamples',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

/* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ClickExample = Template.bind({});
ClickExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(canvas.getByTestId('data-testid'));
};
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { fireEvent, userEvent, within} from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="ClickExamples" component={MyComponent} />

export const Template = (args) => <MyComponent {...args} />;

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Story
  name="ClickExample"
   play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  }}>
  {Template.bind({})}
</Story>

<Story
  name="FireEventExample"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(canvas.getByTestId('data-testid'));
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { fireEvent, userEvent, within} from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ClickExamples',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ClickExample = Template.bind({});
ClickExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(canvas.getByTestId('data-testid'));
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import { fireEvent, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ClickExamples',
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
export const ClickExample = Template.bind({});
ClickExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(canvas.getByTestId('data-testid'));
};
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { fireEvent, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

<Meta title="ClickExamples" component={MyComponent} />

export const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

{/*  
  Seehttps://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ClickExample"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  }}>
  {Template.bind({})}
</Story>

<Story
  name="FireEventExample"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(canvas.getByTestId('data-testid'));
  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { fireEvent, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ClickExamples',
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
export const ClickExample = Template.bind({});
ClickExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(canvas.getByTestId('data-testid'));
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { fireEvent, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

<Meta title="ClickExamples" component={MyComponent} />

export const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent/>',
});

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ClickExample"
  play={ async ({ canvasElement}) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  }}>
  {Template.bind({})}
</Story>

<Story
  name="FireEventExample"
   play={async ({ canvasElement}) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(canvas.getByTestId('data-testid'));
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="vue" language="ts"
// import { Meta, Story } from '@storybook/vue3'; for Vue 3
import { Meta, Story } from '@storybook/vue';

import { fireEvent, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ClickExamples',
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
export const ClickExample = Template.bind({});
ClickExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

export const FireEventExample = Template.bind({});
FireEventExample.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await fireEvent.click(canvas.getByTestId('data-testid'));
};
```
