```js filename=".storybook/my-addon/manager.js" renderer="common" language="js"
import { addons } from '@storybook/addons';

// Register the addon with a unique name.
addons.register('my-organisation/my-addon', (api) => {});
```
