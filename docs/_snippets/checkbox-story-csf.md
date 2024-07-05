```ts filename="Checkbox.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { Checkbox } from './Checkbox.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Checkbox', 
  component: Checkbox,
} as Meta;

export const allCheckboxes: Story = () => ({
  template: `
    <form>
      <Checkbox id="Unchecked" label="Unchecked" />
      <Checkbox id="Checked" label="Checked" checked />
      <Checkbox appearance="secondary" id="second" label="Secondary" checked />
    </form>
  `,
});
```
```js filename="Checkbox.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Checkbox } from './Checkbox';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => ({
  //👇 Your template goes here
});


export const Unchecked = Template.bind({});
Unchecked.args = {
  label: 'Unchecked',
};
```
```js filename="Checkbox.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Checkbox', 
  component: Checkbox,
};

export const allCheckboxes = () => (
  <form>
    <Checkbox id="Unchecked" label="Unchecked" />
    <Checkbox id="Checked" label="Checked" checked />
    <Checkbox appearance="secondary" id="second" label="Secondary" checked />
  </form>
);
```
```ts filename="Checkbox.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Checkbox', 
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const allCheckboxes: ComponentStory<typeof Checkbox> = () => (
  <form>
    <Checkbox id="Unchecked" label="Unchecked" />
    <Checkbox id="Checked" label="Checked" checked />
    <Checkbox appearance="secondary" id="second" label="Secondary" checked />
  </form>
);
```
```html filename="Checkbox.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Checkbox from './Checkbox.svelte';
</script>

<Meta title="MDX/Checkbox" component={Checkbox}/>

<Story name="allCheckboxes">
  <form>
    <Checkbox id="Unchecked" label="Unchecked" />
    <Checkbox id="Checked" label="Checked" {checked} />
    <Checkbox appearance="secondary" id="second" label="Secondary" {checked} />
  </form>
</Story>
```
```js filename="Checkbox.stories.js" renderer="vue" language="js"
import Checkbox from './Checkbox.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Checkbox', 
  component: Checkbox,
};

export const allCheckboxes = () => ({
  components: { Checkbox },
  template: `
    <form>
      <Checkbox id="Unchecked" label="Unchecked"/>
      <Checkbox id="Checked" label="Checked" checked />
      <Checkbox appearance="secondary" id="second" label="Secondary" checked />
    </form>`,
});
```
