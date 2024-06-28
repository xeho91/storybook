```js filename=".storybook/manager.js" renderer="common" language="js"
import { addons } from '@storybook/addons';

import startCase from 'lodash/startCase';

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => (type === 'story' ? name : startCase(name)),
  },
});
```
