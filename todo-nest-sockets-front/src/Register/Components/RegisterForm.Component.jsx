import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { withStyles } from '@material-ui/styles';
import createRegisterFormikConfig from '../Utils/createRegisterFormikConfig';
import styles from './RegisterForm.Styles';

const blockName = 'register_form';

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  onSubmitRegisterForm: PropTypes.func.isRequired,
};

function RegisterFormComponent(props) {
  const {
    classes,
    onSubmitRegisterForm,
  } = props;

  const formikConfig = createRegisterFormikConfig(onSubmitRegisterForm);

  const {
    errors,
    handleChange,
    handleSubmit,
    isValid,
    setFieldTouched,
    touched,
    values,
  } = useFormik(formikConfig);

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit();
  }

  function onBlur(field) {
    return function () {
      setFieldTouched(field, true);
    };
  }

  return (
    <Card
        id={`${blockName}--register-form-root`}
        className={classes.root}
    >
        <form onSubmit={onSubmit}>
            <TextField
                error={touched.firstName && Boolean(errors.firstName)}
                fullWidth
                helperText={touched.firstName && errors.firstName}
                inputProps={{ 'data-testid': `${blockName}--firstName_input` }}
                id={`${blockName}--firstName_input`}
                label="First Name"
                name="firstName"
                onBlur={onBlur('firstName')}
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
                onBlur={onBlur('lastName')}
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
                onBlur={onBlur('email')}
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
                onBlur={onBlur('password')}
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
    </Card>
  );
}

RegisterFormComponent.propTypes = propTypes;

export default withStyles(styles)(RegisterFormComponent);
