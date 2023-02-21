import { createCar } from '../API/API';
import { brands, models } from '../utils/CarsBrand';
import { Color } from './Color';
import { CountCarsFun } from './CountCars';
import { showCars } from './ShowCars';

function RND(min = 0, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function GenerateCars() {
  for (let i = 0; i < 100; i++) {
    const name = `${brands[RND(0, brands.length - 1)]} ${models[RND(0, models.length - 1)]}`;
    const color = Color();
    createCar({ name, color });
  }
  showCars();
  CountCarsFun();
}
