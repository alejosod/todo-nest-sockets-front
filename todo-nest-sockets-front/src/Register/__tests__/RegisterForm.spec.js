import * as React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
    screen
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

  it('typing firstName field should change its value', async () => {
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

  it('typing lastName field should change its value', async () => {
    const testValue = 'soler';

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
    const testValue = 'alejosod@gmail.com';

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
    const testValue = 'Password1';

    const { findByTestId } = render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const passwordField = await findByTestId(`${blockName}--password_input`);

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
    const emailInput = await findByTestId(`${blockName}--email_input`);
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
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

  it('should not let you click the button if the form contains an invalid email', async () => {
    const testValue = 'Password1';
    const invalidEmailTest = 'test.test.com'
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const emailInput = await  findByTestId(`${blockName}--email_input`)
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(emailInput, {
        target: { value: invalidEmailTest}
      })
      await fireEvent.change(passwordInput, {
        target: { value: testValue },
      });
    });

    expect(formButton).toBeDisabled();
  });

  it('should not let you click the button if the form contains an invalid password', async () => {
    const testValue = 'Password1';
    const invalidPasswordTest = 'Password'
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const emailInput = await  findByTestId(`${blockName}--email_input`)
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: testValue },
      });
      await fireEvent.change(emailInput, {
        target: { value: 'test@test.com'}
      })
      await fireEvent.change(passwordInput, {
        target: { value: invalidPasswordTest },
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

  it('should let you click the button if the form is valid', async () => {
    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={() => {}} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const emailInput = await findByTestId(`${blockName}--email_input`);
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: 'alejandro' },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: 'Soler' },
      });
      await fireEvent.change(emailInput, {
        target: { value: 'test@test.com' },
      });
      await fireEvent.change(passwordInput, {
        target: { value: 'Password1' },
      });
    });

    expect(formButton).toBeEnabled();
  });

  it('should call the provided callback when button is clicked', async () => {
    const expectedResult = {
      firstName: 'John',
      lastName: 'Testerson',
      email: 'johnTesterson@test.com',
      password: 'Password1'
    }
    const onClick = jest.fn();

    const { findByTestId } = await render(<RegisterForm onSubmitRegisterForm={onClick} />);

    const firstNameInput = await findByTestId(`${blockName}--firstName_input`);
    const lastNameInput = await findByTestId(`${blockName}--lastName_input`);
    const emailInput = await findByTestId(`${blockName}--email_input`);
    const passwordInput = await findByTestId(`${blockName}--password_input`);
    const formButton = await findByTestId(`${blockName}--submit-button`);

    await act(async () => {
      await fireEvent.change(firstNameInput, {
        target: { value: expectedResult.firstName },
      });
      await fireEvent.change(lastNameInput, {
        target: { value: expectedResult.lastName },
      });
      await fireEvent.change(emailInput, {
        target: { value: expectedResult.email },
      });

      await fireEvent.change(passwordInput, {
        target: { value: expectedResult.password },
      });
    });

    await act(async () => {
      await fireEvent.click(formButton);
    })

    expect(onClick).toHaveBeenCalled();
  });
});
