```md renderer="angular" language="mdx"
{/* MyComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './my-component.component';

<Meta title="MyComponent" component={MyComponent}/>

export const Template = (args) => ({ props: args });

<Canvas>
  <Story
    name="ExampleStory"
    args={{
      propertyA: process.env.STORYBOOK_DATA_KEY,
    }}>
    {Template.bind({})}
</Canvas>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY,
};
```
```md renderer="react" language="mdx"
{/* MyComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent';

<Meta title="MyComponent" />

export const Template = (args) => <MyComponent {...args} />

<Canvas>
  <Story
    name="ExampleStory"
    args={{
      propertyA: process.env.STORYBOOK_DATA_KEY,
    }}>
    {Template.bind({})}
</Canvas>
```
```ts filename="MyComponent.stories.ts| tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY,
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};


const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY
};
```
```md renderer="svelte" language="mdx"
{/* MyComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.svelte';

<Meta title="MyComponent" component={MyComponent}/>

export const Template = (args) => ({
  Component: MyComponent,
  props: args,
});

<Canvas>
  <Story
    name="ExampleStory"
    args={{
      propertyA: process.env.STORYBOOK_DATA_KEY,
    }}>
    {Template.bind({})}
</Canvas>
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* MyComponent.stories.svelte */}

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import MyComponent from './MyComponent.svelte';
</script>

<Meta
  title="MyComponent"
  component={MyComponent}
/>

<Template let:args>
  <MyComponent {...args} />
</Template>

<Story
  name="ExampleStory"
  args={{
    propertyA: process.env.STORYBOOK_DATA_KEY,
  }}
/>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js" tabTitle="2"
import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args, { argTypes }) => ({
  components: { MyComponent },
  props: Object.keys(argTypes),
  template: '<MyComponent v-bind="$props"/>',
});

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY,
};
```
```js filename="MyComponent.stories.js" renderer="vue" language="js" tabTitle="3"
import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => ({
  components: { MyComponent },
  setup() {
    return { args };
  },
  template: '<MyComponent v-bind="args"/>',
});

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY,
};
```
```md renderer="vue" language="mdx" tabTitle="mdx-2"
{/* MyComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.vue';

<Meta title="MyComponent" component={MyComponent}/>

export const Template = (args, { argTypes }) => ({
  components: { MyComponent },
  props: Object.keys(argTypes),
  template: '<MyComponent v-bind="$props"/>',
});

<Canvas>
  <Story
    name="ExampleStory"
    args={{
      propertyA: process.env.STORYBOOK_DATA_KEY,
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```md renderer="vue" language="mdx" tabTitle="mdx-3"
{/* MyComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.vue';

<Meta title="MyComponent" component={MyComponent}/>

export const Template = (args) => ({
  components: { MyComponent },
  setup() {
    return { args };
  },
  template: '<MyComponent v-bind="args" />',
});

<Canvas>
  <Story
    name="ExampleStory"
    args={{
      propertyA: process.env.STORYBOOK_DATA_KEY,
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```js filename="my-component.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './my-component';

export default {
  title: 'MyComponent',
};

const Template = ({ propertyA }) => html`<my-component .propertyA=${propertyA}></my-component>`;

export const Default = Template.bind({});

Default.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY,
};
```
