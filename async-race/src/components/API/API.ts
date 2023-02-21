import { url3000 } from '../utils/constants';
import { ICar, IGetCar, INewCar, IWithOutIDCar } from '../utils/types';

export const getCarsArr = async (page = 1, limit = 7): Promise<IGetCar> => {
  try {
    const resp = await fetch(`${url3000}/garage?_limit=${limit}&_page=${page}`);
    return {
      cars: await resp.json(),
      count: Number(resp.headers.get('X-Total-Count')),
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteCar = async (id: number) =>
  (
    await fetch(`${url3000}/garage/${id}`, {
      method: 'DELETE',
    })
  ).json();

export const createCar = async (car: INewCar) => {
  try {
    await fetch(`${url3000}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateCar = async (car: IWithOutIDCar): Promise<void> => {
  try {
    await fetch(`${url3000}/garage/${car.id}`, {
      method: 'PUT',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getCar = async (id: number): Promise<ICar> => {
  try {
    const resp = await fetch(`${url3000}/garage/${id}`);
    const res: ICar = await resp.json();
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
