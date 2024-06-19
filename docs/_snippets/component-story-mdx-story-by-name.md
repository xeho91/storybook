```md renderer="angular" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './button.component';

<Meta title="Button" component={Button} />

export const Template = (args) => ({ props: args });

<Story name="Basic" args={{ label: 'hello' }}>
  {Template.bind({})}
</Story>
```
```md renderer="react" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

export const Template = (args) => <Button {...args} />;

<Story 
  name="Basic" 
  args={{ 
    label: 'hello' 
  }}>
  {Template.bind({})}
<Story>
```
```md renderer="svelte" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';

<Meta title="Button" component={Button}/>

export const Template = (args) => ({
  Component: Button,
  props: args,
});

<Story name="Basic" args={{ label: 'hello' }}>
  {Template.bind({})}
</Story>
```
```md renderer="vue" language="mdx" tabTitle="mdx-2"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta title="Button" component={Button} />

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});

<Story name="Basic" args={{ label: 'hello' }}>
  {Template.bind({})}
</Story>
```
```md renderer="vue" language="mdx" tabTitle="mdx-3"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta title="Button" component={Button} />

export const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

<Story name="Basic" args={{ label: 'hello' }}>
  {Template.bind({})}
</Story>
```
