import RegisterComponent from '../../Register';
import Login from '../../Login';

export default [
  { path: '/', exact: true, component: null },
  { path: '/register', exact: true, component: RegisterComponent },
  { path: '/login', exact: true, component: Login },
];
