```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  // 👇 Storybook will load all existing stories within the MyStories folder
  stories: ['../packages/MyStories'],
  addons: ['@storybook/addon-essentials'],
};
```
