```js filename="MyComponent.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/6/configure#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MyComponent',
  component: MyComponent,
};

const Template = (args) => ({
  //👇 Your template goes here
});

export const Default = Template.bind({});
Default.args = {
  exampleProp: process.env.EXAMPLE_VAR,
};
```
```md filename="MyComponent.stories.mdx" renderer="common" language="mdx"
import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta title="MyComponent" component={MyComponent}/>

export const Template = (args) => ({
  //👇 Your template goes here
});

<Canvas>
  <Story
    name="ExampleStory"
    args={{
      exampleProp: process.env.EXAMPLE_VAR,
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
