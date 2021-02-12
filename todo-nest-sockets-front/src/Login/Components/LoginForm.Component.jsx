import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import {
  Button, Paper, TextField, withStyles,
} from '@material-ui/core';
import styles from './LoginForm.Styles';
import createLoginFormikConfig from '../Utils';

const blockName = 'login_form';

const propTypes = {
  classes: {
    root: PropTypes.string.isRequired,
  }.isRequired,
  loading: PropTypes.bool.isRequired,
  onSubmitLoginForm: PropTypes.func.isRequired,
};

function LoginForm(props) {
  const {
    classes,
    loading,
    onSubmitLoginForm,
  } = props;

  const formikConfig = createLoginFormikConfig(onSubmitLoginForm);

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
    return function setFiledTouchedOnBlur() {
      setFieldTouched(field, true);
    };
  }

  const isButtonDisabled = loading || !isValid;
  const buttonTest = loading ? 'Loading' : 'Login';

  return (
      <Paper
          id={`${blockName}--register-form-root`}
          className={classes.root}
          elevation={3}
      >
        <form
            className={classes.form}
            onSubmit={onSubmit}
        >
          <TextField
              error={touched.email && Boolean(errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              inputProps={{ 'data-testid': `${blockName}--email_input` }}
              id={`${blockName}--email_input`}
              label="Email"
              name="email"
              onBlur={onBlur('email')}
              onChange={handleChange}
              value={values.email}
              variant='outlined'
          />
          <TextField
              error={touched.password && Boolean(errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              inputProps={{ 'data-testid': `${blockName}--password_input` }}
              id={`${blockName}--password_input`}
              label="Password"
              name="password"
              onBlur={onBlur('password')}
              onChange={handleChange}
              value={values.password}
              variant='outlined'
          />
          <Button
              data-testid={`${blockName}--submit-button`}
              color="primary"
              disabled={isButtonDisabled}
              fullWidth
              id={`${blockName}--submit-button`}
              size="large"
              type="submit"
              variant="outlined"
          >
            {buttonTest}
          </Button>
        </form>
      </Paper>
  );
}

LoginForm.propTypes = propTypes;

export default withStyles(styles)(LoginForm);
