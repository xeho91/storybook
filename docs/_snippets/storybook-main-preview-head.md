```js filename=".storybook/main.js" renderer="common" language="js"
module.exports = {
  previewHead: (head) => (`
    ${head}
    <style>
      #main {
        background-color: yellow;
      }
    </style>
  `);
};
```
