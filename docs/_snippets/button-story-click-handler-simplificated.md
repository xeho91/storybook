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
} as Meta;

export const Text: Story = (args) => ({
  props: args,
});
```
```js filename="Button.stories.js|jsx|ts|tsx" renderer="react" language="js"
import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
}

export const Text = (args) => <Button {...args} />;
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* Button.stories.svelte */}

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from './Button.svelte';
</script>

{/* 
  See https://storybook.js.org/docs/svelte/essentials/actions#action-argtype-annotation
  to learn how to set up argTypes for actions
*/} 

<Meta
  title="Button"
  component={Button}
  argTypes={{
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story name="Text" args={{ label: 'Hello' }}/>
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
  /*
   * See https://storybook.js.org/docs/vue/essentials/actions#action-argtype-annotation
   * to learn how to set up argTypes for actions
   */
  argTypes: {
    onClick: {},
  },
};

export const Text = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});
```
