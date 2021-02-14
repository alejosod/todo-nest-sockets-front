import { atom } from 'recoil';

const todoDefault = [];

const tasks = atom({
  key: 'tasks',
  default: todoDefault,
});

export default tasks;
