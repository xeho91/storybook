```js filename="Button.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button', 
  component: Button,
};

export const Sample = () => <Button label="hello button" />;
```
