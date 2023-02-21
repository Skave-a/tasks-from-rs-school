import { getCarsArr } from '../API/API';
import { counts, SERVICE_MESSAGES } from '../utils/constants';

export async function CountCarsFun(): Promise<number> {
  const data = await getCarsArr();
  const countCars = data.count;
  const p = document.querySelector('.count-of-cars') as HTMLParagraphElement;
  p.innerHTML = `${SERVICE_MESSAGES.garage} (${countCars})`;
  counts[0] = countCars;
  return countCars;
}
