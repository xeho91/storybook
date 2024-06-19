```js filename=".storybook/main.js" renderer="common" language="js"
function findStories() {
  // your custom logic returns a list of files
}

module.exports = {
  stories: async (list) => [...list, ...findStories()],
  addons: ['@storybook/addon-essentials'],
};
```

