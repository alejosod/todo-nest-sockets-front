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
