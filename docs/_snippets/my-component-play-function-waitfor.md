```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

<Meta title="WithAsync" component={MyComponent} />

export const Template = (args) => ({ props: args });

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ExampleAsyncStory"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const Input = canvas.getByLabelText('Username', {
      selector: 'input',
    });

    await userEvent.type(Input, 'WrongInput', {
      delay: 100,
    });

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    
    const Submit = canvas.getByRole('button');
    await userEvent.click(Submit);

    await waitFor(async () => {
      await userEvent.hover(canvas.getByTestId('error'));
    });
  }} >
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithAsync',
  component: MyComponent,
  
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const Input = canvas.getByLabelText('Username', {
    selector: 'input',
  });
  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = canvas.getByRole('button');
  await userEvent.click(Submit);
  await waitFor(async () => {
    await userEvent.hover(canvas.getByTestId('error'));
  });
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithAsync',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const Input = canvas.getByLabelText('Username', {
    selector: 'input',
  });

  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = canvas.getByRole('button');
  await userEvent.click(Submit);
  
  await waitFor(async () => {
    await userEvent.hover(canvas.getByTestId('error'));
  });
};
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

<Meta title="WithAsync" component={MyComponent}/>

export const Template = (args) => <MyComponent {...args} />;

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ExampleAsyncStory"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const Input = canvas.getByLabelText('Username', {
      selector: 'input',
    });

    await userEvent.type(Input, 'WrongInput', {
      delay: 100,
    });
    
    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const Submit = canvas.getByRole('button');

    await userEvent.click(Submit);

    await waitFor(async () => {
      await userEvent.hover(canvas.getByTestId('error'));
    });
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithAsync',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const Input = canvas.getByLabelText('Username', {
    selector: 'input',
  });

  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = canvas.getByRole('button');

  await userEvent.click(Submit);

  await waitFor(async () => {
    await userEvent.hover(canvas.getByTestId('error'));
  });
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import { userEvent, waitFor, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See hhttps://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithAsync',
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
export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const Input = canvas.getByLabelText('Username', {
    selector: 'input',
  });

  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = canvas.getByRole('button');
  await userEvent.click(Submit);

  await waitFor(async () => {
    await userEvent.hover(canvas.getByTestId('error'));
  });
};
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.svelte';

<Meta title="WithAsync" component={MyComponent} />

export const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

{/*  
  See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ExampleAsyncStory"
  play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const Input = canvas.getByLabelText('Username', {
      selector: 'input',
    });

    await userEvent.type(Input, 'WrongInput', {
      delay: 100,
    });

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const Submit = canvas.getByRole('button');
    await userEvent.click(Submit);

    await waitFor(async () => {
      await userEvent.hover(canvas.getByTestId('error'));
    });
  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { userEvent, waitFor, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'WithAsync',
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
export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const Input = canvas.getByLabelText('Username', {
    selector: 'input',
  });

  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = canvas.getByRole('button');
  await userEvent.click(Submit);

  await waitFor(async () => {
    await userEvent.hover(canvas.getByTestId('error'));
  });
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

<Meta title="WithAsync" component={MyComponent} />

export const Template = (args) => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="ExampleAsyncStory"
   play={ async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const Input = canvas.getByLabelText('Username', {
      selector: 'input',
    });

    await userEvent.type(Input, 'WrongInput', {
      delay: 100,
    });

    // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const Submit = canvas.getByRole('button');
    await userEvent.click(Submit);

    await waitFor(async () => {
      await userEvent.hover(canvas.getByTestId('error'));
    });
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="vue" language="ts"
// import { Meta, StoryFn } from '@storybook/vue3'; for Vue 3
import { Meta, StoryFn } from '@storybook/vue';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'WithAsync',
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
export const ExampleAsyncStory = Template.bind({});
ExampleAsyncStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const Input = canvas.getByLabelText('Username', {
    selector: 'input',
  });

  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });

  // See https://storybook.js.org/docs/6/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = canvas.getByRole('button');
  await userEvent.click(Submit);

  await waitFor(async () => {
    await userEvent.hover(canvas.getByTestId('error'));
  });
};
```
