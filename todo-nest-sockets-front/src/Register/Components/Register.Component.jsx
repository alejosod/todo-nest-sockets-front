import PropTypes from 'prop-types';
import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { useSetRecoilState } from 'recoil';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import RegisterForm from './RegisterForm.Component.jsx';
import styles from './Register.Styles';
import user from '../../Recoil/User.Atom';
import useEffectOnRegisterUser from '../Hooks/useEffectOnRegisterUser';

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

function Register(props) {
  const { classes } = props;

  const setUser = useSetRecoilState(user);
  const { addToast } = useToasts();

  useEffectOnRegisterUser();

  async function onSubmitRegisterForm(registerFormValues) {
    const url = `${process.env.REACT_APP_SERVER_URI}/user`;

    try {
      const { data } = await axios.post(url, registerFormValues);

      setUser(data);
      addToast('User Created Successfully', { appearance: 'success' });
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <div className={classes.root}>
      <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm} />
    </div>
  );
}

Register.propTypes = propTypes;

export default withStyles(styles)(Register);
