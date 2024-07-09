```md filename="Button.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button.component';

<Meta 
  title="Accessibility testing" 
  component={Button} 
  argTypes={{
    backgroundColor: {
      control: {
        type: 'color',
      }
    }
  }} />

export const Template = (args) => ({ props: args });

## This is an accessible story

<Story
  name="Accessible"
  args={{ 
    primary: false,
    label: 'Button'
  }}>
  {Template.bind({})}
</Story>

## This is not

<Story
  name="Inaccessible"
  args={{ 
    primary: false, 
    label: 'Button', 
    backgroundColor: 'red'
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Button } from './Button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Accessible: Story = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

export const Inaccessible: Story = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
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
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
};
```
```md filename="Button.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta 
  title="Accessibility testing" 
  component={Button} 
  argTypes={{
    backgroundColor: {
      control: {
        type: 'color',
      }
    }
  }} />

export const Template = (args) => <Button {...args} />;

## This is an accessible story

<Story
  name="Accessible"
  args={{ 
    primary: false,
    label: 'Button'
  }}>
  {Template.bind({})}
</Story>

## This is not

<Story
  name="Inaccessible"
  args={{
    primary: false, 
    label: 'Button',
    backgroundColor: 'red'
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
};
```
```js filename="Button.stories.js" renderer="svelte" language="js"
import Button from './Button.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => ({
  Component: Button,
  props: args,
});

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
};
```
```md filename="Button.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';

<Meta 
  title="Accessibility testing" 
  component={Button} 
  argTypes={{
    backgroundColor: {
      control: {
        type: 'color',
      }
    }
  }} />

export const Template = (args) => ({
  Component: Button,
  props: args,
});

## This is an accessible story

<Story
  name="Accessible"
  args={{
    primary: false, 
    label: 'Button'
  }}>
  {Template.bind({})}
</Story>

## This is not

<Story
  name="Inaccessible"
  args={{
    primary: false,
    label: 'Button',
    backgroundColor: 'red'
  }}>
  {Template.bind({})}
</Story>
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="2"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" v-on="$props" />',
});

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
};
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="3"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Accessibility testing',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

// This is an accessible story
export const Accessible = Template.bind({});
Accessible.args = {
  primary: false,
  label: 'Button',
};

// This is not
export const Inaccessible = Template.bind({});
Inaccessible.args = {
  ...Accessible.args,
  backgroundColor: 'red',
};
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-2"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta 
  title="Accessibility testing" 
  component={Button} 
  argTypes={{
    backgroundColor: {
      control: {
        type: 'color',
      }
    }
  }} />

export const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" v-on="$props" />',
});

## This is an accessible story

<Story
  name="Accessible"
  args={{
    primary: false,
    label: 'Button'
  }}>
  {Template.bind({})}
</Story>

## This is not

<Story
  name="Inaccessible"
  args={{
    primary: false,
    label: 'Button',
    backgroundColor: 'red'
  }}>
  {Template.bind({})}
</Story>
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-3"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta 
  title="Accessibility testing" 
  component={Button} 
  argTypes={{
    backgroundColor: {
      control: {
        type: 'color',
      }
    }
  }} />

export const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

## This is an accessible story

<Story
  name="Accessible"
  args={{
    primary: false,
    label: 'Button'
  }}>
  {Template.bind({})}
</Story>

## This is not

<Story
  name="Inaccessible"
  args={{
    primary: false,
    label: 'Button',
    backgroundColor: 'red'
  }}>
  {Template.bind({})}
</Story>
```
