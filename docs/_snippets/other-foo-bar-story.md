```js filename="FooBar.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Foo } from './Foo';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'OtherFoo/Bar',
  component: Foo,
  id: 'Foo/Bar', // Or 'foo-bar' if you prefer
};

const BarStory = () => ({
  //👇 Your template goes here
});

export const Baz = () => BarStory.bind({});
Baz.storyName = 'Moo';
```
