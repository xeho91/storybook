```ts filename="vue/src/client/preview/globals.ts" renderer="common" language="ts"
import global from 'global';

const { window: globalWindow } = global;

globalWindow.STORYBOOK_ENV = 'vue';
```
