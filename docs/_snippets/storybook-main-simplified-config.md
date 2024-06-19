```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  webpackFinal: async (config) => {
    config.plugins.push(...);
    return config;
  },
}
```
