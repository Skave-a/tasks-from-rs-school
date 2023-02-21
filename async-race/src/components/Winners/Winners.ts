import { CountWinners } from '../Functions/CountWinners';
import { ShowWinner } from '../Functions/ShowWinners';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { pageWin, PaginationWin } from '../Pagination/PaginationWin';
import { counts, SERVICE_MESSAGES } from '../utils/constants';

export class Winners extends HTMLelement {
  private pagination: PaginationWin;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['winners']);
    // new HTMLelement(this.tagPrnt, 'h2', ['winners-count'], `${SERVICE_MESSAGES.winners} ( )`);
    CountWinners();
    this.countWinns();
    ShowWinner(1);
    const table = new HTMLelement(this.tagPrnt, 'table');
    const thead = new HTMLelement(table.tagPrnt, 'thead');
    thead.tagPrnt.innerHTML = `
      <tr>
        <th>${SERVICE_MESSAGES.num}</th>
        <th>${SERVICE_MESSAGES.car}</th>
        <th>${SERVICE_MESSAGES.name}</th>
        <th class='th-wins ASC'>${SERVICE_MESSAGES.wins}</th>
        <th class='th-time ASC'>${SERVICE_MESSAGES.bestTime}</th>
      </tr>
    `;
    new HTMLelement(table.tagPrnt, 'tbody', ['tbody']);

    this.pagination = new PaginationWin(this.tagPrnt);

    thead.tagPrnt.addEventListener('click', (e) => this.sortBy(e));
  }

  private async countWinns(): Promise<void> {
    new HTMLelement(this.tagPrnt, 'p', ['winners-count'], `${SERVICE_MESSAGES.winners} (${counts[1]})`);
    new HTMLelement(this.tagPrnt, 'p', ['winners-page'], `${SERVICE_MESSAGES.page} ${pageWin}`);
  }

  sortBy(e: Event): void {
    const { target } = e;
    function orderBy(target: HTMLElement){
      target.classList.toggle('ASC');
      let order = 'DESC';
      if (target.classList.contains('ASC')) {
        order = 'ASC';
      }
      return order;
    }
    if (target instanceof HTMLElement && target.classList.contains('th-wins')) {
      ShowWinner(1, orderBy(target), 'wins');
    }
    if (target instanceof HTMLElement && target.classList.contains('th-time')) {
      ShowWinner(1, orderBy(target), 'time',);
    }
  }
}
