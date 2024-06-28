```js filename=".storybook/preview.js" renderer="vue" language="js" tabTitle="mixin-2"
import Vue from 'vue';

//👇 Storybook Vue app being extended and registering the mixin
Vue.mixin({
  // Your mixin code
});

export default {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="margin: 3em;"><story /></div>',
    }),
  ],
};
```

```ts filename=".storybook/preview.ts" renderer="vue" language="ts" tabTitle="mixin-2"
import Vue from 'vue';

import { Preview } from '@storybook/vue';

//👇 Storybook Vue app being extended and registering the mixin
Vue.mixin({
  // Your mixin code
});

const preview: Preview = {
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="margin: 3em;"><story /></div>',
    }),
  ],
};

export default preview;
```

