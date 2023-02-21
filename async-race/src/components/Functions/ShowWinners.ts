import { getCar } from '../API/API';
import { getAllWinners } from '../API/API-winners';
import { Auto } from '../Auto/Auto';
import { pageWin } from '../Pagination/PaginationWin';
import { counts } from '../utils/constants';

export async function ShowWinner(pageN: number, order = 'ASC', sort = 'time'): Promise<void> {
  if ((counts[1] - 1) % 10 == 0) {
    pageN--;
    pageWin[0]--;
  }
  const data = await getAllWinners(pageN, order, sort);
  const tagParent = document.querySelector('.tbody') as HTMLElement;
  tagParent.innerHTML = '';
  data.result.forEach(async (item, id) => {
    const car = await getCar(item.id);
    tagParent.innerHTML += `
      <tr>
        <th>${id + 1}</th>
        <th>${Auto(car.color)}</th>
        <th>${car.name}</th>
        <th>${item.wins}</th>
        <th>${item.time}</th>
      </tr>`;
  });
}
