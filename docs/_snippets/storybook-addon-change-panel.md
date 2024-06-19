```js filename="/my-addon/src/manager.js" renderer="common" language="js"
import { useParameter } from '@storybook/api';

const PARAM_KEY = 'myAddon';

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : 'No story parameter defined';
  return <div>{item}</div>;
};
```
