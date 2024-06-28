```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Button } from './button.component';

import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button', 
  component: Button,
} as Meta;

export const Text: Story = () => ({
  props: {
    text: 'Hello Button',
    onClick: action('clicked'),
  },
});
```
```js filename="Button.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button', 
  component: Button,
};

export const Text = () => <Button label="Hello" onClick={action('clicked')} />;
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button', 
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = () => <Button label="Hello" onClick={action('clicked')} />;
```
```js filename="Button.stories.js" renderer="svelte" language="js"
import Button from './Button.svelte';

import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text = () => ({
  Component: Button,
  props:{
    label: 'Hello',
  },
  on: {
    click: action('clicked'),
  },
});
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* Button.stories.svelte */}

<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import { action } from '@storybook/addon-actions';
  
  import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button}/>

<Story name="Text">
  <Button text="Hello" on:click={action('clicked')}/>
</Story>
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="2"
import Button from './Button.vue';

import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text = () => ({
  components: { Button },
  template: '<Button label="Hello" @click="onClick" />',
  methods: {
    onClick: action('clicked'),
  },
});
```
```js filename="Button.stories.js" renderer="vue" language="js" tabTitle="3"
import Button from './Button.vue';

import { action } from '@storybook/addon-actions';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text = () => ({
  components: { Button },
  template: '<Button label="Hello" @click="onClick" />',
  setup(){
    return {
      onClick: action('clicked'),
    };
  },
});
```
