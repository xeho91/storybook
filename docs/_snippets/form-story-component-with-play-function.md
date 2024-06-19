```ts filename="Form.stories.ts" renderer="angular" language="ts"
import { userEvent, within } from '@storybook/testing-library';

import { LoginForm } from './LoginForm.component';

export default {
  component: LoginForm,
};

export const FilledForm = {
  play: async ({ args, canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email');
    await userEvent.type(canvas.getByTestId('password'), 'password');
    
    // See https://storybook.js.org/docs/7.0/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  },
};
```
```js filename="Form.stories.js|jsx|ts|tsx" renderer="react" language="js"
import { userEvent, within } from '@storybook/testing-library';

import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
};

export const FilledForm = {
  play: async ({ args, canvasElement }) => {

    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email');
    await userEvent.type(canvas.getByTestId('password'), 'password');
    
    // See https://storybook.js.org/docs/7.0/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  },
};
```
```js filename="Form.stories.js" renderer="svelte" language="js"
import { userEvent, within } from '@storybook/testing-library';

import LoginForm from './LoginForm.svelte';

export default {
  component: LoginForm,
};

export const FilledForm = {
  play: async ({ args, canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email');
    await userEvent.type(canvas.getByTestId('password'), 'password');
    // See https://storybook.js.org/docs/7.0/svelte/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  },
  render: (args) => {
    Component: LoginForm,
    props: args,
  },
};
```
```js filename="Form.stories.js" renderer="vue" language="js" tabTitle="2"
import { userEvent, within } from '@storybook/testing-library';

import LoginForm from './LoginForm.vue';

export default {
  component: LoginForm,
};

export const FilledForm = {
  play: async ({ args, canvasElement }) => {
     // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email');
    await userEvent.type(canvas.getByTestId('password'), 'password');

    // See https://storybook.js.org/docs/7.0/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  },
  render: (args, { argTypes }) => ({
    components: { LoginForm },
    props: Object.keys(argTypes),
    template: '<LoginForm @onSubmit="onSubmit" v-bind="$props"/>',
  }),
};
```
```js filename="Form.stories.js" renderer="vue" language="js" tabTitle="3"
import { userEvent, within } from '@storybook/testing-library';

import LoginForm from './LoginForm.vue';

export default {
  component: LoginForm,
};

export const FilledForm = {
  play: async ({ args, canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email');
    await userEvent.type(canvas.getByTestId('password'), 'password');
    // See https://storybook.js.org/docs/7.0/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  },
  render: (args) => ({
    components: { LoginForm },
    setup() {
      return { args };
    },
    template: '<LoginForm @onSubmit="onSubmit" v-bind="args" />',
  }),
};
```
