import * as yup from 'yup';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// At least one lowercase Letter
// At least one uppercase Letter
// At least one number
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm;

const validationSchema = yup.object({
  firstName: yup.string('Enter Your Name').trim().required('Name is Required'),
  lastName: yup.string('Enter Your Last Name').trim().required('Last Name is Required'),
  email: yup.string('Enter Your Email')
    .email('Enter a valid email')
    .trim()
    .required('Email is required'),
  password: yup.string('Enter Your Password')
    .matches(regex, 'Invalid Password, it should contain at least, one lower case letter, one upper case letter, and one number')
    .required('Password Is required'),
});

export default (onSubmit) => ({
  validateOnMount: true,
  initialValues,
  onSubmit,
  validationSchema,
});
