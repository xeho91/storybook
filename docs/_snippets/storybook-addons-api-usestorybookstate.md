```js filename="/my-addon/manager.js" renderer="common" language="js"
import React from 'react';

import { useStorybookState } from '@storybook/api';

export const Panel = () => {
  const state = useStorybookState();

  return <div>do something with storybook's state</div>;
};
```
