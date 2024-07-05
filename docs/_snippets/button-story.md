```md filename="Button.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './button.component.ts';

<Meta title="Button" component={Button} />

# Button

<Story name="Primary">
  {{
    props: {
      primary: true,
      label: 'Button',
    },
  }}
</Story>
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: 'Button',
    primary: true,
  },
});
```
```js filename="Button.stories.js" renderer="html" language="js"
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
};

export const Primary = () => {
  const btn = document.createElement('button');
  btn.innerText = 'Button';

  btn.className = [
    'storybook-button',
    'storybook-button--medium',
    'storybook-button--primary',
  ].join(' ');

  return btn;
};
```
```ts filename="Button.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
} as Meta;

export const Primary: StoryFn = (): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.innerText = 'Button';

  btn.className = [
    'storybook-button',
    'storybook-button--medium',
    'storybook-button--primary',
  ].join(' ');

  return btn;
};
```
```js filename="Button.stories.js|jsx" renderer="preact" language="js"
/** @jsx h */
import { h } from 'preact';
import { Button } from './Button';

export default {
   /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
}

export const Primary = () => <Button primary label='Button' />;
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
};

export const Primary = () => <Button primary>Button</Button>;
```
```md filename="Button.stories.mdx" renderer="react" language="mdx" tabTitle="mdx-with-hooks"
import { useState } from 'react';

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

<Canvas>
  <Story name="Primary">
    {() => {
      const [value, setValue] = useState('Secondary');
      const [isPrimary, setIsPrimary] = useState(false);
      // Sets a click handler to change the label's value
      const handleOnChange = () => {
        if (!isPrimary) {
          setIsPrimary(true);
          setValue("Primary");
        }
      };
      return (
        <Button primary={isPrimary} onClick={handleOnChange} label={value} />
      );
    }}
  </Story>
</Canvas>
```
```md filename="Button.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

# Button

<Story name="Primary">
  <Button primary>Button</Button>
</Story>
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button primary>Button</Button>;
```
```js filename="Button.stories.js|ts|jsx|tsx" renderer="react" language="js" tabTitle="with-hooks"
import React, { useState } from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const Primary = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};
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
};

export const Primary = () => ({
  Component: Button,
  props: {
    primary: true,
    label: 'Button',
  },
});
```
```md filename="Button.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';

<Meta title="Button" component={Button}/>

# Button

<Story name="Primary">
  {{
    props: {
      primary: true,
      label: 'Button',
    },
  }}
</Story>
```
```html filename="Button.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Story name="Primary">
  <Button primary=true label="Button" />
</Story>
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
};

export const Primary = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
```
```md filename="Button.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta title="Button" component={Button} />

# Button

<Story name="Primary">
  {() => {
    return {
      components: { Button },
      template: `<Button primary label="Button" />`,
    };
  }}
</Story>
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import Button from './Button.vue';

import { Meta, StoryFn } from '@storybook/vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import Button from './Button.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
```
```js filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button';

export default {
  title: 'Button',
};

export const Primary = () => html`<demo-button primary></demo-button>`;
```
