```md filename="Button.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './button.component';

{/* 👇 Creates specific argTypes */}
<Meta
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: {
      control: 'color',
    },
  }}
/>

{/* 👇 Some function to demonstrate the behavior */}
export const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};

{/* 👇 Destructure the label from the args object and assigns the function result to a variable and pass it as a prop into the component */}
<Story
  name="ExampleStory"
  args={{
    primary: true,
    size: 'small',
    label: 'button',
  }}>
  {(args) => {
    const { label } = args;
    const functionResult = someFunction(label);
    return {
      props: {
        ...args,
        label: functionResult,
      },
    };
  }}
</Story>
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

//👇 Some function to demonstrate the behavior
const someFunction = (someValue: string) => {
  return `i am a ${someValue}`;
};

export const ExampleStory: Story = (args) => {
  //👇 Destructure the label from the args object
  const { label } = args;
  
  //👇 Assigns the function result to a variable and pass it as a prop into the component
  const functionResult = someFunction(label);
  return {
    props: {
      ...args,
      label: functionResult,
    },
  };
};
ExampleStory.args = {
  primary: true,
  size: 'small',
  label: 'button',
};
```
```js filename="Button.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//👇 Some function to demonstrate the behavior
const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};

export const ExampleStory = (args) => {
  //👇 Destructure the label from the args object
  const { label } = args;

  //👇 Assigns the function result to a variable and pass it as a prop into the component
  const functionResult = someFunction(label);
  return <Button {...args} label={functionResult} />;
};
ExampleStory.args = {
  primary: true,
  size: 'small',
  label: 'button',
};
```
```md filename="Button.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

{/* 👇 Creates specific argTypes */}
<Meta
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: {
      control: 'color',
    },
  }}
/>

{/* 👇 Some function to demonstrate the behavior */}
export const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};


{/* 👇 Destructure the label from the args object and assigns the function result to a variable and pass it as a prop into the component */}
<Story
  name="ExampleStory"
  args={{
    primary: true,
    size: 'small',
    label: 'button',
  }}>
  {(args) => {
    const { label } = args;
    const functionResult = someFunction(label);
    return <Button {...args} label={functionResult} />;
  }}
</Story>
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

//👇 Some function to demonstrate the behavior
const someFunction = (someValue: String) => {
  return `i am a ${someValue}`;
};

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

export const ExampleStory: ComponentStory<typeof Button> = (args) => {
  //👇 Destructure the label from the args object
  const { label } = args;

  //👇 Assigns the function result to a variable and pass it as a prop into the component
  const functionResult = someFunction(label);
  return <Button {...args} label={functionResult} />;
};
ExampleStory.args = {
  primary: true,
  size: 'small',
  label: 'button',
};
```
```js filename="Button.stories.js" renderer="svelte" language="js"
import Button from './Button.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//👇 Some function to demonstrate the behavior
const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};

export const ExampleStory = (args) => {
  //👇 Destructure the label from the args object
  const { label } = args;

  //👇 Assigns the function result to a variable and pass it as a prop into the component
  const functionResult = someFunction(label);
  return {
    Component: Button,
    props: {
      ...args,
      label: functionResult,
    },
  };
};
ExampleStory.args = {
  primary: true,
  size: 'small',
  label: 'button',
};
```
```md filename="Button.stories.mdx"renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';

{/* 👇 Creates specific argTypes */}
<Meta
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: {
      control: 'color',
    },
  }}
/>

{/* 👇 Some function to demonstrate the behavior */}
export const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};


{/* 👇 Destructure the label from the args object and assigns the function result to a variable and pass it as a prop into the component */}
<Story
  name="ExampleStory"
  args={{
    primary: true,
    size: 'small',
    label: "button",
  }}>
  {(args) => {
    const { label } = args;
    const functionResult = someFunction(label);
    return {
      Component: Button,
      props: {
        ...args,
        label: functionResult,
      },
    };
  }}
</Story>
```
```html filename="Button.stories.mdx" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import Button from './Button.svelte';

  //👇 Some function to demonstrate the behavior
  function someFunction(someValue) {
    return `i am a ${someValue}`;
  }
</script>

{/*👇 Creates specific argTypes */}
<Meta
  title="Button"
  component={Button}  
  argTypes={{
    backgroundColor: { control: 'color' },
  }}
/>

{/* 👇 Assigns the function result to a variable and pass it as a prop into the component */}
<Template let:args>
  <Button {...args} label={someFunction(args.label)} />
</Template>

<Story
  name="ExampleStory"
  args={{
    primary: true,
    size:'small',
    label: 'Button',
  }}
/>
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="3"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

//👇 Some function to demonstrate the behavior
const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};

export const ExampleStory = (args) => {
  //👇 Assigns the function result to a variable
  const functionResult = someFunction(args.label);
  return {
    components: { Button },
    setup() {
      //👇 The args will now be passed down to the template
      return {
        args: {
          ...args,
          //👇 Replaces arg variable with the override (without the need of mutation)
          label: functionResult,
        },
      };
    },
    template: '<Button v-bind="args" />',
  };
};
ExampleStory.args = {
  primary: true,
  size: 'small',
  label: 'button',
};
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-3"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

{/* 👇 Creates specific argTypes */}
<Meta
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: {
      control: 'color',
    },
  }}
/>

{/* 👇 Some function to demonstrate the behavior */}
export const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};


{/* 👇 Destructure the label from the args object and assigns the function result to a variable and pass it as a prop into the component */}
<Story
  name="ExampleStory"
  args={{
    primary: true,
    size: 'small',
    label: 'button',
  }} >
  {(args) => {
    const functionResult = someFunction(args.label);
    return {
      components: { Button },
      setup() {
        return {
          args: {
            ...args,
            label: functionResult,
          },
        };
      },
      template: '<Button v-bind="args" />',
    };
  }}
</Story>
```
