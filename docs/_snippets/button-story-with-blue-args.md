```md filename="Button.stories.mdx" renderer="angular" language="mdx"
import { Meta } from '@storybook/addon-docs';

import { Button } from './button.component';

{/* 👇 Creates specific parameters for the story */}
<Meta
  title="Button"
  component={Button}
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }}
/>

{/* Your story implementation */}
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta } from '@storybook/angular';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
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
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
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
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta<ButtonArgs>;

export const Primary: StoryFn<ButtonArgs> = (args) => createButton(args);
```
```js filename="Button.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
```
```md filename="Button.stories.mdx" renderer="react" language="mdx"
import { Meta } from '@storybook/addon-docs';

import { Button } from './Button';

{/* 👇 Creates specific parameters for the story */}
<Meta
  title="Button"
  component={Button}
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }}
/>

{/* Your story implementation */}
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
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
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as ComponentMeta<typeof Button>;
```
```js filename="Button.stories.js" renderer="svelte" language="js"
import Button from './Button.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
```
```md filename="Button.stories.mdx" renderer="svelte" language="mdx"
import { Meta } from '@storybook/addon-docs';

import Button from './Button.svelte';

{/* 👇 Creates specific parameters for the story */}
<Meta
  title="Button"
  component={Button}
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }}
/>

{/* Your story implementation */}
```
```html filename="Button.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
</script>

{/* 👇 Creates specific parameters for the story */}
<Meta
  title="Button"
  component={Button}
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00', },
        { name: 'green', value: '#0f0', },
        { name: 'blue', value: '#00f', },
      ]
    }
  }}
/>
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
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx"
import { Meta } from '@storybook/addon-docs';

import Button from './Button.vue';

{/* 👇 Creates specific parameters for the story */}
<Meta
  title="Button"
  component={Button}
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }}
/>

{/* Your story implementation */}
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
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
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
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta<typeof Button>;
```
```js filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button';

export default {
  title: 'Button',
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
```
