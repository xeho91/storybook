```md renderer="angular" language="mdx"
{/* Checkbox.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Checkbox } from './checkbox.component';

<Meta title="MDX/Checkbox" component={Checkbox} />

<Canvas>
  <Story 
    name="all checkboxes">
    {{
      template: `
        <form>
          <Checkbox id="Unchecked" label="Unchecked" />
          <Checkbox id="Checked" label="Checked" checked />
          <Checkbox appearance="secondary" id="second" label="Secondary" checked />
        </form>    
      `,
    }}
  </Story>
</Canvas>
```
```md renderer="react" language="mdx"
{/* Checkbox.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Checkbox } from './Checkbox';

<Meta title="MDX/Checkbox" component={Checkbox} />

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our Markdown documentation.

<Canvas>
  <Story name="all checkboxes">
    <form>
      <Checkbox id="Unchecked" label="Unchecked" />
      <Checkbox id="Checked" label="Checked" checked />
      <Checkbox appearance="secondary" id="second" label="Secondary" checked />
    </form>
  </Story>
</Canvas>
```

```md renderer="vue" language="mdx"
{/* Checkbox.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Checkbox from './Checkbox.vue';

<Meta title="MDX/Checkbox" component={Checkbox} />

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our Markdown documentation.

<Canvas>
  <Story name="all checkboxes">
    {() => {
      return {
        components: { Checkbox },
        template: `
          <form>
            <Checkbox id="Unchecked" label="Unchecked" />
            <Checkbox id="Checked" label="Checked" checked />
            <Checkbox appearance="secondary" id="second" label="Secondary" checked />
          </form>`,
      };
    }}
  </Story>
</Canvas>
```
