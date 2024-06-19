```md renderer="angular" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './button.component';

{/* 👇 Creates specific argTypes for args and turns every Button story into primary */}

<Meta 
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: { control: 'color' },
  }},
  args={{
    primary: true,
  }} />

{/* Remainder story implementation */}
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta } from '@storybook/angular';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
} as Meta;
```
```js filename="Button.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};
```
```md renderer="react" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

{/* 👇 Creates specific argTypes and turns all stories into primary */}

<Meta 
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: { 
      control: 'color', 
    },
  }},
  args={{
    primary: true,
  }}/>

{/* Remainder story implementation */}
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
} as ComponentMeta<typeof Button>;
```
```js filename="Button.stories.js" renderer="svelte" language="js"
import Button from './Button.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};
```
```md renderer="svelte" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';

{/* 👇 Creates specific argTypes and turns all stories into primary */}

<Meta title="Button"
  component={Button}
  argTypes={{
    backgroundColor: { 
      control: 'color',
    },
  }},
  args={{
    primary: true,
  }}/>

{/* Remainder story implementation */}
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* Button.stories.svelte */}

<script>
  import { Meta } from '@storybook/addon-svelte-csf';
  
  import Button from './Button.svelte';
</script>

<Meta
  title="Button"
  component={Button}
  args={{
    primary: true,
  }}
/>
```
```js filename="Button.stories.js" renderer="vue" language="js"
import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};
```
```md renderer="vue" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

{/* 👇 Creates specific argTypes and turns all stories into primary */}

<Meta title="Button"
  component={Button}
  argTypes={{
    backgroundColor: { 
      control: 'color',
    },
  }},
  args={{
    primary: true,
  }}/>

{/* Remainder story implementation */}
```
```js filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button';

export default {
  title: 'Button',
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};

export const Primary = ({ primary }) => html`<demo-button ?primary=${primary}></demo-button>`;
```
