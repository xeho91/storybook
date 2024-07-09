```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { withDesign } from 'storybook-addon-designs';

import { MyComponent } from './MyComponent.component';

<Meta title="FigmaExample" component={MyComponent} decorators={[withDesign]} />

export const Template = () => ({ props: {} });

<Canvas>
  <Story
    name="Example"
    parameters={{
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Sample-File',
      },
    }}
  >
  {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Story, Meta } from '@storybook/angular/';

import { withDesign } from 'storybook-addon-designs';

import { MyComponent } from './MyComponent.component';

// More on default export: https://storybook.js.org/docs/6/writing-stories#default-export
export default {
  title: 'FigmaExample',
  component: MyComponent,
  decorators: [withDesign],
} as Meta;

// More on component templates: https://storybook.js.org/docs/6/writing-stories#using-args
const Template: Story = () => ({
  props: {},
});

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sample-File',
  },
};
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { withDesign } from 'storybook-addon-designs';

import { MyComponent } from './MyComponent';

// More on default export: https://storybook.js.org/docs/6/writing-stories#default-export
export default {
  title: 'FigmaExample',
  component: MyComponent,
  decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/6/writing-stories#using-args
const Template = () => <MyComponent />;

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sample-File',
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { withDesign } from 'storybook-addon-designs';

import { MyComponent } from './MyComponent';

<Meta title="FigmaExample" component={MyComponent} decorators={[withDesign]} />

export const Template = () => <MyComponent />;

<Canvas>
  <Story
    name="Example"
    parameters={{
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Sample-File',
      },
    }}
  >
  {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withDesign } from 'storybook-addon-designs';

import { MyComponent } from './MyComponent';

// More on default export: https://storybook.js.org/docs/6/writing-stories#default-export
export default {
  title: 'FigmaExample',
  component: MyComponent,
  decorators: [withDesign],
} as ComponentMeta<typeof YourComponent>;

// More on component templates: https://storybook.js.org/docs/6/writing-stories#using-args
const Template: ComponentStory<typeof MyComponent> = () => <MyComponent />;

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sample-File',
  },
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import { withDesign } from 'storybook-addon-designs';

import MyComponent from './MyComponent.svelte';

// More on default export: https://storybook.js.org/docs/6/writing-stories#default-export
export default {
  title: 'FigmaExample',
  component: { MyComponent },
  decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/6/writing-stories#using-args
const Template = () => ({
  props: {},
  Component: MyComponent,
});

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sample-File',
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { withDesign } from 'storybook-addon-designs';

import MyComponent from './MyComponent.svelte';

<Meta
  title="FigmaExample"
  component={MyComponent}
  decorators={[withDesign]}
/>

export const Template = () => ({
  props: {},
  Component: MyComponent,
});

<Canvas>
  <Story
    name="Example"
     parameters={{
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Sample-File',
      },
    }}
  >
  {Template.bind({})}
  </Story>
</Canvas>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { withDesign } from 'storybook-addon-designs';

import MyComponent from './MyComponent.vue';

// More on default export: https://storybook.js.org/docs/6/writing-stories#default-export
export default {
  title: 'FigmaExample',
  component: MyComponent,
  decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/6/writing-stories#using-args
const Template = () => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sample-File',
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { withDesign } from 'storybook-addon-designs';

import MyComponent from './MyComponent.vue';

<Meta title="FigmaExample" component={MyComponent} decorators={[withDesign]} />

export const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyComponent },
  template: 'MyComponent />',
});

<Canvas>
  <Story
    name="Example"
     parameters={{
      design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Sample-File',
      },
    }}
  >
  {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="MyComponent.stories.ts" renderer="vue" language="ts"
import { Meta, StoryFn } from '@storybook/vue'; // For Vue 3 use import { Meta, Story } from '@storybook/vue3';

import { withDesign } from 'storybook-addon-designs';

import MyComponent from './MyComponent.vue';

// More on default export: https://storybook.js.org/docs/6/writing-stories#default-export
export default {
  title: 'FigmaExample',
  component: MyComponent,
  decorators: [withDesign],
} as Meta<typeof MyComponent>;

// More on component templates: https://storybook.js.org/docs/6/writing-stories#using-args
const Template: StoryFn<typeof MyComponent> = () => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

export const Example = Template.bind({});
Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Sample-File',
  },
};
```
