```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="2-mixin"
import Vue from 'vue';

//👇 Storybook Vue app being extended and registering the mixin
Vue.mixin({
  // Your mixin code
});

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="3-mixin"
import { app } from '@storybook/vue3';

//👇 Storybook Vue app being extended and registering the mixin
app.mixin({
  // Your mixin code
});

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
