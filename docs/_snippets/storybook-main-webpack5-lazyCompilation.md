```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
      },
    },
  },
};
```
