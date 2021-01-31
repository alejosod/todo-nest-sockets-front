import * as React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
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

  it('typing firstname field should change its value', async () => {
    const testValue = 'alejandro';

    const { findByTestId } = render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameField = await findByTestId(`${blockName}--firstName_input`);

    await act(async () => {
      await fireEvent.change(firstNameField, {
        target: { value: testValue },
      });
    });

    expect(firstNameField).toHaveValue(testValue);
  });
});
