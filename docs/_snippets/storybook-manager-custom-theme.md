```js filename=".storybook/manager.js" renderer="common" language="js"
import { addons } from '@storybook/addons';
import yourTheme from './YourTheme';

addons.setConfig({
  theme: yourTheme,
});
```
