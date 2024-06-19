```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  stories: [],
  addons: [],
  babel: async (options) => ({
    ...options,
    // any extra options you want to set
  }),
};
```
