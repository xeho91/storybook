```js filename="Button.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      description: 'Overwritten description',
      table: {
        type: {
          summary: 'Something short',
          detail: 'Something really really long',
        },
      },
      control: {
        type: null,
      },
    },
  },
};
```
```md filename="Button.stories.mdx" renderer="common" language="mdx"
import { Meta } from '@storybook/addon-docs';

import { Button } from './Button';

{/* Add new argTypes to your Story or further adjust them */}

<Meta
  title="Button"
  component={Button}
  argTypes={{
    label: {
      description: 'Overwritten description',
      table: {
        type: {
          summary: 'Something short',
          detail: 'Something really really long',
        },
      },
      control: {
        type: null,
      },
    },
  }}
/>
```
