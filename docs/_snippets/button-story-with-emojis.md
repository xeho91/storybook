```md renderer="angular" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './button.component';

<Meta title="Button" component={Button}/>

<Story name="Primary">
  {{
    props: {
      background: '#ff0',
      label: 'Button',
    },
  }}
</Story>

<Story name="Secondary">
  {{
    props: {
      background: '#ff0',
      label: '😄👍😍💯',
    },
  }}
</Story>

<Story name="Tertiary">
  {{
    props: {
      background: '#ff0',
      label: '📚📕📈🤓',
    },
  }}
</Story>
```
```ts filename="Button.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Button } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary: Story = () => ({
  props: {
    label: 'Button',
    backgroundColor: '#ff0',
  },
});


export const Secondary: Story = () => ({
  props: {
    label: '😄👍😍💯',
    backgroundColor: '#ff0',
  },
});

export const Tertiary: Story = () => ({
  props: {
    label: '📚📕📈🤓',
    backgroundColor: '#ff0',
  },
});
```
```js filename="Button.stories.js" renderer="html" language="js"
import { createButton } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
};
export const Primary = () => createButton({ backgroundColor: "#ff0", label: "Button"});
export const Secondary = () => createButton({ backgroundColor: "#ff0", label: "😄👍😍💯"});
export const Tertiary = () => createButton({ backgroundColor: "#ff0", label: "📚📕📈🤓"});
```

```ts filename="Button.stories.ts" renderer="html" language="ts"
import { Meta, StoryFn } from '@storybook/html';
import { createButton, ButtonArgs } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
} as Meta<ButtonArgs>;
export const Primary: StoryFn<ButtonArgs> = () => createButton({ backgroundColor: "#ff0", label: "Button"});
export const Secondary: StoryFn<ButtonArgs> = () => createButton({ backgroundColor: "#ff0", label: "😄👍😍💯"});
export const Tertiary: StoryFn<ButtonArgs> = () => createButton({ backgroundColor: "#ff0", label: "📚📕📈🤓"});
```

```ts filename="Button.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};
export const Primary = () => <Button backgroundColor="#ff0" label="Button" />;
export const Secondary = () => <Button backgroundColor="#ff0" label="😄👍😍💯" />;
export const Tertiary = () => <Button backgroundColor="#ff0" label="📚📕📈🤓" />;
```
```md renderer="react" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button}/>

<Story name="Primary">
  <Button backgroundColor="#ff0" label="Button" />
</Story>

<Story name="Secondary">
  <Button backgroundColor="#ff0" label="😄👍😍💯" />
</Story>

<Story name="Tertiary">
  <Button backgroundColor="#ff0" label="📚📕📈🤓" />
</Story>
```
```ts filename="Button.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="Button" />
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="😄👍😍💯" />
);

export const Tertiary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="📚📕📈🤓" />
);
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
};

export const Primary = () => ({
  Component: Button,
  props: {
    background: '#ff0',
    label: 'Button',
  },
});

export const Secondary = () => ({
  Component: Button,
  props: {
    background: '#ff0',
    label: '😄👍😍💯',
  },
});

export const Tertiary = () => ({
  Component: Button,
  props: {
    background: '#ff0',
    label: '📚📕📈🤓',
  },
});
```
```md renderer="svelte" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.svelte';

<Meta title="Button" component={Button} />


<Story name="Primary">
  {{
    props: {
      background: '#ff0',
      label: 'Button',
    },
  }}
</Story>

<Story name="Secondary">
  {{
    props: {
      background: '#ff0',
      label: '😄👍😍💯',
    },
  }}
</Story>

<Story name="Tertiary">
  {{
    props: {
      background: '#ff0',
      label: '📚📕📈🤓',
    },
  }}
</Story>
```
```html renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  
  import Button from './Button.svelte';
</script>

<Meta title="Button" component={Button} />

<Story name="Primary">
  <Button background="#ff0" label="Button" />
</Story>

<Story name="Secondary">
  <Button background="#ff0" label="😄👍😍💯" />
</Story>

<Story name="Tertiary">
  <Button background="#ff0" label="📚📕📈🤓" />
</Story>
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
};

export const Primary = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="Button" />',
});

export const Secondary = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="😄👍😍💯" />',
});

export const Tertiary = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="📚📕📈🤓" />',
});
```
```md renderer="vue" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import Button from './Button.vue';

<Meta title="Button" component={Button}/>

<Story name="Primary">
  {() => {
    return {
      components: { Button },
      template: `<Button background="#ff0" label="Button"  />`,
    };
  }}
</Story>

<Story
  name="Secondary">
  {() => {
    return {
      components: { Button },
      template: `<Button background="#ff0" label="😄👍😍💯" />`,
    };
  }}
</Story>

<Story
  name="Tertiary">
  {() => {
    return {
      components: { Button },
      template: `<Button background="#ff0" label="📚📕📈🤓" />`,
    };
  }}
</Story>
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-2"
import Button from './Button.vue';

import { Meta, StoryFn } from '@storybook/vue';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="Button" />',
});

export const Secondary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="😄👍😍💯" />',
});

export const Tertiary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="📚📕📈🤓" />',
});
```
```ts filename="Button.stories.ts" renderer="vue" language="ts" tabTitle="ts-3"
import Button from './Button.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="Button" />',
});

export const Secondary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="😄👍😍💯" />',
});

export const Tertiary: StoryFn<typeof Button> = () => ({
  components: { Button },
  template: '<Button background="#ff0" label="📚📕📈🤓" />',
});
```
```ts filename="demo-button.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './demo-button';

export default {
    title: 'Button',
}
export const Primary = () => html`<demo-button .background="#ff0" .label="Button"></demo-button>`;
export const Secondary = () => html`<demo-button .background="#ff0" .label="😄👍😍💯"></demo-button>`;
export const Tertiary = () => html`<demo-button .background="#ff0" .label="📚📕📈🤓"></demo-button>`;
```
