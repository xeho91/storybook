```md renderer="angular" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent.component';


<Meta title="img" component={MyComponent}/>

<Story 
  name="WithAnImage">
   {{
    props: {
      src: 'https://place-hold.it/350x150',
      alt: 'My CDN placeholder',
    },
  }}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
  component: MyComponent,
} as Meta;


export const WithAnImage: Story = () => ({
  props: {
    src: 'https://place-hold.it/350x150',
    alt: 'My CDN placeholder',
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

export const WithAnImage = () => <img src="https://place-hold.it/350x150" alt="My CDN placeholder" />;
```
```md renderer="react" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta title="img" component={MyComponent} />

<Story 
  name="WithAnImage">
  <img src="https://place-hold.it/350x150" alt="My CDN placeholder" />}
</Story>
```
```ts filename=" MyComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { Meta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
} as Meta;

export const WithAnImage = () => <img src="https://place-hold.it/350x150" alt="My CDN placeholder" />;
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

export const WithAnImage = () =>  ({
  Component: MyComponent,
  props: {
    src: 'https://place-hold.it/350x150',
    alt: 'My CDN placeholder',
  },
});
```
```md renderer="svelte" language="mdx"
{/* MyComponent.stories.js */}

import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.svelte';

<Meta title="img" component={MyComponent} />

<Story 
  name="WithAnImage">
  {() => {
    return {
      Component: MyComponent,
      props: {
        src: 'https://place-hold.it/350x150',
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
  <MyComponent src="https://place-hold.it/350x150" alt="My CDN placeholder" />
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

export const WithAnImage = () => ({
  template: '<img src="https://place-hold.it/350x150" alt="My CDN placeholder"/>',
});
```
```md renderer="vue" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.vue';

<Meta title="img" component={MyComponent}/>

<Story 
  name="withAnImage">
  {() => {
    return {
      template: `<img src="https://place-hold.it/350x150" alt="My CDN placeholder"/>`,
    };
  }}
</Story>
```
