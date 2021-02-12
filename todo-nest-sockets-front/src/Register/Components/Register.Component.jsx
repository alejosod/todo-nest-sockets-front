import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import RegisterForm from './RegisterForm.Component.jsx';
import styles from './Register.Styles';
import useEffectOnRegisterUser from '../Hooks/useEffectOnRegisterUser';

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

function Register(props) {
  const { classes } = props;

  const [loading, setLoadingStatus] = useState(false);

  const { addToast } = useToasts();

  useEffectOnRegisterUser();

  async function onSubmitRegisterForm(registerFormValues) {
    setLoadingStatus(true);
    const url = `${process.env.REACT_APP_SERVER_URI}/user`;

    try {
      await axios.post(url, registerFormValues);

      setLoadingStatus(false);
      addToast('User Created Successfully', { appearance: 'success' });
    } catch (e) {
      setLoadingStatus(false);
      addToast(e?.response?.data?.error, { appearance: 'error' });
    }
  }

  return (
    <div className={classes.root}>
      <RegisterForm
          loading={loading}
          onSubmitRegisterForm={onSubmitRegisterForm}
      />
    </div>
  );
}

Register.propTypes = propTypes;

export default withStyles(styles)(Register);
