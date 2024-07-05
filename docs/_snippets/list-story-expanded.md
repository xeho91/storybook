```ts filename="List.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { List } from './list.component';
import { ListItem } from './list-item.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
  decorators: [
    moduleMetadata({
      declarations: [List, ListItem],
      imports: [CommonModule],
    }),
  ],
} as Meta;

// Always an empty list, not super interesting
export const Empty: Story = (args) => ({
  props: args,
  template: `<app-list></app-list>`,
});

export const OneItem: Story = (args) => ({
  props: args,
  template: `
    <app-list>
      <app-listitem></app-listitem>
    </app-list>`,
});

export const ManyItems: Story = (args) => ({
  props: args,
  template: `
    <app-list>
      <app-listitem></app-listitem>
      <app-listitem></app-listitem>
      <app-listitem></app-listitem>
    </app-list>`,
});
```
```js filename="List.stories.js" renderer="html" language="js"
import { createList } from  './List';
import { createListItem } from './ListItem';

export default {
  title: 'List',
};

export const Empty = (args) => createList(args);

export const OneItem = (args) => {
  const list = createList(args);
  list.appendChild(createListItem());
  return list;
};

export const ManyItems = (args) => {
  const list = createList(args);
  list.appendChild(createListItem());
  list.appendChild(createListItem());
  list.appendChild(createListItem());
  return list;
};
```
```ts filename="List.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

import { createList, ListArgs } from  './List';
import { createListItem } from './ListItem';

export default {
  title: 'List',
} as Meta<ListArgs>;

export const Empty: StoryFn<ListArgs> = (args) => createList(args);

export const OneItem: StoryFn<ListArgs> = (args) => {
  const list = createList(args);
  list.appendChild(createListItem());
  return list;
};

export const ManyItems: StoryFn<ListArgs> = (args) => {
  const list = createList(args);
  list.appendChild(createListItem());
  list.appendChild(createListItem());
  list.appendChild(createListItem());
  return list;
};
```
```js filename="List.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { List } from './List';
import { ListItem } from './ListItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

export const Empty = (args) => <List {...args} />;

export const OneItem = (args) => (
  <List {...args}>
    <ListItem />
  </List>
);

export const ManyItems = (args) => (
  <List {...args}>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
);
```
```ts filename="List.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';
import { ListItem } from './ListItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

export const Empty: ComponentStory<typeof List> = (args) => <List {...args} />;

export const OneItem: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <ListItem />
  </List>
);

export const ManyItems: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
);
```
```html filename="List.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import List from "./List.svelte";
  
  import ListItem from './ListItem.svelte';
</script>

<Meta title="List" component={List} />

<Template let:args id="Empty">
  <List {...args} />
</Template>

<Template let:args id="OneItem">
  <List {...args}>
    <ListItem />
  </List>
</Template>

<Template let:args id="ManyItems">
  <List {...args}>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
</Template>

<Story name="Empty" template="Empty" />

<Story name="OneItem" template="OneItem" />

<Story name="MultipleItems" template="ManyItems" />
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="2"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

export const Empty = (args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"/>',
});

export const OneItem = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"><list-item/></list>',
});

export const ManyItems = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: `
    <list v-bind="$props">
      <list-item/>
      <list-item/>
      <list-item/>
    </list>
    `,
});
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="3"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

export const Empty = (args) => ({
  components: { List },
  setup() {
    return { args };
  },
  template: '<list v-bind="args"/>',
});

export const OneItem = (args) => ({
  components: { List, ListItem },
  setup() {
    return { args };
  },
  template: '<list v-bind="args"><list-item/></list>',
});

export const ManyItems = (args) => ({
  components: { List, ListItem },
  setup() {
    return { args };
  },
  template: `
    <list v-bind="args">
      <list-item/>
      <list-item/>
      <list-item/>
    </list>
    `,
});
```
```ts filename="List.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

import { Meta, StoryFn } from '@storybook/vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
} as Meta<typeof List>;

export const Empty: StoryFn<typeof List> = (args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"/>',
});

export const OneItem: StoryFn<typeof List> = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: '<list v-bind="$props"><list-item/></list>',
});

export const ManyItems: StoryFn<typeof List> = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: `
    <list v-bind="$props">
      <list-item/>
      <list-item/>
      <list-item/>
    </list>
    `,
});
```
```ts filename="List.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
} as Meta<typeof List>;

export const Empty: StoryFn<typeof List> = (args) => ({
  components: { List },
  setup() {
    return { args };
  },
  template: '<list v-bind="args"/>',
});

export const OneItem: StoryFn<typeof List> = (args) => ({
  components: { List, ListItem },
  setup() {
    return { args };
  },
  template: '<list v-bind="args"><list-item/></list>',
});

export const ManyItems: StoryFn<typeof List> = (args) => ({
  components: { List, ListItem },
  setup() {
    return { args };
  },
  template: `
    <list v-bind="args">
      <list-item/>
      <list-item/>
      <list-item/>
    </list>
    `,
});
```
```js filename="demo-list.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-list';
import './demo-list-item';

export default {
  title: 'List',
};

export const Empty = (args) => html`<demo-list></demo-list>`;

export const OneItem = (args) => {
  return html`
    <demo-list>
      <demo-list-item></demo-list-item>
    </demo-list>
  `;
};

export const ManyItems = (args) => {
  return html`
    <demo-list>
      <demo-list-item></demo-list-item>
      <demo-list-item></demo-list-item>
      <demo-list-item></demo-list-item>
    </demo-list>
  `;
};
```
