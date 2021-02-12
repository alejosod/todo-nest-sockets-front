import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import user from '../../Recoil/User.Atom';

function useEffectOnRegisterUser() {
  const userInfo = useRecoilValue(user);
  const history = useHistory();

  function effect() {
    const { email, id } = userInfo;

    if (email) {
      history.push(`/todos/${id}`);
    }
  }

  useEffect(effect, [userInfo]);
}

export default useEffectOnRegisterUser;
