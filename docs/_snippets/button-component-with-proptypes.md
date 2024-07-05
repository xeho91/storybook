```ts filename="my-button.component.ts" renderer="angular" language="ts"
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
    <button type="button" [disabled]="isDisabled">
      {{ content }}
    </button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /**
   * Checks if the button should be disabled
   */
  @Input()
  isDisabled: boolean;

  /**
  The display content of the button
  */
  @Input()
  content: string;
}
```
```js filename="Button.js|jsx" renderer="react" language="js"
import React from 'react';

import PropTypes from 'prop-types';

export function Button({ isDisabled, content }) {
  return (
    <button type="button" disabled={isDisabled}>
      {content}
    </button>
  );
}

Button.propTypes = {
  /**
   Checks if the button should be disabled
  */
  isDisabled: PropTypes.bool.isRequired,
  /**
  The display content of the button
  */
  content: PropTypes.string.isRequired,
};
```
```ts filename="Button.ts|tsx" renderer="react" language="ts"
import React from 'react';

export interface ButtonProps {
  /**
   * Checks if the button should be disabled
   */
  isDisabled: boolean;
  /**
  The display content of the button
  */
  content: string;
}

export const Button: React.FC<ButtonProps> = ({ isDisabled = false, content = '' }) => {
  return (
    <button type="button" disabled={isDisabled}>
      {content}
    </button>
  );
};
```
```html filename="Button.svelte" renderer="svelte" language="js"
<script>
  /**
   * A Button Component
   * @component
   */

  /**
   * Disable the button
   * @required
   */
  export let disabled = false;

  /**
   * Button content
   * @required
   */
  export let content = '';
<script/>

<button type="button" {disabled}>{content}</button>
```
```html filename="Button.vue" renderer="vue" language="js" tabTitle="2"
<template>
  <button type="button" :disabled="isDisabled">{{ content }}</button>
</template>

<script>
  export default {
    name: 'button',
    props: {
      /**
       * Checks if the button should be disabled
       */
      isDisabled: {
        type: Boolean,
        default: false,
        required: true,
      },
      /**
       * The display content of the button
       */
      content: {
        type: String,
        default: 'One',
        required: true,
      },
    },
  };
</script>
```
```html filename=" Button.vue" renderer="vue" language="js" tabTitle="3"
<template>
  <button type="button" :disabled="isDisabled">{{ content }}</button>
</template>

<script>
  import { reactive } from 'vue';

  export default {
    name: 'button',
    props: {
      /**
       * Checks if the button should be disabled
       */
      isDisabled: {
        type: Boolean,
        default: false,
        required: true,
      },
      /**
       * The display content of the button
       */
      content: {
        type: String,
        default: 'One',
        required: true,
      },
    },
    setup(props) {
      props = reactive(props);
      return {
        /**
         * What will be returned here will available to the component
         * Functions referenced here will act like methods
         */
      };
      //
    },
  };
</script>
```
