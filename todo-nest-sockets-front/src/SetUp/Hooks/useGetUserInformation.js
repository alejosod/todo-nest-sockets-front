import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import constants from '../../Constants';
import { user, todos } from '../../Recoil';

function useGetUserInformation() {
  const { addToast } = useToasts();
  const history = useHistory();
  const setUser = useSetRecoilState(user);
  const setTodos = useSetRecoilState(todos);

  async function effect() {
    try {
      const token = localStorage.getItem(constants.localStorage.ACCESS_TOKEN);

      if (!token) {
        addToast('Session Expired', { appearance: 'error' });

        history.push('/login');
      }

      addToast('Getting User information', { appearance: 'info' });

      const userResponse = await axios.get(`${process.env.REACT_APP_SERVER_URI}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      addToast('Saving User information', { appearance: 'info' });
      setUser(userResponse.data);

      addToast('Getting Todo List', { appearance: 'info' });
      const todoResponse = await axios.get(`${process.env.REACT_APP_SERVER_URI}/user/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(todoResponse.data);

      history.push('/dashboard');
    } catch (e) {
      console.log({ e });
    }
  }

  useEffect(() => {
    effect();
  }, []);
}

export default useGetUserInformation;
