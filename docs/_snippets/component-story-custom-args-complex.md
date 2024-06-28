```md renderer="angular" language="mdx"
{/* YourComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { YourComponent } from './your-component.component';

<Meta title="YourComponent" component={YourComponent}/>

{/*👇 A function to apply some computations */}

export const someFunction = (valuePropertyA, valuePropertyB) => {

  // Makes some computations and returns something

};

export const Template = (args) => {
  const { propertyA, propertyB } = args;

  // 👇 Assigns the function result to a variable 
  const someFunctionResult = someFunction(propertyA, propertyB);
  return {
    props: {
      ...args,
      someProperty: someFunctionResult,
    },
  };
};

<Canvas>
  <Story
    name="ExampleStory"
    argTypes={{
      propertyA: {
        options: [
          'Item One',
          'Item Two',
          'Item Three',
        ],
      },
      propertyB: {
        options: [
          'Another Item One',
          'Another Item Two',
          'Another Item Three',
        ],
      },
    }}
    args={{
      propertyA: 'Item One',
      propertyB: 'Another Item One',
    }}>
    {Template.bind({})}
  </Story>
</Canvas
```
```ts filename="YourComponent.stories.ts" renderer="angular" language="ts"
import { Meta, Story} from '@storybook/angular';

import { YourComponent } from './your-component.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  //👇 Creates specific argTypes with options
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, // automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
  },
} as Meta;

//👇 Some function to demonstrate the behavior
const someFunction = (valuePropertyA: String, valuePropertyB: String) => {
  // Makes some computations and returns something
};

const Template: Story = (args) => {
  const { propertyA, propertyB } = args;
  
  //👇 Assigns the function result to a variable
  const someFunctionResult = someFunction(propertyA, propertyB);
  
  return {
    props: {
      ...args,
      someProperty: someFunctionResult,
    },
  };
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  propertyA: 'Item One',
  propertyB: 'Another Item One',
};
```
```js filename="YourComponent.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { YourComponent } from './your-component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  //👇 Creates specific argTypes with options
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
  },
};

//👇 Some function to demonstrate the behavior
const someFunction = (valuePropertyA, valuePropertyB) => {
  // Makes some computations and returns something
};

const Template = ({ propertyA, propertyB, ...rest }) => {
  //👇 Assigns the function result to a variable
  const someFunctionResult = someFunction(propertyA, propertyB);

  return <YourComponent someProperty={someFunctionResult} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  propertyA: 'Item One',
  propertyB: 'Another Item One',
};
```
```md renderer="react" language="mdx"
{/* YourComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { YourComponent } from './your-component';

<Meta title="YourComponent" component={YourComponent} />

{/* 👇 A function to apply some computations */}

export const someFunction = (valuePropertyA, valuePropertyB) => {
  // Makes some computations and returns something
};

export const Template = ({propertyA,propertyB,...rest})=>{
  //👇 Assigns the function result to a variable

const someFunctionResult = someFunction(propertyA, propertyB);
  return <YourComponent someProperty={someFunctionResult} {...rest} />;
}

<Canvas>
  <Story
    name="ExampleStory"
    argTypes={{
      propertyA: {
        options: [
          'Item One',
          'Item Two',
          'Item Three'
        ],
      },
      propertyB: {
        options: [
          'Another Item One',
          'Another Item Two',
          'Another Item Three'
        ],
      },
    }}
    args={{
      propertyA: 'Item One',
      propertyB: 'Another Item One',
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
```ts filename="YourComponent.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { YourComponent } from './your-component';

//👇 Some function to demonstrate the behavior
const someFunction = (valuePropertyA, valuePropertyB) => {
  // Makes some computations and returns something
};

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  //👇 Creates specific argTypes with options
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
  },
} as ComponentMeta<typeof YourComponent>;

const Template: ComponentStory<typeof YourComponent> = ({ propertyA, propertyB, ...rest }) => {
  //👇 Assigns the result from the function to a variable
  const someFunctionResult = someFunction(propertyA, propertyB);

  return <YourComponent someProperty={someFunctionResult} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  propertyA: 'Item One',
  propertyB: 'Another Item One',
};
```
```js filename="YourComponent.stories.js" renderer="svelte" language="js"
import YourComponent from './YourComponent.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  //👇 Creates specific argTypes
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
  },
};

//👇 Some function to demonstrate the behavior
const someFunction = (valuePropertyA, valuePropertyB) => {
  // Makes some computations and returns something
};

const Template = (args) => {
  const { propertyA, propertyB } = args;
  
  //👇 Assigns the function result to a variable
  const someFunctionResult = someFunction(propertyA, propertyB);
  return {
    Component: YourComponent,
    props: {
      ...args,
      someProperty: someFunctionResult,
    },
  };
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  propertyA: 'Item One',
  propertyB: 'Another Item One',
};
```
```html renderer="svelte" language="ts" tabTitle="native-format"
{/* YourComponent.stories.svelte */}

<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  
  import YourComponent from './YourComponent.svelte';

  //👇 Some function to demonstrate the behavior
  function someFunction(valuePropertyA, valuePropertyB) {
    // Makes some computations and returns something
  }
</script>

{/*👇 Creates specific argTypes and automatically infers them when 'options' is defined */}

<Meta
  title="YourComponent"
  component={YourComponent}
  argTypes={{
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, 
    },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
  }}
/>

<Template let:args>
  <YourComponent {...args} someProperty={someFunction(args.propertyA, args.propertyB)} />
</Template>
```
```js filename="YourComponent.stories.js" renderer="vue" language="js" tabTitle="3"
import YourComponent from './YourComponent.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'YourComponent',
  component: YourComponent,
  //👇 Creates specific argTypes with options
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, // automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
  },
};

//👇 Some function to demonstrate the behavior
const someFunction = (valuePropertyA, valuePropertyB) => {
  // Makes some computations and returns something
};

const Template = (args) => {
  //👇 Assigns the function result to a variable
  const functionResult = someFunction(args.propertyA, args.propertyB);
  return {
    components: { YourComponent },
    setup() {
      //👇 The args will now be passed down to the template
      return {
        args: {
          ...args,
          //👇 Replaces arg variable with the override (without the need of mutation)
          someProperty: functionResult,
        },
      };
    },
    template:  '<YourComponent :propertyA="propertyA" :propertyB="propertyB" :someProperty="someProperty"/>',
  };
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  propertyA: 'Item One',
  propertyB: 'Another Item One',
};
```
```md renderer="vue" language="mdx" tabTitle="mdx-3"
{/* YourComponent.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import YourComponent from './YourComponent.vue';

<Meta title="YourComponent" component={YourComponent}/>

{/* 👇 A function to apply some computations */}

export const someFunction = (valuePropertyA, valuePropertyB) => {

  // Makes some computations and returns something 

};

export const Template = (args) => {
  //👇 Assigns the function result to a variable
  const functionResult = someFunction(args.propertyA, args.propertyB);
  return {
    components: { YourComponent },
    setup() {
      //👇 The args will now be passed down to the template
      return {
        args: {
          ...args,
          //👇 Replaces arg variable with the override (without the need of mutation)
          someProperty: functionResult,
        },
      };
    },
    template:  '<YourComponent :propertyA="propertyA" :propertyB="propertyB" :someProperty="someProperty"/>',
  };
};

<Canvas>
  <Story
    name="ExampleStory"
    argTypes={{
      propertyA: {
        options: [
          'Item One',
          'Item Two',
          'Item Three'
        ],
      },
      propertyB: {
        options: [
          'Another Item One',
          'Another Item Two',
          'Another Item Three'
        ],
      },
    }}
    args={{
      propertyA: 'Item One',
      propertyB: 'Another Item One',
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```
