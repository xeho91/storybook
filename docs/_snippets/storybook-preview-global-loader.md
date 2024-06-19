```js filename=".storybook/preview.js" renderer="common" language="js"
import fetch from 'node-fetch';

export const loaders = [
  async () => ({
    currentUser: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
  }),
];
```
