```md filename="TodoItem.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs/blocks';

import { TodoItem } from './TodoItem';

import fetch from 'node-fetch';

<Meta title="Examples/Loader" component={TodoItem} />

<Story
  name="Primary"
  loaders={[
    async () => ({
      todo: await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).json(),
    }),
  ]} >
  {(args, { loaded: { todo } }) => ({
    props: {
      todo: todo,
    },
  })}
</Story>
```
```ts filename="TodoItem.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import fetch from 'node-fetch';

import { CommonModule } from '@angular/common';

import { TodoItem } from './TodoItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Loader',
  component: TodoItem,
  decorators: [
    moduleMetadata({
      declarations: [TodoItem],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const Primary = (args, { loaded: { todo } }) => {
  return {
    props: {
      args,
      todo,
    },
  };
};

Primary.loaders = [
  async () => ({
    todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
  }),
];
```
```js filename="TodoItem.stories.js|jsx|ts|tsx" renderer="react" language="js"
import React from 'react';

import fetch from 'node-fetch';

import { TodoItem } from './TodoItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Loader'
  component: TodoItem,
};

export const Primary = (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />;
Primary.loaders = [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
];
```
```md filename="TodoItem.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import fetch from 'node-fetch';

import { TodoItem } from './TodoItem';

<Meta title="Examples/Loader" component={TodoItem} />

<Story
  name="Primary"
  loaders={[
    async () => ({
      todo: await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
      ).json(),
    }),
  ]}>
  {(args, { loaded: { todo } }) => (
    <TodoItem {...args} todo={todo} />
  )}
</Story
```
```js filename="TodoItem.stories.js" renderer="svelte" language="js"
import fetch from 'node-fetch';

import TodoItem from './TodoItem.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Loader',
  component: TodoItem,
};

export const Primary = (args, { loaded: { todo } }) => ({
  Component: TodoItem,
  props: { ...args, ...todo },
});

Primary.loaders = [
  async () => ({
    todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
  }),
];
```
```md filename="TodoItem.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import TodoItem from './TodoItem.svelte';

import fetch from 'node-fetch';

<Meta title="Examples/Loader" component={TodoItem} />

<Story
  name="Primary"
  loaders={[
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
    }),
  ]}>
  {(args, { loaded: { todo } }) => ({
    Component: TodoItem,
    props: {
      ...args,
      todo,
    },
  })}
</Story>
```
```js filename="TodoItem.stories.js" renderer="vue" language="js" tabTitle="3"
import TodoItem from './TodoItem.vue';

import fetch from 'node-fetch';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Loader',
  component: TodoItem,
};

export const Primary = (args, { loaded: { todo } }) => {
  return {
    components: { TodoItem },
    setup() {
      return { args, todo: todo };
    },
    template: `<TodoItem :todo="todo"/>`,
  };
};

Primary.loaders = [
  async () => ({
    todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
  }),
];
```
```md filename="TodoItem.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import TodoItem from './TodoItem.vue';

import fetch from 'node-fetch';

<Meta title="Examples/Loader" component={TodoItem} />

<Story
  name="Primary"
  loaders={[
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
    }),
  ]}>
  {(args, { loaded: { todo } }) => ({
    components: { TodoItem },
    setup() {
      return { args, todo: todo };
    },
    template: `<TodoItem :todo="todo"/>`,
  })}
</Story>
```
