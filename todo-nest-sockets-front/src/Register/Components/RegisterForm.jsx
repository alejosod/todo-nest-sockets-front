import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import createRegisterFormikConfig from '../Utils/createRegisterFormikConfig';

const propTypes = {
  onSubmitRegisterForm: PropTypes.func.isRequired,
};

const blockName = 'register_form';

function RegisterForm(props) {
  const { onSubmitRegisterForm } = props;

  const formikConfig = createRegisterFormikConfig(onSubmitRegisterForm);

  const {
    errors,
    handleChange,
    handleSubmit,
    isValid,
    touched,
    values,
  } = useFormik(formikConfig);

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit();
  }

  console.log({ isValid });

  return (
    <div>
        <form onSubmit={onSubmit}>
            <TextField
                error={touched.firstName && Boolean(errors.firstName)}
                fullWidth
                helperText={touched.firstName && errors.firstName}
                inputProps={{ 'data-testid': `${blockName}--firstName_input` }}
                id={`${blockName}--firstName_input`}
                label="First Name"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
            />
            <TextField
                error={touched.lastName && Boolean(errors.lastName)}
                fullWidth
                helperText={touched.lastName && errors.lastName}
                inputProps={{ 'data-testid': `${blockName}--lastName_input` }}
                id={`${blockName}--lastName_input`}
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
            />
            <TextField
                error={touched.email && Boolean(errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                id={`${blockName}--email_input`}
                inputProps={{ 'data-testid': `${blockName}--email_input` }}
                label="Email"
                name="email"
                onChange={handleChange}
                value={values.email}
            />
            <TextField
                error={touched.password && Boolean(errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                id={`${blockName}--password_input`}
                inputProps={{ 'data-testid': `${blockName}--password_input` }}
                label="Password"
                name="password"
                onChange={handleChange}
                value={values.password}
            />
            <Button
                data-testid={`${blockName}--submit-button`}
                color="primary"
                disabled={!isValid}
                fullWidth
                id={`${blockName}--submit-button`}
                type="submit"
                variant="contained"
            >
                Register
            </Button>
        </form>
    </div>
  );
}

RegisterForm.propTypes = propTypes;

export default RegisterForm;
