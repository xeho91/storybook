```md filename="Button.stories.mdx" renderer="angular" language="mdx" tabTitle="mdx-storyname"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './button.component';

<Meta title="Button" component={Button} />

export const Template = (args) => ({ props: args });

<Story name="Basic" args={{ label: 'hello' }}>
  {Template.bind({})}
</Story>
```
```md filename="Button.stories.mdx" renderer="react" language="mdx" tabTitle="mdx-storyname"
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
```md filename="Button.stories.mdx" renderer="svelte" language="mdx" tabTitle="mdx-storyname"
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
```md filename="Button.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-storyname-2"
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
```md filename="Button.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-storyname-3"
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
```md filename="MyComponent.stories.mdx" renderer="common" language="mdx" tabTitle="mdx-story-id"
import { Story } from '@storybook/addon-docs';

<Story id="some-component--some-name" />
```
