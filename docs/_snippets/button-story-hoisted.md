```js filename="Button.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Button as ButtonComponent } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
};

// This is the only named export in the file, and it matches the component name
export const Button = (args) =>({
  //👇  Your story implementation goes here
});
```
