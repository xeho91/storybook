```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
} as Meta;


export const Default: Story = () => ({
  props: {},
});

export const WithProp: Story = () => ({
  props: {
    prop: 'value',
  },
});
```
```js filename="MyComponent.story.js|jsx" renderer="react" language="js"
import React from 'react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
};

export const Basic = () => <MyComponent />;

export const WithProp = () => <MyComponent prop="value" />;
```
```ts filename="MyComponent.story.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

export const Basic: ComponentStory<typeof MyComponent> = () => <MyComponent/>;

export const WithProp: ComponentStory<typeof MyComponent> = () => <MyComponent prop="value"/>;
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
};

export const Basic = () => ({
  Component: MyComponent,
});

export const WithProp = () => ({
  Component: MyComponent,
  props:{
    prop: 'value',
  },
});
```
```html filename="MyComponent.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import MyComponent from './MyComponent.svelte';
</script>

<Story name="Basic">
    <MyComponent />
</Story>

<Story name="WithProp">
  <MyComponent prop="value"/>
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
};

export const Basic = () => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

export const WithProp = () => ({
  components: { MyComponent },
    template: '<MyComponent prop="value"/>',
});
```
