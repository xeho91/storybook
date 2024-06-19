```js filename="your-addon/manager.js" renderer="common" language="js"
import { useArgs } from '@storybook/api';

const [args, updateArgs, resetArgs] = useArgs();

// To update one or more args:
updateArgs({ key: 'value' });

// To reset one (or more) args:
resetArgs((argNames: ['key']));

// To reset all args
resetArgs();
```
