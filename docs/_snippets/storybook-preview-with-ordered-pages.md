```js filename=".storybook/preview.js" renderer="common" language="js"
export const parameters = {
  options: {
    storySort: {
      order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
    },
  },
};
```
