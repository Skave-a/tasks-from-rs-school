import { drive, startEngine } from '../API/API-engine';
import { btnsDisable } from '../utils/constants';
import { IDriveMode, IStartCar } from '../utils/types';
import { disableBntPlay, disableBntStop } from './DisableBnt';
import { driveCar } from './DriveCar';
import { carsArr } from './ShowCars';
import { StopCar500 } from './StopCar';

export async function startCar(id: number, car: HTMLElement, btn: HTMLButtonElement): Promise<IStartCar> {
  const { velocity, distance } = await startEngine(id);
  const time = distance / velocity;
  driveCar(time, car);
  btnsDisable.play = true;
  disableBntPlay(btn);
  disableBntStop(btn.nextSibling as HTMLButtonElement);
  const { success } = (await driveMode(id)) as IDriveMode;
  return { success, id, time };
}

async function driveMode(id: number): Promise<IDriveMode | void> {
  try {
    return await drive(id);
  } catch (err) {
    if (err) {
      let car = carsArr[0].imgCar.tagPrnt;
      carsArr.forEach((el) => {
        if (id == el.car.id) {
          car = el.imgCar.tagPrnt;
        }
      });
      StopCar500(id, car as HTMLElement);
      return { success: false };
    }
  }
}
