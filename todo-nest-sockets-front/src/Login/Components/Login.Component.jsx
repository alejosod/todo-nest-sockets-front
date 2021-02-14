import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { withStyles } from '@material-ui/core';
import LoginForm from './LoginForm.Component.jsx';
import constants from '../../Constants';
import styles from './Login.Styles';

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

function Login(props) {
  const { classes } = props;

  const [loading, setLoadingStatus] = useState(false);

  const history = useHistory();
  const { addToast } = useToasts();

  async function onSubmitLoginForm(loginFormValues) {
    setLoadingStatus(true);
    const url = `${process.env.REACT_APP_SERVER_URI}/auth/login`;

    try {
      const { data: { access_token: ACCESS_TOKEN } } = await axios.post(url, loginFormValues);

      localStorage.setItem(constants.localStorage.ACCESS_TOKEN, ACCESS_TOKEN);
      addToast('User Logged In Successfully', { appearance: 'success' });
      setLoadingStatus(false);
      history.push('/setup');
    } catch (e) {
      setLoadingStatus(false);
      addToast(e?.response?.data?.message, { appearance: 'error' });
    }
  }

  return (
      <div className={classes.root}>
        <LoginForm
            onSubmitLoginForm={onSubmitLoginForm}
            loading={loading}
        />
      </div>
  );
}

Login.propTypes = propTypes;

export default withStyles(styles)(Login);
