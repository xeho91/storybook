```md filename="Button.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { Button } from './button.component';

{/* Parent contains ng-content */}
import { Parent } from './parent.component';

<Meta title="Button" component={Button}/>


export const Template = () => ({
  template: `<app-button label="Submit"></app-button>`,
});

{/* With a template */}

<Story 
  name="Primary"
  decorators={[
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
  ]} >
  {Template.bind({})}
</Story>

{/* With a component */}

<Story 
  name="InsideParent"
  decorators={[
    moduleMetadata({
      declarations: [ParentComponent],
    }),
    componentWrapperDecorator(ParentComponent)
  ]} >
  {Template.bind({})}
</Story>
```
```ts filename="Button.stories.mdx" renderer="angular" language="ts"
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';

import { Button } from './button.component';
import { Parent } from './parent.component'; // Parent contains ng-content

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story = (args) => ({
  template: '<app-button label="Submit"></app-button>',
});

export const Primary = Template.bind({});
Primary.decorators = [
  componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
];

export const Primary = {
  decorators: [componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)],
};

export const InsideParent= Template.bind({});
InsideParent.decorators = [
  moduleMetadata({
    declarations: [Parent],
  }),
  componentWrapperDecorator(Parent),
];
```
```js filename="Button.stories.js|jsx" renderer="react" language="js" tabTitle="story-component-js"
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

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
```
```md filename="Button.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

export const Template = (args) => <Button {...args} />;

<Story
  name="Primary"
  args={{}}
  decorators={[
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ]}>
  {Template.bind({})}
</Story>
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts" tabTitle="story-function-ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>];
```
```js filename="Button.stories.js|jsx" renderer="react" language="js" tabTitle="story-function-js"
import React from 'react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>];
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
```
```js filename="Button.stories.js" renderer="svelte" language="js" tabTitle="story"
import Button from './Button.svelte';
import MarginDecorator from './MarginDecorator.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

const Template = () => ({
  Component: Button,
})

export const Primary = Template.bind({});
Primary.decorators = [() => MarginDecorator]
```
```html filename="MarginDecorator.svelte" renderer="svelte" language="js" tabTitle="decorator-component"
<div>
  <slot/>
</div>

<style>
  div { 
    margin: 3em;
  }
</style>
```
```md filename="Button.stories.mdx" renderer="svelte" language="mdx" tabTitle="story"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';
import MarginDecorator from './MarginDecorator.svelte';

<Meta title="Button" component={Button}/>

export const Template = () => ({ Component:Button });

<Story
  name="Primary"
  args={{}}
  decorators={[() => MarginDecorator]}>
  {Template.bind({})}
</Story>
```
```html filename="MarginDecorator.svelte" renderer="svelte" language="mdx" tabTitle="decorator-component"
<div>
  <slot/>
</div>

<style>
  div { 
    margin: 3em;
  }
</style>
```
```js filename="Button.stories.js" renderer="vue" language="js"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  components: { Button },
  template: '<Button primary label="Hello World" />',
});
Primary.decorators = [() => ({ template: '<div style="margin: 3em;"><story /></div>' })];
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta title="Button" component={Button}/>

export const Template = () => ({
  components: { Button },
  template: '<Button primary label="Hello World"/>',
});


<Story
  name="Primary"
  decorators={[
    () => ({
      template: '<div style="margin: 3em;"><story /></div>',
    }),
  ]}>
  {Template.bind({})}
<Story>
```
```js filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button'; 

export default {
    title: 'Button',
};

export const Primary = () => html`<demo-button>Hello World</demo-button>`;

Primary.decorators = [(story) => html`<div style="margin: 3em">${story()}</div>`]
```
