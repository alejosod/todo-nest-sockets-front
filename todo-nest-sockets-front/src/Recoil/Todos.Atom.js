import { atom } from 'recoil';

const todoDefault = [];

const todos = atom({
  key: 'todos',
  default: todoDefault,
});

export default todos;
