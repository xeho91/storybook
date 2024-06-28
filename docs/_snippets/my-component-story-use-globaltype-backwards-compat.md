```ts filename="MyComponent.stories.ts" renderer="angular" language="ts"
export const StoryWithLocale = ({ globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return {
    template: `<p>${caption}</p>`,
  };
};
```
```js filename="MyComponent.stories.js|jsx|ts|tsx" renderer="react" language="js"
export const StoryWithLocale = ({ globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <>{caption}</>;
};
```
```js filename="MyComponent.stories.js" renderer="svelte" language="js"
export const StoryWithLocale = ({ globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return {
    component: MyComponent,
    props: {
      locale: caption,
    },
  };
};
```
```js filename="MyComponent.stories.js" renderer="vue" language="js"
export const StoryWithLocale = ({ globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return {
    template: `<p>${caption}</p>`,
  };
};
```
```js filename="MyComponent.stories.js" renderer="web-components" language="js"
import { html } from 'lit-html';

export const StoryWithLocale = ({ globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return html`<p>${caption}</p>`;
};
```
