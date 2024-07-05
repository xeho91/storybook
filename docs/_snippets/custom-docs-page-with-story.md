```js filename="CustomDocumentationComponent.js|jsx" renderer="common" language="js" tabTitle="custom-js-component"
import React from 'react';

export function CustomDocumentationComponent() {
  return (
    <div>
      <h1>Replacing DocsPage with a custom component</h1>
      <p>
        The Docs page can be customized with your own custom content written as a React Component.
      </p>
      <p>
       Write your own code here👇
      </p>
    </div>
  );
}
```
```js filename="Button.stories.js|jsx|ts|tsx"  renderer="common" language="js" tabTitle="story"
import { Button } from './Button';

import { CustomDocumentationComponent } from './CustomDocumentationComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: CustomDocumentationComponent,
    },
  },
};
```
```ts filename="CustomDocumentationComponent.ts|tsx" renderer="common" language="ts" tabTitle="custom-ts-component"
import React from 'react';

export const CustomDocumentationComponent: React.VFC<{}> = () => {
  return (
    <div>
      <h1>Replacing DocsPage with a custom component</h1>
      <p>
        The Docs page can be customized with your own custom content written as a React Component.
      </p>
      <p>
       Write your own code here👇
      </p>
    </div>
  );
};
```
