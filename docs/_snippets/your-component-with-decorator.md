```md renderer="angular" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

import { componentWrapperDecorator } from '@storybook/angular';

import { YourComponent } from './your-component.component';

<Meta
  title="YourComponent"
  component={YourComponent}
  decorators={[componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)]}
/>
```
```ts filename="YourComponent.stories.ts" renderer="angular" language="ts"
import { componentWrapperDecorator, Meta } from '@storybook/angular';

import { YourComponent } from './your.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)],
} as Meta;
```
```js filename="YourComponent.stories.js|jsx" renderer="react" language="js"
import { YourComponent } from './YourComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};
```
```md renderer="react" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

import { YourComponent } from './YourComponent';

<Meta
  title="YourComponent"
  component={YourComponent}
  decorators={[
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ]}
/>
```
```js filename="YourComponent.stories.js|jsx" renderer="react" language="js" tabTitle="story-function-js"
import { YourComponent } from './YourComponent';

// Replacing the <Story/> element with a Story function is also a good way of writing decorators.
// Useful to prevent the full remount of the component's story.

export default {
   /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>],
};
```
```ts filename="YourComponent.stories.ts|tsx" renderer="react" language="ts" tabTitle="story-function-ts"
import { ComponentMeta } from '@storybook/react';

import { YourComponent } from './YourComponent';

// Replacing the <Story/> element with a Story function is also a good way of writing decorators.
// Useful to prevent the full remount of the component's story.
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof YourComponent>;
```
```ts filename="YourComponent.stories.ts|tsx" renderer="react" language="ts"
import { ComponentMeta } from '@storybook/react';

import { YourComponent } from './YourComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof YourComponent>;
```
```js filename="YourComponent.stories.js" renderer="svelte" language="js"
import YourComponent from './YourComponent.svelte';

import MarginDecorator from './MarginDecorator.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators:  [() => MarginDecorator]
};

// Your templates and stories here. 
// Don't forget to use the component you're testing and not the MarginDecorator component

```

```html
{/* MarginDecorator.svelte */}

<div>
  <slot/>
</div>

<style>
  div { 
    margin: 3em;
  }
</style>
```
```md renderer="svelte" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

import YourComponent from './YourComponent.svelte';
import MarginDecorator from './MarginDecorator.svelte';

<Meta 
  title="YourComponent"
  component={YourComponent} 
  decorators={[() => MarginDecorator]}/>
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* YourComponent.stories.svelte */}

<script>
  import { Meta, Template } from '@storybook/addon-svelte-csf';
  
  import MarginDecorator from './MarginDecorator.svelte';

  import YourComponent from './YourComponent.svelte';
</script>

<Meta
  title="YourComponent"
  component={YourComponent}
/>

<Template let:args>
  <MarginDecorator>
    {/*👇 Your component here */}
  </MarginDecorator>
</Template>
```
```js filename="YourComponent.stories.js" renderer="vue" language="js"
import YourComponent from './YourComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
};
```
```md renderer="vue" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

import YourComponent from './YourComponent.vue';

<Meta
  title="YourComponent"
  component={YourComponent}
  decorators={[
    () => ({
      template: '<div style="margin: 3em;"><story /></div>',
    }),
  ]}
/>
```
```js filename="your-component.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './your-component';

export default {
  title: 'YourComponent',
  decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],
}
```
