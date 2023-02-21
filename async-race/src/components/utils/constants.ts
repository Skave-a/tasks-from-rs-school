import { HTMLelement } from '../HTMLelement/HTMLelement';

export const SERVICE_MESSAGES = {
  garage: 'Garage',
  winners: 'Winners',
  create: 'Create',
  update: 'Update',
  race: 'Race',
  reset: 'Reset',
  generateCars: 'Generate cars',
  select: 'Select',
  remove: 'Remove',
  start: '►',
  stop: '⬛',
  prev: 'PREV',
  next: 'NEXT',
  num: '№',
  car: 'Car',
  name: 'Name',
  wins: 'Wins',
  bestTime: 'Best time (sec)',
  page: 'Page #',
};

export const url3000 = 'http://localhost:3000';

export const dataForm = {
  name: '',
  color: '#000000',
};

export const selectCar = {
  color: '',
  name: '',
  id: 1,
};

export const colorCar: HTMLelement[] = [];

export const counts: number[] = [];

export const btnsDisable = {
  select: true,
  play: false,
  stop: true,
  reset: true,
  garage: true,
  winners: false,
};

export const theFirst = {
  id: 1,
  name: '',
};
