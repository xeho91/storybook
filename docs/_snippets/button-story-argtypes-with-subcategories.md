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
    // Assigns the argTypes to the Colors category
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
        // Assigns the argTypes to a specific subcategory
        subcategory: 'Button colors',
      },
    },
    primary: {
      table: {
        category: 'Colors',
        subcategory: 'Button style',
      },
    },
    label: {
      table: {
        category: 'Text',
        subcategory: 'Button contents',
      },
    },
    // Assigns the argType to the Events category
    onClick: {
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
    },
    // Assigns the argType to the Sizes category
    size: {
      table: {
        category: 'Sizes',
      },
    },
  },
};
```
```md filename="Button.stories.mdx" renderer="common" language="mdx"
import { ArgsTable, Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta
  title="Button"
  component={Button}
  argTypes={{
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
        // Assigns the argTypes to a specific subcategory
        subcategory: 'Button colors',
      },
    },
    primary: {
      table: {
        category: 'Colors',
        subcategory: 'Button style',
      },
    },
    label: {
      table: {
        category: 'Text',
        subcategory: 'Button contents',
      },
    },
    onClick: {
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
    },
    size: {
      table: {
        category: 'Sizes',
      },
    },
  }}
/>
```
