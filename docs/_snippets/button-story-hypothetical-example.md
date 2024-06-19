```js filename="Button.stories.js|jsx" renderer="common" language="js"
import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Sample = () => ({
  template: '<button :label=label />',
  data: {
    label: 'hello button',
  },
});
```
