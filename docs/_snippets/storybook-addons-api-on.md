```js filename="/my-addon/manager.js" renderer="common" language="js"
addons.register('my-organisation/my-addon', (api) => {
  api.on('some-event', (eventData) => console.log(eventData));
});
```
