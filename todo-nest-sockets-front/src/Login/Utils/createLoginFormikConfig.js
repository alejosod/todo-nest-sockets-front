import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string('Enter your Email')
    .email()
    .trim()
    .required('Email is Required'),
  password: yup.string('Enter your Password')
    .trim()
    .required('Password is Required'),
});

export default (onSubmit) => ({
  validateOnMount: true,
  initialValues,
  onSubmit,
  validationSchema,
});
