```js filename=".storybook/preview.js" renderer="common" language="js"
import { MyCanvas } from './MyCanvas';

export const parameters = {
  docs: {
    components: {
      Canvas: MyCanvas,
    },
  },
};
```
