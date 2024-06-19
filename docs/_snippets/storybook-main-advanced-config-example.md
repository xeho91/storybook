```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  managerWebpack: async (config, options) => {
    // update config here
    return config;
  },
  managerBabel: async (config, options) => {
    // update config here
    return config;
  },
  webpackFinal: async (config, options) => {
    // change webpack config
    return config;
  },
  babel: async (config, options) => {
    return config;
  },
};
```
