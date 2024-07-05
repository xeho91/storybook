```js filename="components/MyComponent/MyComponent.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { MyComponent } from './MyComponent.js'

export default {
  component: MyComponent,
  title: 'components/MyComponent/MyComponent',
};

export const Default = {
  args: {
    something: 'Something else',
  },
};
```
