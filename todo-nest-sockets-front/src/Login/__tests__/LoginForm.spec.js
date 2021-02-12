import React from 'react'
import {
    act,
    cleanup,
    fireEvent,
    render,
    screen
} from '@testing-library/react';
import LoginForm from '../Components/LoginForm.Component.jsx'
import ContextProvider from '../../components/ContextProvider/ContextProvider.Component.jsx';

const LoginFormThemed = () => (
    <ContextProvider>
        <LoginForm onSubmitLoginForm={() => {}}/>
    </ContextProvider>
)

const blockName = 'login_form';

describe('LoginForm Component', () => {
    afterEach(cleanup);

    it('Renders correctly', async () => {
        const { findByTestId } = render(<LoginFormThemed />);

        await findByTestId(`${blockName}--email_input`);
        await findByTestId(`${blockName}--password_input`);
        await findByTestId(`${blockName}--submit-button`);
    })

    it('Should update the email value, when typing in it', async () => {
        const emailTestValue = 'email@test.com'

        const { findByTestId } = render(<LoginFormThemed />)

        const emailField = await findByTestId(`${blockName}--email_input`);

        await act(async () => {
            await fireEvent.change(emailField, {
                target: { value: emailTestValue}
            })
        })

        expect(emailField).toHaveValue(emailTestValue)
    })

    it('Should show an error if the email field is not provided', async () => {
        const { findByTestId } = render(<LoginFormThemed />)

        const emailField = await findByTestId(`${blockName}--email_input`);

        await act(async () => {
            await fireEvent.blur(emailField);
        })

        expect(emailField).toContainHTML('aria-invalid="true"')
    })

    it('Should show an error if the email field is contains an invalid email', async () => {
        const emailTestValue = 'invalid'

        const { findByTestId } = render(<LoginFormThemed />)

        const emailField = await findByTestId(`${blockName}--email_input`);

        await act(async () => {
            await fireEvent.change(emailField, {
                target: { value: emailTestValue },
            });
            await fireEvent.blur(emailField)
        })

        expect(emailField).toContainHTML('aria-invalid="true"')
    })

    it('Should update the password value, when typing in it', async () => {
        const passwordTestValue = 'Password1'

        const { findByTestId } = render(<LoginFormThemed />)

        const passwordField = await findByTestId(`${blockName}--password_input`);

        await act(async () => {
            await fireEvent.change(passwordField, {
                target: { value: passwordTestValue}
            })
        })

        expect(passwordField).toHaveValue(passwordTestValue)
    })

    it('Should show an error if the password field is not provided', async () => {
        const { findByTestId } = render(<LoginFormThemed />)

        const passwordField = await findByTestId(`${blockName}--password_input`);

        await act(async () => {
            await fireEvent.blur(passwordField);
        })

        expect(passwordField).toContainHTML('aria-invalid="true"')
    })

    it('Should show the button active when the form is valid', async () => {
        const { findByTestId } = render(<LoginFormThemed />)

        const validEmailValue = 'test@test.com'
        const validPasswordValue = 'Password1'

        const emailField = await findByTestId(`${blockName}--email_input`);
        const passwordField = await findByTestId(`${blockName}--password_input`);
        const submitButton = await findByTestId(`${blockName}--submit-button`);

        await act(async () => {
            await fireEvent.change(emailField, {
                target: { value: validEmailValue}
            })
            await fireEvent.change(passwordField, {
                target: { value: validPasswordValue}
            })
        })

        expect(submitButton).toBeEnabled()
    })

    it('Should show the button disabled when the form contains an invalid email', async () => {
        const { findByTestId } = render(<LoginFormThemed />)

        const invalidEmailValue = 'invalid.com'
        const validPassword = 'Password1'

        const emailField = await findByTestId(`${blockName}--email_input`);
        const passwordField = await findByTestId(`${blockName}--password_input`);
        const submitButton = await findByTestId(`${blockName}--submit-button`);

        await act(async () => {
            await fireEvent.change(emailField, {
                target: { value: invalidEmailValue}
            })
            await fireEvent.change(passwordField, {
                target: { value: validPassword}
            })
        })

        expect(submitButton).toBeDisabled()
    })

    it('Should show the button disabled when the form contains an invalid password', async () => {
        const { findByTestId } = render(<LoginFormThemed />)

        const validEmailValue = 'valid@test.com'
        const invalidPassword = ''

        const emailField = await findByTestId(`${blockName}--email_input`);
        const passwordField = await findByTestId(`${blockName}--password_input`);
        const submitButton = await findByTestId(`${blockName}--submit-button`);

        await act(async () => {
            await fireEvent.change(emailField, {
                target: { value: validEmailValue}
            })
            await fireEvent.change(passwordField, {
                target: { value: invalidPassword}
            })
        })

        expect(submitButton).toBeDisabled()
    })

    it('Should be a disabled button if it is loading', async () => {
        const { findByTestId } = render(
            <ContextProvider>
                <LoginForm onSubmitLoginForm={() => {}} loading />
            </ContextProvider>
        )

        const validEmailValue = 'valid@test.com'
        const validPassword = 'Password1'

        const emailField = await findByTestId(`${blockName}--email_input`);
        const passwordField = await findByTestId(`${blockName}--password_input`);
        const submitButton = await findByTestId(`${blockName}--submit-button`);

        await act(async () => {
            await fireEvent.change(emailField, {
                target: { value: validEmailValue}
            })
            await fireEvent.change(passwordField, {
                target: { value: validPassword}
            })
        })

        expect(submitButton).toBeDisabled()
    })

    it('Should call the provided callback when the button is clicked', async () => {

        const onClick = jest.fn();

        const { findByTestId } = render(
            <ContextProvider>
                <LoginForm onSubmitLoginForm={onClick} />
            </ContextProvider>
        )

        const validEmailValue = 'valid@test.com'
        const validPassword = 'Password1'

        const emailField = await findByTestId(`${blockName}--email_input`);
        const passwordField = await findByTestId(`${blockName}--password_input`);
        const submitButton = await findByTestId(`${blockName}--submit-button`);

        await act(async () => {
            await fireEvent.change(emailField, {
                target: { value: validEmailValue}
            })
            await fireEvent.change(passwordField, {
                target: { value: validPassword}
            })
        })

        await act(async () => {
            await fireEvent.click(submitButton)
        })

        expect(onClick).toHaveBeenCalled()

    })

})