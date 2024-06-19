```ts filename="List.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { List } from './list.component';
import { ListItem } from './list-item.component';

//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
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


const ListTemplate: Story = (args) => ({
  props: args,
  template: `
    <app-list>
      <div *ngFor="let item of items">
        <app-list-item [item]="item"></app-list-item>
      </div>
    </app-list>
  `,
});

export const Empty = ListTemplate.bind({});
EmptyListTemplate.args = {
  items: [],
};

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
```
```js filename="List.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { List } from './List';
import { ListItem } from './ListItem';

//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

const ListTemplate = ({ items, ...args }) => (
  <List>
    {items.map((item) => (
      <ListItem {...item} />
    ))}
  </List>
);

export const Empty = ListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
```
```js filename="List.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';
import { ListItem } from './ListItem';

//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const ListTemplate: ComponentStory<typeof ButtonGroup> = (args) => {
  const { items } = args;
  return (
    <List>
      {items.map((item) => (
        <ListItem {...item} />
      ))}
  </List>
)};

export const Empty = ListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="2"
import List from './List.vue';
import ListItem from './ListItem.vue';

//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

const ListTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List, ListItem },
  template: `
    <List v-bind="$props">
      <div v-for="item in items" :key="item.title">
        <ListItem :item="item" />
      </div>
    </List>
  `,
});

export const Empty = ListTemplate.bind({});
EmptyListTemplate.args = {
  items: [],
};

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="3"
import List from './List.vue';
import ListItem from './ListItem.vue';

//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

const ListTemplate = (args) => ({
  components: { List, ListItem },
  setup() {
    return { args };
  },
  template: `
    <List v-bind="args">
      <div v-for="item in items" :key="item.title">
        <ListItem :item="item"/>
      </div>
    </List>
  `,
});

export const Empty = ListTemplate.bind({});
Empty.args = {
  items: [],
};

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
```
