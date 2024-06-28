```js filename="/my-addon/src/preset.js" renderer="common" language="js"
function managerEntries(entry = []) {
  return [...entry, require.resolve("./register")]; //👈 Addon implementation
}

module.exports = { managerEntries }
```
