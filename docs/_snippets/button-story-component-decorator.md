```md filename="Button.stories.mdx" renderer="angular" language="mdx"
import { Meta } from '@storybook/addon-docs';

import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { Button } from './button.component';

import { ParentComponent } from './parent.component';

{/* With a template */}
<Meta
  title="Button"
  component={Button}
  decorators={[
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)
  ]}
/>

{/* With component which contains ng-content */}
<Meta
  title="Components/Button"
  component={Button}
  decorators={[
    moduleMetadata({
      declarations: [ParentComponent],
    }),
    componentWrapperDecorator(ParentComponent),
  ]}
/>

{/* Remainder story implementation */}
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { componentWrapperDecorator, Meta, moduleMetadata } from '@storybook/angular';

import { Button } from './button.component';

import { Parent } from './parent.component'; // Parent contains ng-content

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  decorators: [
    moduleMetadata({
      declarations: [ParentComponent],
    }),
    // With template
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
    // With component which contains ng-content
    componentWrapperDecorator(Parent),
  ],
} as Meta;
```
```js filename="Button.stories.js" renderer="html" language="js"
import { createButton } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  decorators: [(story) => {
    const decorator = document.createElement('div');
    decorator.style.margin = '3em';
    decorator.appendChild(story());
    return decorator;
  }],
};

export const Primary = (args) => createButton(args);
```
```ts filename="Button.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

import { createButton, ButtonArgs } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  decorators: [(story) => {
    const decorator = document.createElement('div');
    decorator.style.margin = '3em';
    decorator.appendChild(story());
    return decorator;
  }],
} as Meta<ButtonArgs>;

export const Primary: StoryFn<ButtonArgs> = (args) => createButton(args);
```
```js filename="Button.stories.js|jsx" renderer="react" language="js" tabTitle="story-component-js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};
```
```md filename="Button.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta
  title="Button"
  component={Button}
  decorators={[
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ]}
/>

{/* Remainder story implementation */}
```
```js filename="Button.stories.js|jsx" renderer="react" language="js" tabTitle="story-function-js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {Story()}
      </div>
    ),
  ],
};
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts" tabTitle="story-function-ts"
import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts" tabTitle="story-component-ts"
import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;
```
```js filename="Button.stories.js" renderer="svelte" language="js" tabTitle="story"
import Button from './Button.svelte';
import MarginDecorator from './MarginDecorator.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  decorators: [() => MarginDecorator],
};

// Your stories here.

// Don't forget to use the component you're testing and not the MarginDecorator component
```
```html filename="MarginDecorator.svelte" renderer="svelte" language="js" tabTitle="decorator"
<div>
  <slot />
</div>

<style>
  div {
    margin: 3em;
  }
</style>
```
```md filename="Button.stories.mdx" renderer="svelte" language="mdx" tabTitle="mdx-story"
import { Story, Meta } from '@storybook/addon-docs';

import Button from './Button.svelte';
import MarginDecorator from './MarginDecorator.svelte';

<Meta title="Button" component={Button} decorators={[() => MarginDecorator]}/>

{/* Remainder story implementation */}
```
```html filename="MarginDecorator.svelte" renderer="svelte" language="mdx" tabTitle="mdx-decorator"
<div>
  <slot />
</div>

<style>
  div {
    margin: 3em;
  }
</style>
```
```html filename="Button.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template } from '@storybook/addon-svelte-csf';
  
  import MarginDecorator from './MarginDecorator.svelte';

  import Button from './Button.svelte';
</script>

<Meta
  title="Button"
  component={Button}
/>

<Template let:args>
  <MarginDecorator>
    {/*👇 Your component here */}
  </MarginDecorator>
</Template>
```
```html filename="MarginDecorator.svelte" renderer="svelte" language="ts" tabTitle="native-format-decorator"
<div>
  <slot />
</div>

<style>
  div {
    margin: 3em;
  }
</style>
```
```js filename="Button.stories.js" renderer="vue" language="js"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story /></div>' })],
};
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta
  title="Button"
  component={Button}
  decorators={[
    () => ({
      template: '<div style="margin: 3em;"><story /></div>',
    }),
  ]}
/>

{/* Remainder story implementation */}
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import Button from './Button.vue';

import { Meta } from '@storybook/vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story /></div>' })],
} as Meta<typeof Button>;
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import Button from './Button.vue';

import { Meta } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story /></div>' })],
} as Meta<typeof Button>;
```
```js filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button';

export default {
  title: 'Button',
  decorators: [(story) => html`<div style="margin: 3em">${story()}</div>`],
};

export const Primary = () => html`<demo-button primary></demo-button>`;
```
