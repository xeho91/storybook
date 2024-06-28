```js filename=".storybook/preview.js" renderer="common" language="js"
import React from 'react';
import { render } from 'react-dom';
import toReact from '@egoist/vue-to-react';

export const parameters = {
  docs: {
    prepareForInline: (storyFn, { args }) => {
      const Story = toReact(storyFn());
      return <Story {...args} />;
    },
  },
};
```
