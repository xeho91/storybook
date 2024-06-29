import ComponentWithSlot from './views/ComponentWithSlot.svelte';
import BorderDecoratorBlue from './views/BorderDecoratorBlue.svelte';

export default {
  component: ComponentWithSlot,
};

export const NoChildren = {};
export const PlainString = {
  args: {
    children: 'This is a plain string',
  },
};
export const HTMLString = {
  args: {
    children: `
      <p>
        This is an HTML string with <i>italic</i>,
        <b>
          bold,
        </b>
        <code>
          some code
        </code>
      </p>
      <p>... and a second paragraph</p>`,
  },
};
export const Number = {
  args: {
    children: 1,
  },
};
export const WithDecorator = {
  decorators: [() => BorderDecoratorBlue],
  args: {
    children: `This is a plain string with a decorator`,
  },
};
