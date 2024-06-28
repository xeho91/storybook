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


export const OneItem: Story = (args) => ({
  props: args,
  template: `
    <app-list>
      <app-list-item [item]="item"></app-list-item>
    </app-list>
  `,
});

OneItem.args = {
   ...Unchecked.args,
};
```
```js filename="List.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

export const OneItem = (args) => (
  <List {...args}>
    <Unchecked {...Unchecked.args} />
  </List>
);
```
```ts filename="List.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const OneItem: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <Unchecked {...Unchecked.args} />
  </List>
);
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

export const OneItem = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List, ListItem },
  template: `
    <List v-bind="$props">
      <ListItem v-bind="$props"/>
    </List>
  `,
});
OneItem.args = {
  ...Unchecked.args,
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

export const OneItem = (args) => ({
  components: { List, ListItem },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `
    <List v-bind="args">
      <ListItem v-bind="args"/>
    </List>
  `,
});
OneItem.args = {
  ...Unchecked.args,
};
```
```js filename="my-list.stories.js|jsx" renderer="web-components" language="js"
import { html } from 'lit';

import './my-list';

//👇 Instead of importing my-list-item, we import the stories
import { Unchecked } from './my-list-item.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/web-components/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'my-list',
};

export const OneItem = () => html`
  <List>
    ${Unchecked({ ...Unchecked.args })}
  </List>
`;
```

```ts filename="my-list.stories.ts|tsx" renderer="web-components" language="ts"
import { html } from 'lit';
import { Story } from '../../IStory';
import { IList } from './my-list.custom';

import './my-list';

//👇 Instead of importing my-list-item, we import the stories
import { Unchecked } from './my-list-item.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/web-components/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'my-list',
};

export const OneItem: Story<IList> = () => html`
  <List>
    ${Unchecked({ ...Unchecked.args })}
  </List>
`;
```

