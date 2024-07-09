```md filename="Table.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Table } from './Table.component';

<Meta title="Custom Table" component={Table} />

export const TableStory = (args) => ({
  props: args,
  template: `
    <table>
      <tbody>
        <tr *ngFor="let row of data; let i=index">
          <td *ngFor="let col of row; let j=index">
            {{data[i][j]}}
          </td>
        </tr>
      </tbody>
    </table>
    `,
});

<Story
  name="Numeric"
  args={{
    data: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    size: 'large',
  }}>
  {TableStory.bind({})}
</Story>
```
```ts filename="Table.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular',

import { Table } from './Table.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Custom Table',
  component: Table,
} as Meta;

const TableStory: Story = (args) => ({
  props: args,
  template: `
    <table>
      <tbody>
        <tr *ngFor="let row of data; let i=index">
          <td *ngFor="let col of row; let j=index">
            {{data[i][j]}}
          </td>
        </tr>
      </tbody>
    </table>
    `,
});

export const Numeric = TableStory.bind({});
Numeric.args = {
  //👇 This arg is for the story component
  data: [
    [1, 2, 3],
    [4, 5, 6],
  ],
  //👇 The remaining args get passed to the `Table` component
  size: 'large',
};
```
```js filename="Table.stories.js|jsx!ts!tsx" renderer="react" language="js"
import React from 'react';

import { Table } from './Table';
import { TD } from './TableDataCell';
import { TR } from './TableRow';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Custom Table',
  component: Table,
};

const TableStory = ({ data, ...args}) => (
  <Table {...args}>
    {data.map((row) => (
      <TR>
        {row.map((item) => (
          <TD>{item}</TD>
        ))}
      </TR>
    ))}
  </Table>
);

export const Numeric = TableStory.bind({});
Numeric.args = {
  //👇 This arg is for the story component
  data: [[1, 2, 3], [4, 5, 6]],
  //👇 The remaining args get passed to the `Table` component
  size: 'large',
};
```
```md filename="Table.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Table } from './Table';
import { TD } from './TableDataCell';
import { TR } from './TableRow';

<Meta title="Custom Table" component={Table} />

export const TableStory = ({ data, ...args }) => (
  <Table {...args} >
    {data.map(row => (<TR>{row.map(item => <TD>{item}</TD>}</TR>))}
  </Table>
);

<Story
  name="Numeric"
  args={{
    data: [[1, 2, 3], [4, 5, 6]],
    size: 'large',
  }}>
  {TableStory.bind({})}
</Story>
```
```html filename="Table.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import Table from './Table.svelte';
</script>

<Meta
  title="Custom Table"
  component={Table}
  argTypes={{
    size: {
      options: ['small', 'medium', 'large'],
    },
  }}
/>

<Template let:args>
  <Table {...args}>
    <tbody>
      {#each args.data as row}
        <tr>
          {#each row as col}
            <td>{col}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </Table>
</Template>

{/* 👇 The data arg is for the story component and the remaining args get passed to the Table component */}
<Story
  name="Numeric"
  args={{
    data: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    size: 'large',
  }}
/>
```
```js filename="Table.stories.js" renderer="vue" language="js" tabTitle="2"
import Table from './Table.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Custom Table',
  component: Table,
};

const TableStory = (args, { argTypes }) => ({
  components: { Table },
  props: Object.keys(argTypes),
  template: `
    <Table v-bind="$props">
      <tr v-for="(row, idx1) in data">
        <td v-for="(col, idx2) in row">
          {{ data[idx1][idx2] }}
        </td>
      </tr>
    </Table>`,
});

export const Numeric = TableStory.bind({});
Numeric.args = {
  //👇 This arg is for the story component
  data: [
    [1, 2, 3],
    [4, 5, 6],
  ],
  //👇 The remaining args get passed to the `Table` component
  size: 'large',
};
```
```js filename="Table.stories.js" renderer="vue" language="js" tabTitle="3"
import Table from './Table.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Custom Table',
  component: Table,
};

const TableStory = (args) => ({
  components: { Table },
  setup() {
    return { args };
  },
  template: `
    <Table v-bind="args">
      <tr v-for="(row, idx1) in data">
        <td v-for="(col, idx2) in row">
          {{ data[idx1][idx2] }}
        </td>
      </tr>
    </Table>
  `,
});

export const Numeric = TableStory.bind({});
Numeric.args = {
  //👇 This arg is for the story component
  data: [
    [1, 2, 3],
    [4, 5, 6],
  ],
  //👇 The remaining args get passed to the `Table` component
  size: 'large',
};
```
```md filename="Table.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-2"
import { Meta, Story } from '@storybook/addon-docs';

import Table from './Table.vue';

<Meta title="Custom Table" component={Table} />

export const TableStory = (args, { argTypes }) => ({
  components: { Table },
  props: Object.keys(argTypes),
  template: `
    <Table v-bind="$props">
      <tr v-for="(row, idx1) in data">
        <td v-for="(col, idx2) in row">
          {{ data[idx1][idx2] }}
        </td>
      </tr>
    </Table>`,
});

<Story
  name="Numeric"
  args={{
    data: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    size: 'large',
  }}>
  {TableStory.bind({})}
</Story>
```
```md filename="Table.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-3"
import { Meta, Story } from '@storybook/addon-docs';

import Table from './Table.vue';

<Meta title="Custom Table" component={Table} />

export const TableStory = (args) => ({
  components: { Table },
  setup() {
    return { args };
  },
  template: `
    <Table v-bind="args">
      <tr v-for="(row, idx1) in data">
        <td v-for="(col, idx2) in row">
          {{ data[idx1][idx2] }}
        </td>
      </tr>
    </Table>`,
});

<Story
  name="Numeric"
  args={{
    data: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    size: 'large',
  }}>
  {TableStory.bind({})}
</Story>
```
