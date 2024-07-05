```js filename="Button.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};
```
```md filename="Button.stories.mdx" renderer="common" language="mdx"
import { Meta } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" argTypes={{ onClick: { action: 'clicked' } }} component={Button} />
```
