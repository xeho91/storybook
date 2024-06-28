```ts filename="List.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { List } from './list.component';
import { ListItem } from './list-item.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
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
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
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
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
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

