```js filename="YourComponent.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { YourComponent } from './your-component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
};
```
```md filename="YourComponent.stories.mdx" renderer="common" language="mdx"
import { Meta } from '@storybook/addon-docs';

import { YourComponent } from './your-component'

<Meta 
  title="My Story"
  component={YourComponent}
  parameters={{ 
    controls: { 
      sort: 'requiredFirst',
    } 
  }} />
```
