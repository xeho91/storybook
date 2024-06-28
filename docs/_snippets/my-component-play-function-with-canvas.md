```md renderer="angular" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { getByRole, userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

<Meta title="WithCanvasElement" component={MyComponent} />

export const Template = (args) => ({ props: args });

<Story
  name="ExampleStory"
  play={async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);

    // Starts querying from the component's root element
    await userEvent.type(canvas.getByTestId('example-element'), 'something');
    await userEvent.click(canvas.getByRole('another-element'));
  }} >
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { getByRole, userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithCanvasElement',
  component: MyComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const ExampleStory: Story = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { getByRole, userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithCanvasElement',
  component: MyComponent,
};

const Template = () => <MyComponent {...args} />;

export const ExampleStory = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```
```md renderer="react" language="mdx"
import { Meta, Story} from '@storybook/addon-docs'

import { userEvent, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="WithCanvasElement" component={MyComponent}/>

export const Template = (args) => <MyComponent {...args} />;

<Story
  name="ExampleStory"
  play={async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);

    // Starts querying from the component's root element
    await userEvent.type(canvas.getByTestId('example-element'), 'something');
    await userEvent.click(canvas.getByRole('another-element'));
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
  title: 'WithCanvasElement',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const ExampleStory = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import { getByRole, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithCanvasElement',
  component: MyComponent,  
};

const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

export const ExampleStory = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```
```md renderer="svelte" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { getByRole, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

<Meta title="WithCanvasElement" component={MyComponent} />

export const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

<Story
  name="ExampleStory"
  play={async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);

    // Starts querying from the component's root element
    await userEvent.type(canvas.getByTestId('example-element'), 'something');
    await userEvent.click(canvas.getByRole('another-element'));
  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { getByRole, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithCanvasElement',
  component: MyComponent,
};

const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent/>',
});

export const ExampleStory = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  /// Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```
```md renderer="vue" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { getByRole, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

<Meta title="WithCanvasElement" component={MyComponent} />

export const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent/>',
});

<Story
  name="ExampleStory"
  play={async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);

    // Starts querying from the component's root element
    await userEvent.type(canvas.getByTestId('example-element'), 'something');
    await userEvent.click(canvas.getByRole('another-element'));
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="vue" language="ts"
// import { Meta, StoryFn } from '@storybook/vue3'; for Vue 3
import { Meta, StoryFn } from '@storybook/vue';

import { getByRole, userEvent, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'WithAsync',
  component: MyComponent,
} as Meta<typeof MyComponent>;


const Template: StoryFn<typeof MyComponent> = (args) => ({
 components: { MyComponent },
  template: '<MyComponent />',
});

export const ExampleStory = Template.bind({});
ExampleStory.play = async ({ canvasElement }) => {
  /// Assigns canvas to the component root element
  const canvas = within(canvasElement);

  // Starts querying from the component's root element
  await userEvent.type(canvas.getByTestId('example-element'), 'something');
  await userEvent.click(canvas.getByRole('another-element'));
};
```
