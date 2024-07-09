```js filename="MyForm.stories.js|jsx" renderer="common" language="js"
import { expect } from '@storybook/jest';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { MyForm } from './MyForm'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MyForm',
  component: MyForm,
  argTypes: {
    onSubmit: { action: true },
  },
};

const Template = (args) => (
  // 👇 Your story template goes here
);

/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
const Submitted = Template.bind({});
Submitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
  await userEvent.type(canvas.getByTestId('password'), 'supersecret');
  await userEvent.click(canvas.getByRole('button'));

  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};
```
```md filename="MyForm.stories.mdx" renderer="common" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { MyForm } from './MyForm';

<Meta title="MyForm" component={MyForm} />

export const Template = (args) => (
  // 👇 Your story template goes here
);

{/*  
 See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Canvas>
  <Story
    name="Submitted"
    play={async ({ canvasElement, args}) => {
      const canvas = within(canvasElement);

      await userEvent.type(canvas.getByTestId('Email'), 'hi@example.com');
      await userEvent.type(canvas.getByTestId('Password'), 'supersecret');

      await userEvent.click(canvas.getByRole('button'));

      await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
````
```ts filename="MyForm.stories.ts|tsx" renderer="common" language="ts"
// Replace your-framework with your framework of choice
import { Meta, Story } from '@storybook/your-framework';

import { expect } from '@storybook/jest';

import { userEvent, waitFor, within } from '@storybook/testing-library';

import { MyForm } from './MyForm';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MyForm',
  component: MyForm,
  argTypes: {
    onSubmit: { action: true },
  },
} as Meta;
const Template: Story = (args) => (
 // 👇 Your story template goes here
);
/*
* See https://storybook.js.org/docs/6/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const Submitted = Template.bind({});
Submitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
  await userEvent.type(canvas.getByTestId('password'), 'supersecret');
  await userEvent.click(canvas.getByRole('button'));
  
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};
```
