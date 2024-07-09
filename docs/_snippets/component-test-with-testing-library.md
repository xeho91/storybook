```ts filename="form.component.spec.ts" renderer="angular" language="ts"
import { render, screen, fireEvent } from '@testing-library/angular';

import { FormComponent } from './LoginForm.component';

import { InvalidForm } from './Form.stories'; //👈 Our stories imported here.

test('Checks if the form is valid ', async () => {
  await render(FormComponent, {
    componentProperties: InvalidForm.args,
  });

  fireEvent.click(screen.getByText('Submit'));

  const isFormValid = screen.getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```
```js filename="Form.test.js" renderer="preact" language="js"
import '@testing-library/jest-dom/extend-expect';

import { h } from 'preact';

import { render, fireEvent } from '@testing-library/preact';

import { InvalidForm } from './LoginForm.stories'; //👈 Our stories imported here.

it('Checks if the form is valid', () => {
  const { getByTestId, getByText } = render(<InvalidForm {...InvalidForm.args} />);

  fireEvent.click(getByText('Submit'));

  const isFormValid = getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```
```js filename="Form.test.js" renderer="react" language="js"
import { render, fireEvent } from '@testing-library/react';

import { InvalidForm } from './LoginForm.stories'; //👈 Our stories imported here.

it('Checks if the form is valid', () => {
  const { getByTestId, getByText } = render(<InvalidForm {...InvalidForm.args} />);

  fireEvent.click(getByText('Submit'));

  const isFormValid = getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```
```js filename="Form.test.js" renderer="svelte" language="js"
import { render, fireEvent } from '@testing-library/svelte';

import LoginForm from './LoginForm.svelte';

import { InvalidForm } from './LoginForm.stories'; //👈 Our stories imported here.

it('Checks if the form is valid', async () => {
  const { getByTestId, getByText } = render(LoginForm, {
    props: InvalidForm.args,
  });

  await fireEvent.click(getByText('Submit'));

  const isFormValid = getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```
```js filename="tests/unit/Form.spec.js" renderer="vue" language="js"
import { render, fireEvent } from '@testing-library/vue';

import LoginForm from '../../src/components/LoginForm.vue';

import { InvalidForm } from './LoginForm.stories'; //👈 Our stories imported here.

test('Checks if the form is valid', () => {
  const { getByTestId, getByText } = render(LoginForm, {
    props: {
      ...InvalidForm.args,
    },
  });

  await fireEvent.click(getByText('Submit'));

  const isFormValid = getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```
