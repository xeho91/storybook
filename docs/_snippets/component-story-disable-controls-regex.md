```js filename="YourComponent.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { YourComponent } from './YourComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
};

const Template = (args) => ({
  //👇 Your template goes here
});


ArrayInclude = Template.bind({})
ArrayInclude.parameters = { controls: { include: ['foo', 'bar'] } };

RegexInclude = Template.bind({})
RegexInclude.parameters = { controls: { include: /^hello*/ } };

ArrayExclude = Template.bind({})
ArrayExclude.parameters = { controls: { exclude: ['foo', 'bar'] } };

RegexExclude = Template.bind({})
RegexExclude.parameters = { controls: { exclude: /^hello*/ } };
```
```md renderer="common" language="mdx"
{/* YourComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { YourComponent } from './YourComponent';

<Meta title="YourComponent" component={YourComponent} />

export const Template = (args) => ({
  //👇 Your template goes here
});

<Story 
  name="Array Include"
  parameters={{ 
    controls: { 
      include: ['foo', 'bar'] 
    } 
  }}>
  {Template.bind({})}
</Story>

<Story 
  name="Regex Include"
  parameters={{ 
    controls: { include: 
      /^hello*/ 
    } 
  }}>
  {Template.bind({})}
</Story>

<Story 
  name="Array Exclude"
  parameters={{ 
    controls: { 
      exclude: ['foo', 'bar'] 
    } 
  }}>
  {Template.bind({})}
</Story>

<Story 
  name="Regex Exclude"
  parameters={{ 
    controls: { 
      exclude: /^hello*/ 
    } 
  }}>
  {Template.bind({})}
</Story>
```
