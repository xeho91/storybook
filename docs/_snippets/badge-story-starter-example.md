```md renderer="angular" language="mdx"
{/* Badge.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { Badge } from './badge.component';
import { Icon } from './icon.component';

<Meta title="MDX/Badge" component={Badge} />

# Badge

Let's define a story for our `Badge` component:

<Story name="positive">
  {{
    template:`<Badge status="positive">Positive</Badge>`,
  }}
</Story>

We can drop it in a `Canvas` to get a code snippet:

<Canvas>
  <Story name="negative">
    {{
      template: `<Badge status="negative">Negative</Badge>`,
    }}
  </Story>
</Canvas>

We can even preview multiple stories in a block. This
gets rendered as a group, but defines individual stories
with unique URLs and isolated snapshot tests.

<Canvas>
  <Story name="warning">
    {{
      template: `<Badge status="warning">Warning</Badge>`,
    }}
  </Story>
  <Story name="neutral">
    {{
      template: `<Badge status="neutral">Neutral</Badge>`,
    }}
  </Story>
  <Story name="error">
    {{
      template: `<Badge status="error">Error</Badge>`,
    }}
  </Story>
  <Story 
    name="with icon"
    decorators={[
      moduleMetadata({
        declarations: [Badge, Icon],
        imports: [CommonModule],
      })
    ]}>
    {{
      template: `
        <Badge status="warning">
          <Icon icon="check" inline></Icon>
          with icon
        </Badge>
      `,
    }}
  </Story>
</Canvas>
```

```md renderer="react" language="mdx"
{/* Badge.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Badge } from './Badge';
import { Icon } from './Icon';

<Meta title="MDX/Badge" component={Badge} />

# Badge

Let's define a story for our `Badge` component:

<Story name="positive">
  <Badge status="positive">Positive</Badge>
</Story>

We can drop it in a `Canvas` to get a code snippet:

<Canvas>
  <Story name="negative">
    <Badge status="negative">Negative</Badge>
  </Story>
</Canvas>

We can even preview multiple stories in a block. This
gets rendered as a group, but defines individual stories
with unique URLs and isolated snapshot tests.

<Canvas>
  <Story name="warning">
    <Badge status="warning">Warning</Badge>
  </Story>
  <Story name="neutral">
    <Badge status="neutral">Neutral</Badge>
  </Story>
  <Story name="error">
    <Badge status="error">Error</Badge>
  </Story>
  <Story name="with icon">
    <Badge status="warning">
      <Icon icon="check" inline />
      with icon
    </Badge>
  </Story>
</Canvas>
```

```md renderer="vue" language="mdx"
{/* Badge.stories.mdx */}

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import Badge from './Badge.vue';
import Icon from './Icon.vue';

<Meta title="MDX/Badge" component={Badge} />

# Badge

Let's define a story for our `Badge` component:

<Story name="positive">
  {() => {
    return {
      components: { Badge },
      template: `<Badge status="positive">Positive</Badge>`,
    };
  }}
</Story>

We can drop it in a `Canvas` to get a code snippet:

<Canvas>
  <Story name="negative">
    {() => {
      return {
        components: { Badge },
        template: `<Badge status="negative">Negative</Badge>`,
      };
    }}
  </Story>
</Canvas>

We can even preview multiple stories in a block. This
gets rendered as a group, but defines individual stories
with unique URLs and isolated snapshot tests.

<Canvas>
  <Story name="warning">
    {() => {
      return {
        components: { Badge },
        template: `<Badge status="warning">Warning</Badge>`,
      };
    }}
  </Story>
  <Story name="neutral">
    {() => {
      return {
        components: { Badge },
        template: `<Badge status="neutral">Neutral</Badge>`,
      };
    }}
  </Story>
  <Story name="error">
    {() => {
      return {
        components: { Badge },
        template: `<Badge status="error">Error</Badge>`,
      };
    }}
  </Story>
  <Story name="with icon">
    {() => {
      return {
        components: { Badge, Icon },
        template: `
          <Badge status="warning">
            <Icon icon="check" inline />
             with icon
          </Badge>`,
      };
    }}
  </Story>
</Canvas>
```
