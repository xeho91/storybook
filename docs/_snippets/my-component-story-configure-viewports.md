```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { MyComponent } from './MyComponent.component';

<Meta
  title="MyComponent"
  parameters={{
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  }}
  component={MyComponent} />

<Story
  name="MyStory"
  parameters={{
    viewport: {
      defaultViewport: 'iphonex',
    }
  }}>
  {{
    template: '<MyComponent></MyComponent>',
  }}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,

      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
} as Meta;

export const MyStory: Story = () => ({
  template: '<MyComponent></MyComponent>',
});
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
};

export const MyStory = () => <MyComponent />;
MyStory.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { MyComponent } from './MyComponent';

<Meta
  title="MyComponent"
  parameters={{
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  }}
  component={MyComponent}
/>

<Story
  name="MyStory"
  parameters={{
    viewport: {
      defaultViewport: 'iphonex',
    },
  }}>
  <MyComponent />
</Story>
```
```ts filename="MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof MyComponent>;

export const MyStory: ComponentStory<typeof MyComponent> = () => <MyComponent />;
MyStory.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
};

export const MyStory = () => ({
  Component: MyComponent,
});
MyStory.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import MyComponent from './MyComponent.svelte';

<Meta
  title="MyComponent"
  parameters={{
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  }}
  component={MyComponent} />

<Story
  name="MyStory"
  parameters={{
    viewport: {
      defaultViewport: 'iphonex',
    }
  }}>
   {() => {
    return {
      Component: MyComponent,
    };
  }}
</Story>
```
```html filename="MyComponent.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

  import MyComponent from "./MyComponent.svelte";
</script>

<Meta
  title="MyComponent"
  component={MyComponent}
  parameters={{
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  }}
/>

<Template let:args>
  <MyComponent {...args} />
</Template>

<Story
  name="MyStory"
  parameters={{
    viewport: {
      defaultViewport: 'iphonex',
    },
  }}
/>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,

      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
};

export const MyStory = () => ({
  components: { MyComponent },
  template: '<MyComponent />',
});
MyStory.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  },
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import MyComponent from './MyComponent.vue';

<Meta
  title="MyComponent"
  parameters={{
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  }}
  component={MyComponent}
/>

<Story
  name="MyStory"
  parameters={{
    viewport: {
      defaultViewport: 'iphonex',
    }
  }}>
  {() => {
    return {
      template: `<MyComponent />`,
    };
  }}
</Story>
```
```js filename="my-component.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

import './my-component';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'MyComponent',
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'iphone6'
    },
  };
};

export const MyStory = () => html`<my-component></my-component>`;
MyStory.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  },
};
```
