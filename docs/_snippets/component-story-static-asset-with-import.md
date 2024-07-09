```md filename="MyComponent.stories.mdx" renderer="angular" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent.component';

import imageFile from './static/image.png';

<Meta title="img" component={MyComponent}/>

export const image = {
  src: imageFile,
  alt: 'my image',
};

<Story name="WithAnImage">
  {{
    props: {
      src: image.src,
      alt: image.alt,
    },
    template: `<img src="{{src}}" alt="{{alt}}" />`,
  }}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

import imageFile from './static/image.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
  component: MyComponent,
} as Meta;

const image = {
  src: imageFile,
  alt: 'my image',
};

export const WithAnImage: Story () => ({
  template: `<img src="{{src}}" alt="{{alt}}" />`,
  props: {
    src: image.src,
    alt: image.alt,
  },
});
```
```js filename="MyComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import imageFile from './static/image.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
};

const image = {
  src: imageFile,
  alt: 'my image',
};

export const WithAnImage = () => <img src={image.src} alt={image.alt} />;
```
```md filename="MyComponent.stories.mdx" renderer="react" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import imageFile from './static/image.png';

<Meta title="img" />

export const image = {
  src: imageFile,
  alt: 'my image',
};

<Story name="WithAnImage">
  <img src={image.src} alt={image.alt} />;
</Story>
```
```ts filename=" MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import imageFile from './static/image.png';

import { Meta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
} as Meta;

const image = {
  src: imageFile,
  alt: 'my image',
};

export const WithAnImage = () => <img src={image.src} alt={image.alt} />;
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import MyComponent from './MyComponent.svelte';

import imageFile from './static/image.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
  component: MyComponent,
};

const image = {
  src: imageFile,
  alt: 'my image',
};

export const WithAnImage = () => ({
  Component: MyComponent,
  props: {
    image: image
  },
});
```
```md filename="MyComponent.stories.mdx" renderer="svelte" language="mdx"
import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.svelte';

import imageFile from './static/image.png';

<Meta title="img" component={MyComponent} />

export const image = {
  src: imageFile,
  alt: 'my image',
};

<Story name="WithAnImage">
  {() => {
    return {
      Component: MyComponent,
      props: {
        image: image,
      },
    };
  }}
</Story>
```
```html filename="MyComponent.stories.svelte" renderer="svelte" language="ts" tabTitle="native-format"
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  import MyComponent from './MyComponent.svelte';

  import imageFile from './static/image.png';

  let image = {
    src: imageFile,
    alt: 'my image',
  };
</script>

<Meta
  title="img"
  component={MyComponent}
/>

<Template >
  <MyComponent {image} />
</Template>

<Story name="WithAnImage" />
```
```js filename="MyComponent.stories.js" renderer="vue" language="js" tabTitle="2"
import imageFile from './static/image.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
};

const image = {
  src: imageFile,
  alt: 'my image',
};

export const WithAnImage = () => ({
  props: {
    src: {
      default: () => image.src,
    },
    alt: {
      default: () => image.alt,
    },
  },
  template: `<img :src="src" :alt="alt"/>`,
});
```
```js filename="MyComponent.stories.js" renderer="vue" language="js" tabTitle="3"
import imageFile from './static/image.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
};

const image = {
  src: imageFile,
  alt: 'my image',
};

export const WithAnImage = () => {
  return {
    setup() {
       //👇 Returns the content of the image object create above.
      return { image };
    },
    template: `<img v-bind="image"/>`,
  };
};
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-2"
import { Meta, Story } from '@storybook/addon-docs';

import imageFile from './static/image.png'

<Meta title="img" component={MyComponent}/>

export const image = {
  src: imageFile,
  alt: 'my image',
};

<Story 
  name="WithAnImage">
  {() => {
    return {
      props: {
        src: {
          default: () => image.src,
        },
        alt: {
          default: () => image.alt,
        },
      },
      template: `<img :src="src" :alt="alt"/>`,
    };
  }}
</Story>
```
```md filename="MyComponent.stories.mdx" renderer="vue" language="mdx" tabTitle="mdx-3"
import { Meta, Story } from '@storybook/addon-docs';

import imageFile from './static/image.png'

<Meta title="img" component={MyComponent}/>

export const image = {
  src: imageFile,
  alt: 'my image',
};

<Story 
  name="WithAnImage">
  {() => {
    return {
      setup() {
        return { image };
      },
      template: `<img v-bind="image"/>`,
    };
  }}
</Story>
```
