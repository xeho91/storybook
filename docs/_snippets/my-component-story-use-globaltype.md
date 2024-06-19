```md renderer="angular" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent.component';

<Meta title="MyComponent" component={MyComponent} />

export const getCaptionForLocale = (locale) => {
  switch(locale) {
    case 'es': return 'Hola!';
    case 'fr': return 'Bonjour!';
    case 'kr': return '안녕하세요!';
    case 'zh': return '你好!';
    default:
      return 'Hello!';
  }
};

<Story name="StoryWithLocale">
  {(args, { globals: { locale } }) => {
    const caption = getCaptionForLocale(locale);
    return {
      template: `<p>${caption}</p>`,
    };
  }}
</Story>
```
```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
import { Meta } from '@storybook/angular';

import { MyComponent } from './MyComponent.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
} as Meta;

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'es':
      return 'Hola!';
    case 'fr':
      return 'Bonjour!';
    case 'kr':
      return '안녕하세요!';
    case 'zh':
      return '你好!';
    default:
      return 'Hello!';
  }
};

export const StoryWithLocale = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return {
    template: `<p>${caption}</p>`,
  };
};
```
```js filename="MyComponent.stories.js|jsx|ts|tsx" renderer="react" language="js"
import React from 'react';

import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'es':
      return 'Hola!';
    case 'fr':
      return 'Bonjour!';
    case 'kr':
      return '안녕하세요!';
    case 'zh':
      return '你好!';
    default:
      return 'Hello!';
  }
};

export const StoryWithLocale = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <>{caption}</>;
};
```
```md renderer="react" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { MyComponent } from './MyComponent';

<Meta title="MyComponent" component={MyComponent} />

export const getCaptionForLocale = (locale) => {
  switch(locale) {
    case 'es': return 'Hola!';
    case 'fr': return 'Bonjour!';
    case 'kr': return '안녕하세요!';
    case 'zh': return '你好!';
    default:
      return 'Hello!';
  }
};

<Story name="StoryWithLocale">
  {(args, { globals: { locale } }) => {
    const caption = getCaptionForLocale(locale);
    return <>{caption}</>;
  }}
</Story>
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
import MyComponent from './MyComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'es':
      return 'Hola!';
    case 'fr':
      return 'Bonjour!';
    case 'kr':
      return '안녕하세요!';
    case 'zh':
      return '你好!';
    default:
      return 'Hello!';
  }
};

export const StoryWithLocale = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return {
    component: MyComponent,
    props: {
      locale: caption,
    },
  };
};
```
```md renderer="svelte" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.svelte';

<Meta title="MyComponent" component={MyComponent} />

export const getCaptionForLocale = (locale) => {
  switch(locale) {
    case 'es': return 'Hola!';
    case 'fr': return 'Bonjour!';
    case 'kr': return '안녕하세요!';
    case 'zh': return '你好!';
    default:
      return 'Hello!';
  }
};

<Story name="StoryWithLocale">
  {(args, { globals: { locale } }) => {
    const caption = getCaptionForLocale(locale);
    return {
      component: MyComponent,
      props: {
        locale: caption,
      },
    };
  }}
</Story>
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
import MyComponent from './MyComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MyComponent',
  component: MyComponent,
};

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'es':
      return 'Hola!';
    case 'fr':
      return 'Bonjour!';
    case 'kr':
      return '안녕하세요!';
    case 'zh':
      return '你好!';
    default:
      return 'Hello!';
  }
};

export const StoryWithLocale = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return {
    template: `<p>${caption}</p>`,
  };
};
```
```md renderer="vue" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import MyComponent from './MyComponent.vue';

<Meta title="MyComponent" component={MyComponent} />

export const getCaptionForLocale = (locale) => {
  switch(locale) {
    case 'es': return 'Hola!';
    case 'fr': return 'Bonjour!';
    case 'kr': return '안녕하세요!';
    case 'zh': return '你好!';
    default:
      return 'Hello!';
  }
};

<Story name="StoryWithLocale">
  {(args, { globals: { locale } }) => {
    const caption = getCaptionForLocale(locale);
    return {
      template: `<p>${caption}</p>`,
    };
  }}
</Story>
```
```js filename="MyComponent.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'es':
      return 'Hola!';
    case 'fr':
      return 'Bonjour!';
    case 'kr':
      return '안녕하세요!';
    case 'zh':
      return '你好!';
    default:
      return 'Hello!';
  }
};

export const StoryWithLocale = ({ propA, propB }, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return html`<p>${caption}</p>`;
};
```
