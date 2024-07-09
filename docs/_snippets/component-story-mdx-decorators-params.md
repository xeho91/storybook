```md filename="MyComponent.stories.mdx" renderer="common" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta
  title="MyComponent"
  decorators={[ ... ]}
  parameters={{ ... }}
  component={MyComponent}
/>

<Story name="story" decorators={[ ... ]} parameters={{ ... }} >
...
</Story>
```
