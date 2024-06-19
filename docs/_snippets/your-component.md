```md renderer="angular" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { YourComponent } from './your.component';

{/*👇 The title prop determines where your story goes in the story list */}
<Meta title="YourComponent" component={YourComponent} />

{/*👇 We create a “template” of how args map to rendering */} 
export const Template = (args) => ({ props: args });

{/* 👇 The args you need here will depend on your component */}
<Story
  name="FirstStory"
  args={{}}>
  {Template.bind({})}
</Story>
```
```ts filename="YourComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';


import { YourComponent } from './your.component';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props:args,
});

export const FirstStory = Template.bind({});
FirstStory.args= {
 //👇 The args you need here will depend on your component
};
```
```js filename="YourComponent.stories.js" renderer="html" language="js"
import { createYourComponent } from './YourComponent';

// 👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'YourComponent',
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => createYourComponent(args);

export const FirstStory = Template.bind({});
FirstStory.args = {
  // 👇 The args you need here will depend on your component
};
```

```ts filename="YourComponent.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';
import { createYourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'YourComponent',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn = (args): HTMLElement => createYourComponent(args);

export const FirstStory = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
};
```

```js filename="YourComponent.stories.js|jsx" renderer="preact" language="js"
/** @jsx h */
import { h } from 'preact';

import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/preact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
};
```
```js filename="YourComponent.stories.js|jsx" renderer="react" language="js"
import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <YourComponent {...args} />;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
```

```md renderer="react" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { YourComponent } from './YourComponent';

{/*👇 The title prop determines where your story goes in the story list */}
<Meta title="YourComponent" component={YourComponent} />

{/*👇 We create a “template” of how args map to rendering */}
export const Template = (args) => <YourComponent {...args} />;

{/* 👇 The args you need here will depend on your component */}
<Story
  name="FirstStory"
  args={{}}>
  {Template.bind({})}
</Story>
```
```ts filename="YourComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
} as ComponentMeta<typeof YourComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof YourComponent> = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
```
```js filename="YourComponent.stories.js" renderer="svelte" language="js"
import YourComponent from './YourComponent.svelte';

//👇This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  props: args,
});

export const FirstStory = Template.bind({});
FirstStory.args= {
 //👇 The args you need here will depend on your component
};
```
```md renderer="svelte" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import YourComponent from './YourComponent.svelte';

{/*👇 The title prop determines where your story goes in the story list */}

<Meta title="YourComponent" component={YourComponent} />

{/*👇 We create a “template” of how args map to rendering */}
export const Template = (args) => ({
  Component: YourComponent,
  props: args,
});

{/* 👇 The args you need here will depend on your component */}
<Story
  name="FirstStory"
  args={{}}>
  {Template.bind({})}
</Story>
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* YourComponent.stories.svelte */}

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import YourComponent from './YourComponent.svelte';
</script>

{/*👇 The title determines where your story goes in the story list */}
<Meta
  title="YourComponent"
  component={YourComponent}
  argTypes={{
    /* Customize your args here depending on your component */
  }}
/>

<Template let:args>
  <Button {...args} />
</Template>

<Story
  name="FirstStory"
  args={{
    /* The args you need here will depend on your component */
  }}
/>
```

```js filename="YourComponent.stories.js" renderer="vue" language="js" tabTitle="2"
import YourComponent from './YourComponent.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>',
});

export const FirstStory = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
};
```
```js filename="YourComponent.stories.js" renderer="vue" language="js" tabTitle="3"
import YourComponent from './YourComponent.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { YourComponent },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<YourComponent v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
};
```
```md renderer="vue" language="mdx" tabTitle="mdx-2"
{/* YourComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import YourComponent from './YourComponent.vue';

{/*👇 The title prop determines where your story goes in the story list */}
<Meta title="YourComponent" component={YourComponent} />

{/*👇 We create a “template” of how args map to rendering */}
export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YourComponent },
  template: `<YourComponent v-bind="$props" />`,
});

{/* 👇 The args you need here will depend on your component */}
<Story
  name="FirstStory"
  args={{}}>
  {Template.bind({})}
</Story>
```
```md renderer="vue" language="mdx" tabTitle="mdx-3"
{/* YourComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import YourComponent from './YourComponent.vue';

{/*👇 The title prop determines where your story goes in the story list */}
<Meta title="YourComponent" component={YourComponent} />

{/*👇 We create a “template” of how args map to rendering */}
export const Template = (args) => ({
  components: { YourComponent },
  setup() {
    return { args };
  },
  template: `<YourComponent v-bind="args" />`,
});

{/* 👇 The args you need here will depend on your component */}
<Story
  name="FirstStory"
  args={{}}>
  {Template.bind({})}
</Story>
```
```js filename="your-component.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './your-component';

// This default export determines where your story goes in the story list
export default {
  title: 'YourComponent',
};

// 👇 We create a “template” of how args map to rendering
const Template = ({ aProperty }) => html`<your-component .yourProperty=${aProperty}></your-component>`;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: 'aProperty'
};
```
