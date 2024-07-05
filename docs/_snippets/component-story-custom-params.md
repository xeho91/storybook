```js filename="Button.stories.js|ts|jsx|tsx" renderer="common" language="js"
import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

const Template = (args) => ({
  // 👈 Your template goes here
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};
```
```md filename="Button.stories.mdx" renderer="common" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

export const Template = (args) =>({
  // 👈 Your template goes here
});

<Story
  name="Primary"
  parameters={{
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  }}
  args={{
    primary: true,
    label: 'Button',
  }}>
  {Template.bind({})}
</Story>
```
