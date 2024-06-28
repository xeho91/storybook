```md renderer="angular" language="mdx"
{/* Page.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Page } from './page.component';

<Meta title="Page" component={Page} />

export const Template = (args) => ({ 
  props: args,
  template:`
    <storybook-page>
      <ng-container footer>${args.footer}</ng-container>
    </storybook-page>
  `,
});

<Story
  name="CustomFooter"
  args={{
    footer: 'Built with Storybook',
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="Page.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Page } from './page.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
} as Meta;


const Template: Story = (args) => ({
  props: args,
  template: `
    <storybook-page>
      <ng-container footer>${args.footer}</ng-container>
    </storybook-page>`,
});

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  footer: 'Built with Storybook',
};
```
```js filename="Page.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Page } from './Page';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args) => (
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
);

export const CustomFooter= Template.bind({});
CustomFooter.args = {
  footer: 'Built with Storybook',
};
```

```md renderer="react" language="mdx"
{/* Page.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Page } from './Page';

<Meta title="Page" component={Page} />


export const Template = (args) => (
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
);

<Story
  name="CustomFooter"
  args={{
    footer: 'Built with Storybook',
  }}>
  {Template.bind({})}
</Story>
```
```ts filename="Page.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
);

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  footer: 'Built with Storybook',
};
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* Page.stories.svelte */}

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import Page from './Page.svelte';
</script>

<Meta title="Page" component={Page} />

<Template let:args>
  <Page {...args}>
    <footer>{args.footer}</footer>
  </Page>
</Template>

<Story
  name="CustomFooter"
  args={{
    footer: 'Built with Storybook',
  }}
/>
```
```js filename="Page.stories.js" renderer="vue" language="js" tabTitle="2"
import Page from './Page.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args, { argTypes }) => ({
  components: { Page },
  props: Object.keys(argTypes),
  template: `
    <page v-bind="$props">
      <template v-slot:footer>
        <footer v-if="footer" v-html="footer"/>
      </template>
    </page>
  `,
});

export const CustomFooter= Template.bind({});
CustomFooter.args = {
  footer: '<a href="https://storybook.js.org/">Built with Storybook</a>',
};
```
```js filename="Page.stories.js" renderer="vue" language="js" tabTitle="3"
import Page from './Page.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page',
  component: Page,
};

const Template = (args) => ({
  components: { Page },
  setup() {
    return { args };
  },
  template: `
    <page v-bind="args">
      <template v-slot:footer>
        <footer v-if="args.footer" v-html="args.footer" />
      </template>
    </page>
  `,
});

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  footer: '<a href="https://storybook.js.org/">Built with Storybook</a>',
};
```
```md renderer="vue" language="mdx" tabTitle="mdx-2"
{/* Page.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Page from './Page.vue';

<Meta title="Page" component={Page} />

export const Template = (args, { argTypes }) => ({
  components: { Page },
  props: Object.keys(argTypes),
  template: `
    <page v-bind="$props">
      <template v-slot:footer>
        <footer v-if="footer" v-html="footer"/>
      </template>
    </page>
  `,
});

<Story
  name="CustomFooter"
  args={{
   footer: `<a href="https://storybook.js.org/">Built with Storybook</a>`,
  }}>
  {Template.bind({})}
</Story>
```
```md renderer="vue" language="mdx" tabTitle="mdx-3"
{/* Page.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Page from './Page.vue';

<Meta title="Page" component={Page} />

export const Template = (args) => ({
  components: { Page },
  setup() {
    return { args };
  },
  template: `
    <page v-bind="args">
      <template v-slot:footer>
        <footer v-if="args.footer" v-html="args.footer" />
      </template>
    </page>
  `,
});

<Story
  name="CustomFooter"
  args={{
   footer: '<a href="https://storybook.js.org/">Built with Storybook</a>',
  }}>
  {Template.bind({})}
</Story>
```
