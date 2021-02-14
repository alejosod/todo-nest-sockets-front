import RegisterComponent from '../../Register';
import Login from '../../Login';
import SetUp from '../../SetUp';

export default [
  { path: '/', exact: true, component: null },
  { path: '/register', exact: true, component: RegisterComponent },
  { path: '/login', exact: true, component: Login },
  { path: '/setup', exact: true, component: SetUp },
];
