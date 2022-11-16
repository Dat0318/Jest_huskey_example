// doc: https://stackoverflow.com/questions/71336895/react-jest-login-form-test
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Login, { Props } from '../index';
import axios from 'axios';
import mocks from '../mock';

function renderLoginForm(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    onPasswordChange() {
      return;
    },
    onRememberChange() {
      return;
    },
    onUsernameChange() {
      return;
    },
    onSubmit() {
      return;
    },
    shouldRemember: true,
  };
  return render(<Login {...defaultProps} {...props} />);
}

describe('<Login />', () => {
  // +++++++++++++++++++++++++++++++++++ FOR TEST COMPONENT +++++++++++++++++++++++++++++++
  test('should display a blank login form, with remember me checked by default', async () => {
    const { findByTestId } = renderLoginForm();
    const loginForm = await findByTestId('login-form');

    expect(loginForm).toHaveFormValues({
      username: '',
      password: '',
      remember: false,
    });
  });

  test('should allow entering a username', async () => {
    const onUsernameChange = jest.fn();
    const { findByTestId, debug } = renderLoginForm({ onUsernameChange });
    const username = await findByTestId('username');

    fireEvent.change(username, { target: { value: 'test100@gmail.com' } });
    expect(onUsernameChange).toHaveBeenCalledWith('test100@gmail.com');
  });

  test('should allow entering a password', async () => {
    const onPasswordChange = jest.fn();
    const { findByTestId } = renderLoginForm({ onPasswordChange });
    const password = await findByTestId('password');

    fireEvent.change(password, { target: { value: '123456' } });
    expect(onPasswordChange).toHaveBeenCalledWith('123456');
  });

  test('should allow toggling remember me', async () => {
    const onRememberChange = jest.fn();
    const { findByTestId } = renderLoginForm({
      onRememberChange,
      shouldRemember: false,
    });
    const remember = await findByTestId('remember');

    fireEvent.click(remember);
    expect(onRememberChange).toHaveBeenCalledWith(true);
    fireEvent.click(remember);
    expect(onRememberChange).toHaveBeenCalledWith(false);
  });

  // +++++++++++++++++++++++++++++++++++ END FOR TEST COMPONENT +++++++++++++++++++++++++++++++

  // +++++++++++++++++++++++++++++++++++ FOR EVENT HANDING +++++++++++++++++++++++++++++++++++
  test('should submit the form with username, password, and remember', async () => {
    const onSubmit = jest.fn();
    const { findByTestId, findByText } = renderLoginForm({
      onSubmit,
      shouldRemember: false,
    });

    const username = await findByTestId('username');
    const password = await findByTestId('password');
    const remember = await findByTestId('remember');
    const submit = await findByTestId('submit');

    fireEvent.change(username, { target: { value: 'test1@gmail.com' } });
    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.click(remember);
    fireEvent.click(submit);

    const loginForm = await findByTestId('login-form');
    const label = await findByText('Password');
    // Toastify__toast-container Toastify__toast-container--top-right

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  test.each(mocks)('run test case: ', async ({ params, response }) => {
    const onSubmit = jest.fn();
    const { findByTestId, findByText, getByText, queryByText } = renderLoginForm({
      onSubmit,
      shouldRemember: false,
    });

    const username = await findByTestId('username');
    const password = await findByTestId('password');
    const remember = await findByTestId('remember');
    const submit = await findByTestId('submit');

    fireEvent.change(username, { target: { value: params.email } });
    fireEvent.change(password, { target: { value: params.password } });
    fireEvent.click(remember);
    fireEvent.click(submit);

    let res: any = {
      status: response.status,
    };

    switch (response.status) {
      case 200:
        res.data = { email: response?.data?.user.email || '' };
        break;

      case 400:
      default:
        res.data = { message: response.message };
        break;
    }

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining(res));
    });
  });
});
