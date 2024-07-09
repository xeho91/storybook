```ts filename="YourPage.stories.ts" renderer="angular" language="ts"
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { DocumentScreen } from './YourPage.component';
import { DocumentList } from './DocumentList.component';
import { DocumentHeader } from './DocumentHeader.component';
import { PageLayout } from './PageLayout.component';

//👇 Imports the required stories
import * as PageLayoutStories from './PageLayout.stories';
import * as DocumentHeaderStories from './DocumentHeader.stories';
import * as DocumentListStories from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
  decorators: [
    moduleMetadata({
      declarations: [DocumentList, DocumentHeader, PageLayout],
      imports: [CommonModule],
    }),
  ],
} as Meta;


const Template: Story = (args) => ({
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  user: PageLayoutStories.PageLayoutSimple.args.user,
  document: DocumentHeaderStories.DocumentHeaderSimple.args.document,
  subdocuments: DocumentListStories.DocumentListSimple.args.documents
};
```
```js filename="YourPage.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { DocumentScreen } from './YourPage';

//👇 Imports the required stories
import * as PageLayout from './PageLayout.stories';
import * as DocumentHeader from './DocumentHeader.stories';
import * as DocumentList from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

const Template = (args) => <DocumentScreen {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  user: PageLayout.Simple.args.user,
  document: DocumentHeader.Simple.args.document,
  subdocuments: DocumentList.Simple.args.documents,
};
```
```ts filename="YourPage.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DocumentScreen } from './YourPage';

import PageLayout from './PageLayout.stories';
import DocumentHeader from './DocumentHeader.stories';
import DocumentList from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
} as ComponentMeta<typeof DocumentScreen>;


const Template: ComponentStory<typeof DocumentScreen> = (args) => <DocumentScreen {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  user: PageLayout.Simple.args.user,
  document: DocumentHeader.Simple.args.document,
  subdocuments: DocumentList.Simple.args.documents,
};
```
```js filename="YourPage.stories.js" renderer="svelte" language="js"
import DocumentScreen from './YourPage.svelte';

//👇 Imports the required stories
import * as PageLayoutStories from './PageLayout.stories';
import * as DocumentHeaderStories from './DocumentHeader.stories';
import * as DocumentListStories from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};


const Template = (args) => ({
  component: DocumentScreen,
  props: args,
});

export const SimplePage = Template.bind({});
SimplePage.args = {
  user: PageLayoutStories.Simple.args.user,
  document: DocumentHeaderStories.Simple.args.document,
  subdocuments: DocumentListStories.Simple.args.documents,
};
```
```js filename="YourPage.stories.js" renderer="vue" language="js" tabTitle="2"
import DocumentScreen from './YourPage.vue';

//👇 Imports the required stories
import * as PageLayoutStories from './PageLayout.stories';
import * as DocumentHeaderStories from './DocumentHeader.stories';
import * as DocumentListStories from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DocumentScreen },
  template: '<DocumentScreen v-bind="$props"/>',
});

export const Simple = Template.bind({});
Simple.args = {
  user: PageLayoutStories.Simple.args.user,
  document: DocumentHeaderStories.Simple.args.document,
  subdocuments: DocumentListStories.Simple.args.documents,
};
```
```js filename="YourPage.stories.js" renderer="vue" language="js" tabTitle="3"
import DocumentScreen from './YourPage.vue';

//👇 Imports the required stories
import * as PageLayoutStories from './PageLayout.stories';
import * as DocumentHeaderStories from './DocumentHeader.stories';
import * as DocumentListStories from './DocumentList.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

const Template = (args) => ({
  components: { DocumentScreen },
  setup() {
    return { args };
  },
  template: '<DocumentScreen v-bind="args"/>',
});

export const Simple = Template.bind({});
Simple.args = {
  user: PageLayoutStories.Simple.args.user,
  document: DocumentHeaderStories.Simple.args.document,
  subdocuments: DocumentListStories.Simple.args.documents,
};
```
