```js filename="Button.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Button } from './Button';

// To apply a grid to all stories of Button:
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
        offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  },
};
```
```md renderer="common" language="mdx"
{/* Button.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

import { Button } from './Button';

{/* To apply a grid to all stories of Button */}

<Meta
  title="Button"
  parameters={{
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
        offsetX: 16, 
        offsetY: 16,
      },
    },
  }}
  component={Button}
/>
```
