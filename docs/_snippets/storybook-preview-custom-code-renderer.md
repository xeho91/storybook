```js filename=".storybook/preview.js" renderer="common" language="js"
import { CodeBlock } from './CodeBlock';

export const parameters = {
  docs: {
    components: {
      code: CodeBlock,
    },
  },
};
```
