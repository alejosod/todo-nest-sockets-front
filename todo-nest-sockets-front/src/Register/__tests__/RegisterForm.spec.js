import * as React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react';
import { RegisterForm } from '../Components';

const blockName = 'register_form';

describe('RegisterForm Component', () => {
  afterEach(cleanup);

  it('Render correctly', async () => {
    const { findByTestId } = render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    await findByTestId(`${blockName}--firstName_input`);
    await findByTestId(`${blockName}--lastName_input`);
    await findByTestId(`${blockName}--email_input`);
    await findByTestId(`${blockName}--password_input`);
    await findByTestId(`${blockName}--submit-button`);
  });

  it('typing lastName field should change its value', async () => {
    const testValue = 'alejandro';

    const { findByTestId } = render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const lastNameField = await findByTestId(`${blockName}--lastName_input`);

    await act(async () => {
      await fireEvent.change(lastNameField, {
        target: { value: testValue },
      });
    });

    expect(lastNameField).toHaveValue(testValue);
  });

  it('typing email field should change its value', async () => {
    const testValue = 'alejandro';

    const { findByTestId } = render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const emailField = await findByTestId(`${blockName}--email_input`);

    await act(async () => {
      await fireEvent.change(emailField, {
        target: { value: testValue },
      });
    });

    expect(emailField).toHaveValue(testValue);
  });

  it('typing password field should change its value', async () => {
    const testValue = 'alejandro';

    const { findByTestId } = render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const passwordField = await findByTestId(`${blockName}--email_input`);

    await act(async () => {
      await fireEvent.change(passwordField, {
        target: { value: testValue },
      });
    });

    expect(passwordField).toHaveValue(testValue);
  });

  it('should not let you click the button if the form do not contains a firstName', async () => {
    const testValue = 'test';
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const emailInput = await findByTestId(`${blockName}--email_input`);
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(lastNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(emailInput, {
        target: { value: testValue },
      });
      await fireEvent.change(passwordInput, {
        target: { value: testValue },
      });
    });

    expect(formButton).toBeDisabled();
  });

  it('should not let you click the button if the form do not contains a lastName', async () => {
    const testValue = 'test';
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(passwordInput, {
        target: { value: testValue },
      });
    });

    expect(formButton).toBeDisabled();
  });

  it('should not let you click the button if the form do not contains an email', async () => {
    const testValue = 'test';
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(passwordInput, {
        target: { value: testValue },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: testValue },
      });
    });

    expect(formButton).toBeDisabled();
  });

  it('should not let you click the button if the form do not contains a password', async () => {
    const testValue = 'test';
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const emailInput = await findByTestId(`${blockName}--email_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(emailInput, {
        target: { value: testValue },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: testValue },
      });
    });

    expect(formButton).toBeDisabled();
  });

  it('should not let you click the button if the form do not contains a password', async () => {
    const testValue = 'test';
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const emailInput = await findByTestId(`${blockName}--email_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(emailInput, {
        target: { value: testValue },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: testValue },
      });
    });

    expect(formButton).toBeDisabled();
  });
});
