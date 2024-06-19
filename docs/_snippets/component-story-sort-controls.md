```js filename="YourComponent.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { YourComponent } from './your-component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
};
```
```md renderer="common" language="mdx"
{/* YourComponent.stories.mdx */}

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
