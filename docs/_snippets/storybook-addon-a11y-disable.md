```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent.component';

<Meta 
  title="Disable a11y addon" 
  component={MyComponent} />

export const Template = () => ({});

<Story
  name="NonA11yStory"
  parameters={{
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Disable a11y addon',
  component: MyComponent,
} as Meta;

const Template: Story = () => ({});

export const NonA11yStory = Template.bind({});
NonA11yStory.parameters = {
  a11y: {
    // This option disables all a11y checks on this story
    disable: true,
  },
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Disable a11y addon',
  component: MyComponent,
};

const Template = () => <MyComponent />;

export const NonA11yStory = Template.bind({});
NonA11yStory.parameters = {
  a11y: {
    // This option disables all a11y checks on this story
    disable: true,
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta 
  title="Disable a11y addon" 
  component={MyComponent} />

export const Template = () => <MyComponent />;

<Story
  name="NonA11yStory"
  parameters={{
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Disable a11y addon',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = () => <MyComponent />;

export const NonA11yStory = Template.bind({});
NonA11yStory.parameters = {
  a11y: {
    // This option disables all a11y checks on this story
    disable: true,
  },
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Disable a11y addon',
  component: MyComponent,
};

const Template = () => ({ Component: MyComponent });

export const NonA11yStory = Template.bind({});
NonA11yStory.parameters = {
  a11y: {
    // This option disables all a11y checks on this story
    disable: true,
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.svelte';

<Meta 
  title="Disable a11y addon" 
  component={MyComponent} />

export const Template = () => ({ Component: MyComponent });

<Story
  name="NonA11yStory"
  parameters={{
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  }}>
  {Template.bind({})}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading 
  * to learn how to generate automatic titles
  */
  title: 'Disable a11y addon',
  component: MyComponent,
};

const Template = () => ({
  components: { MyComponent },
  template: '<MyComponent/>',
});

export const NonA11yStory = Template.bind({});
NonA11yStory.parameters = {
  a11y: {
    // This option disables all a11y checks on this story
    disable: true,
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.vue';

<Meta 
  title="Disable a11y addon" 
  component={MyComponent} />

export const Template = () => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

<Story
  name="NonA11yStory"
  parameters={{
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  }}>
  {Template.bind({})}
</Story>
```
