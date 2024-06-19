```ts filename="App.stories.ts" renderer="angular" language="ts"
import { Meta, Story } from '@storybook/angular';

import { AppComponent } from './app.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: AppComponent,
} as Meta;

const Template: Story = () => ({
  props: {},
});

export const Success = Template.bind({});
Success.parameters = {
  fetch: {
    json: {
      JavaScript: 3390991,
      'C++': 44974,
      TypeScript: 15530,
      CoffeeScript: 12253,
      Python: 9383,
      C: 5341,
      Shell: 5115,
      HTML: 3420,
      CSS: 3171,
      Makefile: 189,
    },
  },
};
```
```js filename="App.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import App from './App';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
};

const Template = (ags) => <App />;

export const Success = Template.bind({});
Success.parameters = {
  fetch: {
    json: {
      JavaScript: 3390991,
      'C++': 44974,
      TypeScript: 15530,
      CoffeeScript: 12253,
      Python: 9383,
      C: 5341,
      Shell: 5115,
      HTML: 3420,
      CSS: 3171,
      Makefile: 189,
    }
  }
};
```
```ts filename="App.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from './App';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Success = Template.bind({});
Success.parameters = {
  fetch: {
    json: {
      JavaScript: 3390991,
      'C++': 44974,
      TypeScript: 15530,
      CoffeeScript: 12253,
      Python: 9383,
      C: 5341,
      Shell: 5115,
      HTML: 3420,
      CSS: 3171,
      Makefile: 189,
    }
  }
};
```
```js filename="App.stories.js" renderer="vue" language="js"
import App from './App.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
};


const Template = () => ({
  components: { App },
  template: '<App />',
});

export const Success = Template.bind({});
Success.parameters = {
  fetch: {
    json: {
      JavaScript: 3390991,
      "C++": 44974,
      TypeScript: 15530,
      CoffeeScript: 12253,
      Python: 9383,
      C: 5341,
      Shell: 5115,
      HTML: 3420,
      CSS: 3171,
      Makefile: 189
    }
  }
};
```
