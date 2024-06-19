```js filename="Button.stories.js" renderer="html" language="js"
import { createButton } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
};
```

```ts filename="Button.stories.ts" renderer="html" language="ts"
import { Meta } from '@storybook/html';

import { createButton, ButtonArgs } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
} as Meta<ButtonArgs>;
```

