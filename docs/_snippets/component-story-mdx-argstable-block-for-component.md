```md filename="MyComponent.stories.mdx" renderer="common" language="mdx" tabTitle="with-component"
import { ArgsTable } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

# My Component!

<ArgsTable of={MyComponent} />
```
```md filename=" MyComponent.stories.mdx" renderer="common" language="mdx" tabTitle="with-story"
import { ArgsTable, Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta title="MyComponent" component={MyComponent} />

export const Template = (args) => ({
  //👇 Your template goes here
});

# My Component!

<Story 
  name="My Story" >
  {Template.bind({})}
</Story>

<ArgsTable story="My Story" />
```
