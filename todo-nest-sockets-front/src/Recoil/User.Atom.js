import { atom } from 'recoil';

const userDefault = {
  firstName: '',
  lastName: '',
  email: '',
  id: '',
  role: '',
};

const user = atom({
  key: 'user',
  default: userDefault,
});

export default user;
