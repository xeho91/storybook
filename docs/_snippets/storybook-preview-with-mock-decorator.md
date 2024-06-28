```js filename=".storybook/preview.js" renderer="common" language="js"
import { decorator } from '../__mocks__/isomorphic-fetch';

// Add the decorator to all stories
export const decorators = [decorator];
```
