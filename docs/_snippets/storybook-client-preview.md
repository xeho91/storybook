```ts filename="your-framework/src/client/preview/index.ts" renderer="common" language="ts"
import { start } from '@storybook/core';

import './globals';

import render from './render';

const api = start(render);

// the boilerplate code
```
