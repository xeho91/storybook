```js filename="/my-addon/manager.js" renderer="common" language="js"
addons.register('my-organisation/my-addon', (api) => {
  api.setQueryParams({
    abc: 'this is abc',
    bbc: 'this is bbc',
  });
});
```
