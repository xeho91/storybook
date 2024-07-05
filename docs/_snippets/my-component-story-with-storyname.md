```js filename="MyComponent.story.js|jsx|ts|tsx" renderer="common" language="js"
import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent', 
  component: MyComponent,
};

export const Simple = () => ({
  //👇 Your story goes here
});
Simple.decorators = [ ... ];
Simple.parameters = { ... };
Simple.storyName = 'So simple!';
```
