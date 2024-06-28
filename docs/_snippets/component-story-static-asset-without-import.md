```md renderer="angular" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent.component';

<Meta title="img" component={MyComponent}/>

{/* Assume image.png is located in the "public" directory.*/}
<Story 
  name="WithAnImage">
  {{
    props: {
      src: '/image.png',
      alt: 'my image',
    },
  }}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
  component: MyComponent,
} as Meta;

// Assume image.png is located in the "public" directory.
export const WithAnImage: Story = () => ({
  props: {
    src: '/image.png',
    alt: 'my image',
  },
});
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
};

// Assume image.png is located in the "public" directory.
export const WithAnImage = () => <img src="/image.png" alt="my image" />;
```
```md renderer="react" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta title="img" component={MyComponent} />

import { Meta, Story } from '@storybook/addon-docs';

<Meta title="img" />

{/* Assume image.png is located in the "public" directory.*/}
<Story name="withAnImage">
  <img src="/image.png" alt="my image" />
</Story>
```
```ts filename=" MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import imageFile from './static/image.png';

import { Meta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
} as Meta;

const image = {
  src: imageFile,
  alt: 'my image',
};
// Assume image.png is located in the "public" directory.
export const WithAnImage = () => <img src="/image.png" alt="my image" />;
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
  component: MyComponent,
};

// Assume image.png is located in the "public" directory.
export const WithAnImage = () => ({
  Component: MyComponent,
    props: {
      src: '/image.png',
      alt: 'my image',
    },
});
```
```md renderer="svelte" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.svelte0;

<Meta title="img" component={MyComponent} />

{/* Assume image.png is located in the "public" directory. */}

<Story name="withAnImage">
  {() => {
    return {
      Component: MyComponent,
      props: {
        src: '/image.png',
        alt: 'my image',
      },
    };
  }}
</Story>
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* MyComponent.stories.svelte */}

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import MyComponent from './MyComponent.svelte';
</script>

<Meta
  title="img"
  component={MyComponent}
/>

<Template>
  <MyComponent src="/image.png" alt="my image" />
</Template>

<Story name="WithAnImage" />
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
};

// Assume image.png is located in the "public" directory.
export const WithAnImage = () => ({
  template: '<img src="image.png" alt="my image" />',
});
```
```md renderer="vue" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

<Meta title="img" component={MyComponent}/>

{/* Assume image.png is located in the "public" directory.*/}
<Story 
  name="WithAnImage">
  {() => {
    return {
      setup() {
        return { image };
      },
      template: `<img src="image.png" alt="my image" />`,
    };
  }}
</Story>
```
