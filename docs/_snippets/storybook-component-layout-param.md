```js filename="Button.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};
```
```md renderer="common" language="mdx"
{/* Button.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta
  title="Button"
  parameters={{
    layout: 'centered',
  }}
  component={Button}
/>
```
