```md filename="Checkbox.stories.mdx" renderer="angular" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Checkbox } from './checkbox.component';

<Meta title="MDX/Checkbox" component={Checkbox} />

export const Template = (args) => ({ props: args });

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our
Markdown documentation.

<Canvas>
  <Story 
    name="Unchecked"
    args={{ 
      label: 'Unchecked',
    }}>
    {Template.bind({})}
  </Story>

  <Story 
    name="Checked"
    args={{ 
      label: 'Unchecked',
      checked: true,
    }}>
    {Template.bind({})}
  </Story>

  <Story 
    name="Secondary"
    args={{
      label: 'Secondary',
      checked: true, 
      appearance: 'secondary',
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```md filename="Checkbox.stories.mdx" renderer="react" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Checkbox } from './Checkbox';

<Meta title="MDX/Checkbox" component={Checkbox} />

export const Template = (args) => <Checkbox {...args} />;

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our
Markdown documentation.

<Canvas>
  <Story 
    name="Unchecked"
    args={{ 
      label: 'Unchecked',
    }}>
    {Template.bind({})}
   </Story>

  <Story 
    name="Checked"
    args={{ 
      label: 'Unchecked', 
      checked: true,
    }}>
    {Template.bind({})}
   </Story>
  
  <Story 
    name="Secondary"
    args={{
      label: 'Secondary', 
      checked: true, 
      appearance: 'secondary',
    }}>
    {Template.bind({})}
   </Story>
</Canvas>
```
```md filename="Checkbox.stories.mdx" renderer="svelte" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Checkbox from './Checkbox.svelte';

<Meta title="MDX/Checkbox" component={Checkbox} />

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our
Markdown documentation.

export const Template = (args) => ({
  Component: Button,
  props: args,
});

<Canvas>
  <Story 
    name="Unchecked"
    args={{ 
      label: 'Unchecked',
    }}>
    {Template.bind({})}
   </Story>

  <Story 
    name="Checked"
    args={{ 
      label: 'Unchecked', 
      checked: true,
    }}>
    {Template.bind({})}
   </Story>
  
  <Story 
    name="Secondary"
    args={{
      label: 'Secondary', 
      checked: true, 
      appearance: 'secondary',
    }}>
    {Template.bind({})}
   </Story>
</Canvas>
```
```md filename="Checkbox.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-2"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Checkbox from './Checkbox.vue';

<Meta title="MDX/Checkbox" component={Checkbox} />

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Checkbox },
  template: '<Checkbox v-bind="$props" />',
});

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our
Markdown documentation.

<Canvas>
  <Story 
    name="Unchecked"
    args={{ 
      label: 'Unchecked',
    }}>
    {Template.bind({})}
   </Story>

  <Story 
    name="Checked"
    args={{ 
      label: 'Unchecked', 
      checked: true,
    }}>
    {Template.bind({})}
   </Story>
  
  <Story 
    name="Secondary"
    args={{
      label: 'Secondary', 
      checked: true, 
      appearance: 'secondary',
    }}>
    {Template.bind({})}
   </Story>
</Canvas>
```
```md filename="Checkbox.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-3"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Checkbox from './Checkbox.vue';

<Meta title="MDX/Checkbox" component={Checkbox} />

export const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our
Markdown documentation.

<Canvas>
  <Story 
    name="Unchecked"
    args={{ 
      label: 'Unchecked',
    }}>
    {Template.bind({})}
   </Story>

  <Story 
    name="Checked"
    args={{ 
      label: 'Unchecked', 
      checked: true,
    }}>
    {Template.bind({})}
   </Story>
  
  <Story 
    name="Secondary"
    args={{
      label: 'Secondary', 
      checked: true, 
      appearance: 'secondary',
    }}>
    {Template.bind({})}
   </Story>
</Canvas>
```
