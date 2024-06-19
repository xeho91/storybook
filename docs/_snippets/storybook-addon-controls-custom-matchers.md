```js filename=".storybook/preview.js" renderer="common" language="js"
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
```
