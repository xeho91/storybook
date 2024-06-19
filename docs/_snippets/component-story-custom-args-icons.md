```ts filename="Icon.stories.ts" renderer="angular" language="ts"
import { Story, Meta } from '@storybook/angular/types-6-0';

import Icon from './icon.component';

import { IconA, IconB, IconC, IconD, IconE } from './icons';

// Maps the icons to a JSON serializable object to be safely used with the argTypes
const iconMap = { IconA, IconB, IconC, IconD, IconE };

export default {
  title: 'My Story with Icons',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(iconMap),
    },
  },
} as Meta;

const Template: Story<Icon> = (args) => {
  // retrieves the appropriate icon passes it as a component prop
  const { icon } = args;
  const selectedIcon = iconMap[icon];
  return {
    component: Icon,
    props: {
      ...args,
      icon: selectedIcon,
    },
  };
};
```

```js filename="YourComponent.stories.js" renderer="vue" language="js" tabTitle="2"
import YourComponent from './YourComponent.vue';

import { IconA, IconB, IconC, IconD, IconE } from './icons';

//👇 Maps the icons to a JSON serializable object to be safely used with the argTypes
const iconMap = { IconA, IconB, IconC, IconD, IconE };

export default {
  title: 'My Story with Icons',
  component: YourComponent,
  //👇 Creates specific argTypes with options
  argTypes: {
    icon: {
      options: Object.keys(iconMap),
    },
  },
};

const Template = (args, { argTypes }) => {
  //👇 Retrieves the appropriate icon passes it as a component prop
  const oldArgs = args;
  const { icon } = oldArgs;

  //👇 Sets the new icon
  const selectedIcon = iconMap[icon];

  //👇 Updates the args with the new icon
  args.icon = selectedIcon;

  return {
    props: Object.keys(argTypes),
    components: { YourComponent },
    template: '<YourComponent v-bind="$props"/>',
  };
};
```

```js filename="YourComponent.stories.js" renderer="vue" language="js" tabTitle="3"
import YourComponent from './YourComponent.vue';

import { IconA, IconB, IconC, IconD, IconE } from './icons';

//👇 Maps the icons to a JSON serializable object to be safely used with the argTypes
const iconMap = { IconA, IconB, IconC, IconD, IconE };

export default {
  title: 'My Story with Icons',
  component: YourComponent,
  //👇 Creates specific argTypes with options
  argTypes: {
    icon: {
      options: Object.keys(iconMap),
    },
  },
};

const Template = (args) => {
  return {
    components: { YourComponent },
    setup() {
      //👇 The args will now be passed down to the template
      return {
        args: {
          ...args,
          //👇 Replaces the local variable with the override (without mutating it)
          icon: iconMap[args.icon],
        },
      };
    },
    template: '<YourComponent v-bind="args" />',
  };
};
```

