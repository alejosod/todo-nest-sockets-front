import React from 'react';
import RegisterForm from './RegisterForm.jsx';

function Register() {
  function onSubmitRegisterForm(registerFormValues) {
    console.log({ registerFormValues });
  }

  console.log('here');

  return (
    <div>
      <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm} />
    </div>
  );
}

export default Register;
