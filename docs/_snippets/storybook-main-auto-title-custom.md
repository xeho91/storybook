```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  stories: [{ directory: '../src', titlePrefix: 'Custom' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: 'webpack5',
  },
};
```
