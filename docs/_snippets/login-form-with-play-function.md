```md renderer="angular" language="mdx"
{/* LoginForm.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm.component';

<Meta title="Form" component={LoginForm} />

export const Template = (args) => ({ props: args });

<Canvas>
  <Story name="Empty Form">
    {Template.bind({})}
  </Story>
  {/*  
  See https://storybook.js.org/docs/angular/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
  */}
  <Story
    name="Filled Form"
    play={async ({ canvasElement }) => {
      // Starts querying the component from its root element
      const canvas = within(canvasElement);

      // 👇 Simulate interactions with the component
      await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

      await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

      // See https://storybook.js.org/docs/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
      await userEvent.click(canvas.getByRole('button'));

      // 👇 Assert DOM structure
      await expect(
        canvas.getByText(
          'Everything is perfect. Your account is ready and we should probably get you started!'
        )
      ).toBeInTheDocument();
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="LoginForm.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const EmptyForm: Story = Template.bind({});

/*
* See https://storybook.js.org/docs/angular/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm: Story = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
```js filename="LoginForm.stories.jsx | LoginForm.stories.js | LoginForm.stories.ts | LoginForm.stories.tsx" renderer="common" language="js"
import { userEvent, within } from '@storybook/testing-library';

import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
};

export const Example = {
  play: async ({ canvasElement }) => {
    // Queries the DOM and looks for the root element of the component and assigns it for a performance boost
    const canvas = within(canvasElement);
    
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com', {
      delay: 100,
    });
    await userEvent.type(canvas.getByTestId('password'), 'a-random-password'{
      delay: 100,
    });
    // See https://storybook.js.org/docs/7.0/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  },
};
```

```md renderer="common" language="mdx"
{/* LoginForm.stories.mdx */}

import { Meta, Story} from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { LoginForm } from './LoginForm';

<Meta title="Form" component={LoginForm} />

{/*👇 Queries the DOM and looks for the root element of the component and assigns it for a performance boost */}

<Story 
  name="Example"
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    await userEvent.type(screen.getByTestId('email'), 'emailaddress@provider.com', {
      delay: 100,
    });
    await userEvent.type(screen.getByTestId('password'), 'a-random-password', {
      delay: 100,
    });
    
    // See https://storybook.js.org/docs/7.0/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
}} />
```

```js filename="LoginForm.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
```md renderer="react" language="mdx"
{/* LoginForm.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm';

<Meta title="Form" component={LoginForm} />

export const Template = (args) => <LoginForm {...args} />;

<Canvas>
  <Story name="Empty Form">
    {Template.bind({})}
  </Story>
  {/*  
   See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
   to learn more about using the canvasElement to query the DOM
  */}
  <Story
    name="Filled Form"
    play={ async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      // 👇 Simulate interactions with the component
      await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

      await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

      // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
      await userEvent.click(canvas.getByRole('button'));

      // 👇 Assert DOM structure
      await expect(
        canvas.getByText(
          'Everything is perfect. Your account is ready and we should probably get you started!'
        )
      ).toBeInTheDocument();
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="LoginForm.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
```js filename="LoginForm.stories.js" renderer="svelte" language="js"
import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
};

const Template = (args) => ({
  Component: LoginForm,
  props: args,
});

export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/svelte/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/svelte/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
```md renderer="svelte" language="mdx"
{/* LoginForm.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.svelte';

<Meta title="Form" component={LoginForm} />

export const Template = (args) => ({
  Component: LoginForm,
  props: args,
});

<Canvas>
  <Story name="Empty Form">
    {Template.bind({})}
  </Story>
  {/*  
  See https://storybook.js.org/docs/svelte/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
  */}
  <Story
    name="Filled Form"
    play={ async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      // 👇 Simulate interactions
      await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
      
      await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

      // See https://storybook.js.org/docs/svelte/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
      await userEvent.click(canvas.getByRole('button'));

      // 👇 Assert DOM structure
      await expect(
        canvas.getByText(
          'Everything is perfect. Your account is ready and we should probably get you started!'
        )
      ).toBeInTheDocument();
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```js filename="LoginForm.stories.js" renderer="vue" language="js" tabTitle="2"
import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
};

const Template = (args, { argTypes }) => ({
  components: { LoginForm },
  props: Object.keys(argTypes),
  template: `<LoginForm v-bind="$props" v-on="$props" />`,
});

export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
```js filename="LoginForm.stories.js" renderer="vue" language="js" tabTitle="3"
import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: LoginForm,
};

const Template = (args) => ({
  components: { LoginForm },
  setup() {
    return args;
  },
  template: '<LoginForm @onSubmit="onSubmit" v-bind="args" />',
});

export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
```md renderer="vue" language="ts" tabTitle="mdx-2"
{/* LoginForm.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.vue';

<Meta title="Form" component={LoginForm} />

export const Template = (args, { argTypes }) => ({
  components: { LoginForm },
  props: Object.keys(argTypes),
  template: `<LoginForm v-bind="$props" v-on="$props" />`,
});

<Canvas>
  <Story name="Empty Form">
    {Template.bind({})}
  </Story>
  {/*  
   See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
   to learn more about using the canvasElement to query the DOM
  */}
  <Story
    name="Filled Form"
    play={ async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      // 👇 Simulate interactions with the component
      await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

      await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

      // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
      await userEvent.click(canvas.getByRole('button'));

      // 👇 Assert DOM structure
      await expect(
        canvas.getByText(
          'Everything is perfect. Your account is ready and we should probably get you started!'
        )
      ).toBeInTheDocument();
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```md renderer="vue" language="ts" tabTitle="mdx-3"
{/* LoginForm.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.vue';

<Meta title="Form" component={LoginForm} />

export const Template = (args) => ({
  components: { LoginForm },
  setup() {
    return { args };
  },
  template: '<LoginForm @onSubmit="onSubmit" v-bind="args" />',
});

<Canvas>
  <Story name="Empty Form">
    {Template.bind({})}
  </Story>
  {/*  
   See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
   to learn more about using the canvasElement to query the DOM
  */}
  <Story
    name="Filled Form"
    play={ async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      // 👇 Simulate interactions with the component
      await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

      await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

      // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
      await userEvent.click(canvas.getByRole('button'));

      // 👇 Assert DOM structure
      await expect(
        canvas.getByText(
          'Everything is perfect. Your account is ready and we should probably get you started!'
        )
      ).toBeInTheDocument();
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="LoginForm.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.vue';

import { Meta, StoryFn } from '@storybook/vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Form',
  component: LoginForm,
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => ({
  components: { LoginForm },
  props: Object.keys(argTypes),
  template: `<LoginForm v-bind="$props" v-on="$props" />`,
});

export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
```ts filename="LoginForm.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import LoginForm from './LoginForm.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Form',
  component: LoginForm,
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => ({
  components: { LoginForm },
  setup() {
    return args;
  },
  template: '<LoginForm @onSubmit="onSubmit" v-bind="args" />',
});

export const EmptyForm = Template.bind({});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBeInTheDocument();
};
```
