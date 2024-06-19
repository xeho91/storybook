```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="2-library"
import Vue from 'vue';

import Vuex from 'vuex';

//👇 Storybook Vue app being extended and registering the library
Vue.use(Vuex);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="3-library"
import { app } from '@storybook/vue3';

import Vuex from 'vuex';

//👇 Storybook Vue app being extended and registering the library
app.use(Vuex);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
