```md filename="Button.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './button.component';

<Meta title="Button" component={Button} />

{/* 👇 We create a “template” of how args map to rendering */}
export const Template = (args) => ({ props: args });

{/* 👇 Each story then reuses that template */}
<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Button',
  }} >
  {Template.bind({})}
</Story>
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular/';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props: args,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
```
```js filename="Button.stories.js" renderer="html" language="js"
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  const btn = document.createElement('button');
  btn.innerText = args.label;

  const mode = args.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['storybook-button', 'storybook-button--medium', mode].join(' ');

  return btn;
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
```
```ts filename="Button.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

type ButtonArgs = {
  primary: boolean;
  label: string;
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
} as Meta<ButtonArgs>;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<ButtonArgs> = (args): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.innerText = args.label;

  const mode = args.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['storybook-button', 'storybook-button--medium', mode].join(' ');

  return btn;
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
```
```js filename="Button.stories.js|jsx" renderer="preact" language="js"
/** @jsx h */
import { h } from 'preact';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
}
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
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
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Button',
};
```
```md filename="Button.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

{/* 👇 We create a “template” of how args map to rendering */}

export const Template = (args) => <Button {...args} />;

{/* 👇 Each story then reuses that template */}
<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Button',
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
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
};

// 👇 We create a “template” of how args map to rendering
const Template = (args)=>({
  component: Button,
  props: args,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
```
```md filename="Button.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';

<Meta title="Button" component={Button} />

{/* 👇 We create a “template” of how args map to rendering */}

export const Template = (args) => ({
  Component: Button,
  props: args,
});

{/* 👇 Each story then reuses that template */}
<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Button',
  }}>
  {Template.bind({})}
</Story>
```
```html filename="Button.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import Button from './Button.svelte';
</script>

<Meta
  title="Button"
  component={Button}
  argTypes={{
    label: { control: 'text' },
    primary: { control: 'boolean' },
  }}
/>

{/*👇 We create a “template” of how args map to rendering */}

<Template let:args>
  <Button {...args} />
</Template>

{/* 👇 Each story then reuses that template */}

<Story
  name='Primary'
  args={{
    primary: true,
    label: 'Button'
  }}
/>
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="2"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
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
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Button v-bind="args" />',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-2"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta title="Button" component={Button} />

{/* 👇 We create a “template” of how args map to rendering */}

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button v-bind="$props" v-on="$props" />`,
});

{/* 👇 Each story then reuses that template */}
<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Button',
  }}>
  {Template.bind({})}
</Story>
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-3"
import { Meta, Story } from "@storybook/addon-docs";

import Button from './Button.vue';

<Meta title="Button" component={Button}/>

{/* 👇 We create a “template” of how args map to rendering */}

export const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

<Story
  name="Primary"
  args={{
    primary: true,
    label: 'Button',
  }}>
  {Template.bind({})}
</Story>
```
```js filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button';

export default {
  title: 'Button',
};

//👇 We create a “template” of how args map to rendering
const Template = ({ primary, label }) =>
  html`<demo-button ?primary=${primary} .label=${label}></demo-button>`;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
```
