```js filename=".storybook/main.js|ts" renderer="common" language="js"
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Other Storybook addons
    'storybook-addon-designs', // 👈 Addon is registered here
  ],
};
```
