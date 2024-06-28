```mdx renderer="common" language="mdx"
{/* Checkbox.mdx */}

import { Canvas, Meta } from '@storybook/blocks';

import * as CheckboxStories from './Checkbox.stories';

<Meta of={CheckboxStories} />

# Checkbox

A checkbox is a square box that can be activated or deactivated when ticked. 

Use checkboxes to select one or more options from a list of choices.

<Canvas of={CheckboxStories.Unchecked} />
````

```md renderer="html" language="mdx"
{/* Checkbox.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

export const Checkbox = (args) => `<label>
  ${args?.label}
  <input
    type="checkbox"
    ${args?.checked ? 'checked' : ''}
    ${args?.appearance ? `class="${args.appearance}"` : ''}
  />
</label>`;

<Meta title="MDX/Checkbox" component={Checkbox} />

# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our
Markdown documentation.

<Canvas>
  <Story 
    name="Unchecked"
    args={{ 
      label: 'Unchecked',
    }}
    render={Checkbox} />
  <Story 
    name="Checked"
    args={{ 
      label: 'Unchecked', 
      checked: true,
    }}
    render={Checkbox} />
  <Story 
    name="Secondary" 
    args={{
      label: 'Secondary', 
      checked: true, 
      appearance: 'secondary',
    }}
    render={Checkbox} />
</Canvas>
```

```md renderer="react" language="mdx"
{/* Checkbox.mdx */}

import { Canvas, Meta, Story } from '@storybook/blocks';
import * as CheckboxStories from './Checkbox.stories';

<Meta of={CheckboxStories} />

# Checkbox

With `MDX` we can compose Markdown documentation with `Checkbox` stories and interactive controls.

<Canvas>
  <Story of={CheckboxStories.Unchecked} />
</Canvas>
```

