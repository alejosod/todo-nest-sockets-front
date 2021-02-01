import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import RegisterForm from './RegisterForm.Component.jsx';
import styles from './Register.Styles';

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

function Register(props) {
  const { classes } = props;

  function onSubmitRegisterForm(registerFormValues) {
    console.log({ registerFormValues });
  }

  return (
    <div className={classes.root}>
      <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm} />
    </div>
  );
}

Register.propTypes = propTypes;

export default withStyles(styles)(Register);
