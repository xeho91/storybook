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
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
  decorators: [
    moduleMetadata({
      declarations: [List, ListItem],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const Empty: Story = () => ({
  props: {
    args,
  },
});

export const OneItem: Story = () => ({
  props: {
    args,
  },
  template: `
    <app-list>
      <app-list-item></app-list-item>
    </app-list>
  `,
});
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
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
};

export const Empty = (args) => <List {...args} />;

export const OneItem = (args) => (
  <List {...args}>
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
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
} as ComponentMeta<typeof List>;

const Empty: ComponentStory<typeof List> = (args) => <List {...args} />;

const OneItem: ComponentStory<typeof List> = (args) =>(
  <List {...args}>
    <ListItem />
  </List>
);
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="2"
import List from './List.vue';
import ListItem from './ListItem.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
};

export const Empty = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: '<List v-bind="$props"/>',
});

export const OneItem = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List, ListItem },
  template: '<List v-bind="$props"><ListItem /></List>',
});
```
```js filename="List.stories.js" renderer="vue" language="js" tabTitle="3"
import List from './List.vue';
import ListItem from './ListItem.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
};

export const Empty = (args) => ({
  components: { List },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  }
  template: '<List v-bind="args"/>',
});

export const OneItem = (args) => ({
  components: { List, ListItem },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  }
  template: '<List v-bind="args"><ListItem /></List>',
});
```
