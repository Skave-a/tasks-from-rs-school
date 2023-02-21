import { getCarsArr } from '../API/API';
import { GarageRaceItem } from '../GarageRace/GarageRaceItem';
import { page } from '../Pagination/Pagination';
import { counts } from '../utils/constants';

export let carsArr: GarageRaceItem[] = [];

export async function showCars(pageN = page[0]): Promise<void> {
  if ((counts[0] - 1) % 7 == 0) {
    pageN--;
    page[0]--;
  }
  const data = await getCarsArr(pageN);
  const tagParent = document.querySelector('.wrapper__garage') as HTMLDivElement;
  while (tagParent.firstChild) {
    tagParent.removeChild(tagParent.firstChild);
  }
  carsArr = data.cars.map((car) => {
    const el = new GarageRaceItem(tagParent as HTMLDivElement, car);
    return el;
  });
}
