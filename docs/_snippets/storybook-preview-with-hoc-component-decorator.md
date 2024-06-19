```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="2-component"
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare as fasPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasPlusSquare);

//👇 Storybook Vue app being extended and registering the component
Vue.component('font-awesome-icon', FontAwesomeIcon);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="3-component"
import { app } from '@storybook/vue3';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare as fasPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasPlusSquare);

//👇 Storybook Vue app being extended and registering the component
app.component('font-awesome-icon', FontAwesomeIcon);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
```
