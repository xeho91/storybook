```ts filename="List.stories.ts" renderer="angular" language="ts"
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { List } from './list.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  component: List,
  decorators: [
    moduleMetadata({
      declarations: [List],
      imports: [CommonModule],
    }),
  ],
} as Meta;

// Always an empty list, not super interesting
const Template: Story = (args) => ({
  props: args,
  template: `<app-list></app-list>`,
});
```
```js filename="List.stories.js" renderer="html" language="js"
import { createList } from  './List';

export default {
  title: 'List',
};

// Always an empty list, not super interesting
const Template = (args) => createList(args);
```

```ts filename="List.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

import { createList, ListArgs } from  './List';

export default {
  title: 'List',
} as Meta<ListArgs>;

// Always an empty list, not super interesting
const Template: StoryFn<ListArgs> = (args) => createList(args);
```

```js filename="List.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { List } from './List';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

// Always an empty list, not super interesting
const Template = (args) => <List {...args} />;
```
```ts filename="List.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

//👇 Always an empty list, not super interesting
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* List.stories.svelte */}

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import List from './List.svelte';
</script>

<Meta title="List" component={List} />

<Template let:args>
  <List {...args} />
</Template>

<Story name="Empty">
  <List {...args} />
</Story>
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="2"
import List from './ListComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

// Always an empty list, not super interesting
const Template = (args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"/>',
});
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="3"
import List from './ListComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

// Always an empty list, not super interesting
const Template = (args) => ({
  components: { List },
  setup() {
    return { args };
  },
  template: '<list v-bind="args"/>',
});
```
```ts filename="List.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import List from './ListComponent.vue';

import { Meta, StoryFn } from '@storybook/vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
} as Meta<typeof List>;

// Always an empty list, not super interesting
const Template: StoryFn<typeof List> = (args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"/>',
});
```
```ts filename="List.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import List from './ListComponent.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
} as Meta<typeof List>;

// Always an empty list, not super interesting
const Template: StoryFn<typeof LoginForm> = (args) => ({
  components: { List },
  setup() {
    return { args };
  },
  template: '<list v-bind="args"/>',
});
```
```js filename="demo-list.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-list';

export default {
  title: 'List',
};

// Always an empty list, not super interesting
const Template = (args) => html`<demo-list></demo-list>`
```
