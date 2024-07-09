```md filename="ExampleStory.stories.mdx" renderer="common" language="mdx"
import { Canvas, Meta } from '@storybook/addon-docs';

import { ExampleComponent} from './ExampleComponent';

export const Template = (args) => (
  {/* 
  *  Your template implementation goes here.
  * Read more about Storybook templates at:
  * https://storybook.js.org/docs/6/get-started/whats-a-story
  */}
);

<Meta title="SampleComponent" component={ ExampleComponent } />

<Canvas columns={2}  withSource="open" withToolbar>
  {/* Your stories go here */}
</Canvas>
```
