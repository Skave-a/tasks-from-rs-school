import { getCarsArr } from '../API/API';

let ide: number[];

async function GetCars() {
  const data = await getCarsArr();
  const arr = data.cars;
  arr.forEach((el) => {
    if (el.id) ide.push(el.id);
  });
  console.log(ide);
}

export function GetCarsID() {
  const cars = Array.from(document.querySelectorAll('.img__auto'));
  GetCars();
  return cars;
}
