```md renderer="angular" language="mdx"
{/* RegistrationForm.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm.component';

<Meta title="RegistrationForm" component={RegistrationForm} />

export const Template = (args) => ({ props: args });

{/*  
 See https://storybook.js.org/docs/angular/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="FilledForm"
  play={ async ({ canvasElement, args}) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });

    // See https://storybook.js.org/docs/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole('button');

    await userEvent.click(submitButton);
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="RegistrationForm.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { userEvent, within } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RegistrationForm',
  component: RegistrationForm,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

/*
* See https://storybook.js.org/docs/angular/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  const passwordInput = canvas.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = canvas.getByRole('button');

  await userEvent.click(submitButton);
};
```
```js filename="RegistrationForm.stories.js|jsx" renderer="react" language="js"
import { within, userEvent } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RegistrationForm',
  component: RegistrationForm,
};

const Template = (args) => <RegistrationForm {...args} />;

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas= within(canvasElement);

  const emailInput = canvas.getByLabelText('email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  const passwordInput = canvas.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = canvas.getByRole('button');

  await userEvent.click(submitButton);
};
```
```md renderer="react" language="mdx"
{/* RegistrationForm.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { within, userEvent } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm';

<Meta title="RegistrationForm" component={RegistrationForm} />

export const Template = (args) => <RegistrationForm {...args} />;

{/*  
 See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="FilledForm"
  play={ async ({ canvasElement }) => {
    const canvas= within(canvasElement);
    
    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole('button');

    await userEvent.click(submitButton);
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="RegistrationForm.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import { RegistrationForm } from './RegistrationForm';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RegistrationForm',
  component: RegistrationForm,
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => <RegistrationForm {...args} />;

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas= within(canvasElement);

  const emailInput = canvas.getByLabelText('email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  const passwordInput = canvas.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = canvas.getByRole('button');

  await userEvent.click(submitButton);
};
```
```js filename="RegistrationForm.stories.js" renderer="svelte" language="js"
import { userEvent, within } from '@storybook/testing-library';

import RegistrationForm from './RegistrationForm.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RegistrationForm',
  component: RegistrationForm,
};

const Template = (args) => ({
  Component: RegistrationForm,
  props: args,
});

/*
* See https://storybook.js.org/docs/svelte/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailInput = canvas.getByLabelText('email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  const passwordInput = canvas.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
  // See https://storybook.js.org/docs/svelte/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = canvas.getByRole('button');

  await userEvent.click(submitButton);
};
```
```md renderer="svelte" language="mdx"
{/* RegistrationForm.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import RegistrationForm from './RegistrationForm.svelte';

<Meta title="RegistrationForm" component={RegistrationForm} />

export const Template = (args) => ({
  Component: RegistrationForm,
  props: args,
});

{/*  
  See https://storybook.js.org/docs/svelte/writing-stories/play-function#working-with-the-canvas
  to learn more about using the canvasElement to query the DOM
*/}
<Story
  name="FilledForm"
  play={ async ({ canvasElement}) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });
    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });
    // See https://storybook.js.org/docs/svelte/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole('button');
    await userEvent.click(submitButton);
  }}>
  {Template.bind({})}
</Story>
```
```js filename="RegistrationForm.stories.js" renderer="vue" language="js"
import { userEvent, within } from '@storybook/testing-library';

import RegistrationForm from './RegistrationForm.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RegistrationForm',
  component: RegistrationForm,
};

const Template = (args) => ({
  components: { RegistrationForm },
  template: '<RegistrationForm />',
});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailInput = canvas.getByLabelText('email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });
    
  const passwordInput = canvas.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
    
    // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const Submit = canvas.getByRole('button');
  await userEvent.click(Submit);
};
```
```md renderer="vue" language="mdx"
{/* RegistrationForm.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { userEvent, within } from '@storybook/testing-library';

import RegistrationForm from './RegistrationForm.vue';

<Meta title="RegistrationForm" component={RegistrationForm} />

export const Template = (args) => ({
  components: { RegistrationForm },
  template: '<RegistrationForm />',
});

{/*  
 See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
 to learn more about using the canvasElement to query the DOM
 */}
<Story
  name="FilledForm"
  play={ async ({ canvasElement }) => {
    const canvas= within(canvasElement);

    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });
    
    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });
    
    // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const Submit = canvas.getByRole('button');
    await userEvent.click(Submit);
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="RegistrationForm.stories.ts" renderer="vue" language="ts"
// import { Meta, StoryFn } from '@storybook/vue3'; for Vue 3
import { Meta, StoryFn } from '@storybook/vue';

import { userEvent, within } from '@storybook/testing-library';

import RegistrationForm from './RegistrationForm.vue';

export default {
 /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RegistrationForm',
  component: RegistrationForm,
} as Meta<typeof RegistrationForm>;

const Template: StoryFn<typeof RegistrationForm> = (args) => ({
  components: { RegistrationForm },
  template: '<RegistrationForm />',
});

/*
* See https://storybook.js.org/docs/vue/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailInput = canvas.getByLabelText('email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });
    
  const passwordInput = canvas.getByLabelText('password', {
    selector: 'input',
  });

  await userEvent.type(passwordInput, 'ExamplePassword', {
    delay: 100,
  });
    
  // See https://storybook.js.org/docs/vue/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const submitButton = canvas.getByRole('button');
  await userEvent.click(submitButton);
};
```
