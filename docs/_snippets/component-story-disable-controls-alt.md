```js filename="YourComponent.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { YourComponent } from './YourComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  argTypes: {
    // foo is the property we want to remove from the UI
    foo: {
      control: false,
    },
  },
};
```
```md renderer="common" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

import { YourComponent } from './your-component'

<Meta 
  title='YourComponent' 
  argTypes={{
    foo:{
      control: false
    }
  }}
  component={YourComponent} />
```
