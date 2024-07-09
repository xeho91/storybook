```ts filename="List.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { List } from './list.component';
import { ListItem } from './list-item.component';

//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

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


export const ManyItems: Story = (args) => ({
  props: args,
  template: `
    <app-list>
      <app-listitem [isSelected]="Selected"></app-listitem>
      <app-listitem [isSelected]="Unselected"></app-listitem>
      <app-listitem [isSelected]="Unselected"></app-listitem>
    </app-list>
  `,
});
ManyItems.args= {
  Selected: Selected.args.isSelected,
  Unselected: Unselected.args.isSelected,
};
```
```js filename="List.stories.js" renderer="html" language="js"
import { createList } from  './List';
import { createListItem } from './ListItem';

// 👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

export default {
  title: 'List',
};

export const ManyItems = (args) => {
  const list = createList(args);
  list.appendChild(createListItem(Selected.args));
  list.appendChild(createListItem(Unselected.args));
  list.appendChild(createListItem(Unselected.args));
  return list;
};
```
```ts filename="List.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

import { createList, ListArgs } from  './List';
import { createListItem } from './ListItem';

// 👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

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
  list.appendChild(createListItem(Selected.args));
  list.appendChild(createListItem(Unselected.args));
  list.appendChild(createListItem(Unselected.args));
  return list;
};
```
```js filename="List.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { List } from './List';
import { ListItem } from './ListItem';

//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

export const ManyItems = (args) => (
  <List {...args}>
    <Selected {...Selected.args} />
    <Unselected {...Unselected.args} />
    <Unselected {...Unselected.args} />
  </List>
);
```
```ts filename="List.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';
import { ListItem } from './ListItem';

//👇 All ListItem stories are imported
import * as ListItemStories from './ListItemStories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

export const ManyItems: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <Selected {...ListItemStories.Selected.args} />
    <Unselected {...ListItemStories.Unselected.args} />
    <Unselected {...ListItemStories.Unselected.args} />
  </List>
);
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="2"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

export const ManyItems = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: `
    <List v-bind="$props">
      <list-item :isSelected="Selected"/>
      <list-item :isSelected="Unselected"/>
      <list-item :isSelected="Unselected"/>
    </List>`,
});

ManyItems.args = {
  Selected: Selected.args.isSelected,
  Unselected: Unselected.args.isSelected,
};
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="3"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};


export const ManyItems = (args) => ({
  components: { List, ListItem },
  setup() {
    return { ...args };
  },
  template: `
    <List v-bind="args">
      <list-item :isSelected="Selected"/>
      <list-item :isSelected="Unselected"/>
      <list-item :isSelected="Unselected"/>
    </List>`,
});

ManyItems.args={
  Selected: Selected.args.isSelected,
  Unselected: Unselected.args.isSelected,
};
```
```ts filename="List.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

import { Meta, StoryFn } from '@storybook/vue';

//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
} as Meta<typeof List>;

export const ManyItems: StoryFn<typeof List> = (args, { argTypes }) => ({
  components: { List, ListItem },
  props: Object.keys(argTypes),
  template: `
    <List v-bind="$props">
      <list-item :isSelected="Selected"/>
      <list-item :isSelected="Unselected"/>
      <list-item :isSelected="Unselected"/>
    </List>`,
});

ManyItems.args = {
  Selected: Selected.args.isSelected,
  Unselected: Unselected.args.isSelected,
};
```
```ts filename="List.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import List from './ListComponent.vue';
import ListItem from './ListItem.vue';

import { Meta, StoryFn } from '@storybook/vue3';

//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
} as Meta<typeof List>;

export const ManyItems: StoryFn<typeof List> = (args) => ({
  components: { List, ListItem },
  setup() {
    return { ...args };
  },
  template: `
    <List v-bind="args">
      <list-item :isSelected="Selected"/>
      <list-item :isSelected="Unselected"/>
      <list-item :isSelected="Unselected"/>
    </List>`,
});

ManyItems.args = {
  Selected: Selected.args.isSelected,
  Unselected: Unselected.args.isSelected,
};
```
```js filename="demo-list.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-list';
import './demo-list-item';

export default {
  title: 'List',
};

//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './demo-list-item.stories';

export const ManyItems = (args) => {
  return html`
    <demo-list>
      ${Selected({ ...args, ...Selected.args })}
      ${Unselected({ ...args, ...Unselected.args })}
      ${Unselected({ ...args, ...Unselected.args })}
    </demo-list>
  `;
};
```
