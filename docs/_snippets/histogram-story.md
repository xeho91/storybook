```md filename="Histogram.stories.mdx" renderer="angular" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { HistogramComponent } from './histogram.component';

<Meta title="Histogram" component={HistogramComponent} />

export const Template = (args) => ({ props: args });

<Canvas>
  <Story
    name="Default"
    args={{
      dataType: 'latency',
      showHistogramLabels: true,
      histogramAccentColor: '#1EA7FD',
      label: 'Latency distribution',
    }} >
    {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="Histogram.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { HistogramComponent } from './histogram.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: HistogramComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```js filename="Histogram.stories.js" renderer="html" language="js"
import { createHistogram } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
};

const Template = (args) => createHistogram(args);

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```ts filename="Histogram.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

import { Histogram, HistogramProps } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
} as Meta;

const Template: StoryFn<HistogramProps> = (args) => createHistogram(args);

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```js filename="Histogram.stories.js|jsx" renderer="preact" language="js"
/** @jsx h */
import { h } from 'preact';

import { Histogram } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
};

const Template = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```md filename="Histogram.stories.mdx" renderer="preact" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs/';

import { Histogram } from './Histogram';

<Meta title="Histogram" component={Histogram} />

export const Template = (args) => <Histogram {...args} />;

<Canvas>
  <Story
    name="Default"
    args={{
      dataType: 'latency',
      showHistogramLabels: true,
      histogramAccentColor: '#1EA7FD',
      label: 'Latency distribution',
    }} >
    {Template.bind({})}
  </Story>
</Canvas>
```
```js filename="Histogram.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Histogram } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
};

const Template = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```md filename="Histogram.stories.mdx" renderer="react" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Histogram } from './Histogram';

<Meta title="Histogram" component={Histogram} />

export const Template = (args) => <Histogram {...args} />;

<Canvas>
  <Story
    name="Default"
    args={{
      dataType: 'latency',
      showHistogramLabels: true,
      histogramAccentColor: '#1EA7FD',
      label: 'Latency distribution',
    }} >
    {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="Histogram.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Histogram } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
} as ComponentMeta<typeof Histogram>;

const Template: ComponentStory<typeof Histogram> = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```js filename="Histogram.stories.js" renderer="svelte" language="js"
import Histogram from './Histogram.svelte';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
};

const Template = (args) => ({
  Component: Histogram,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```md filename="Histogram.stories.mdx" renderer="svelte" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Histogram from './Histogram.svelte';

<Meta title="Histogram" component={Histogram} />

export const Template = (args) => ({
  Component: Histogram,
  props: args,
});

<Canvas>
  <Story
    name="Default"
    args={{
      dataType: 'latency',
      showHistogramLabels: true,
      histogramAccentColor: '#1EA7FD',
      label: 'Latency distribution',
    }} >
    {Template.bind({})}
  </Story>
</Canvas>
```
```js filename="Histogram.stories.js" renderer="vue" language="js" tabTitle="2"
import Histogram from './Histogram.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
};

const Template = (args, { argTypes }) => ({
  components: { Histogram },
  props: Object.keys(argTypes),
  template: '<Histogram v-bind="$props" v-on="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```js filename="Histogram.stories.js" renderer="vue" language="js" tabTitle="3"
import Histogram from './Histogram.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
};

const Template = (args) => ({
  components: { Histogram },
  setup() {
    return { args };
  },
  template: '<Histogram v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```md filename="Histogram.stories.mdx" renderer="vue" language="ts" tabTitle="mdx-2"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Histogram from './Histogram.vue';

<Meta title="Histogram" component={Histogram} />

export const Template = (args, { argTypes }) => ({
  components: { Histogram },
  props: Object.keys(argTypes),
  template: `<Histogram v-bind="$props" v-on="$props" />`,
});

<Canvas>
  <Story
    name="Default"
    args={{
      dataType: 'latency',
      showHistogramLabels: true,
      histogramAccentColor: '#1EA7FD',
      label: 'Latency distribution',
    }} >
    {Template.bind({})}
  </Story>
</Canvas>
```
```md filename="Histogram.stories.mdx" renderer="vue" language="ts" tabTitle="mdx-3"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Histogram from './Histogram.vue';

<Meta title="Histogram" component={Histogram} />

export const Template = (args) => ({
  components: { Histogram },
  setup() {
    return { args };
  },
  template: '<Histogram v-bind="args" />',
});

<Canvas>
  <Story
    name="Default"
    args={{
      dataType: 'latency',
      showHistogramLabels: true,
      histogramAccentColor: '#1EA7FD',
      label: 'Latency distribution',
    }} >
    {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="Histogram.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import { Meta, StoryFn } from '@storybook/vue';

import Histogram from './Histogram.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
} as Meta<typeof Histogram>;

const Template: StoryFn<typeof Histogram> = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Histogram v-bind="$props" v-on="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```ts filename="Histogram.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import { Meta, StoryFn } from '@storybook/vue3';

import Histogram from './Histogram.vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
} as Meta<typeof Histogram>;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<typeof Histogram> = (args) => ({
  components: { Histogram },
  setup() {
    return { args };
  },
  template: '<Histogram v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
```js filename="Histogram.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './histogram-component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
};

const Template = ({ dataType, showHistogramLabels, histogramAccentColor, label }) => html`
  <histogram-component
    .dataType=${dataType}
    .showHistogramLabels=${showHistogramLabels}
    .histogramAccentColor=${histogramAccentColor}
    .label=${label}
  ></histogram-component>
`;

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};
```
