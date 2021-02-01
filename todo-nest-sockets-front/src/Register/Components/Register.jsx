import React from 'react';
import RegisterForm from './RegisterForm.Component.jsx';
import RegisterBackground from './RegisterBackground.Component.jsx';

function Register() {
  function onSubmitRegisterForm(registerFormValues) {
    console.log({ registerFormValues });
  }

  return (
    <div>
      <RegisterBackground />
      <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm} />
    </div>
  );
}

export default Register;
