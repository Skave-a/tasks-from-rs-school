import { ColorButton } from '../FormColor/ColorButton';
import { ShowWinner } from '../Functions/ShowWinners';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { counts, SERVICE_MESSAGES } from '../utils/constants';

export const pageWin = [1];

export function setPageWin(pageWin: number) {
  const p = document.querySelector('.winners-page') as HTMLParagraphElement;
  p.innerHTML = `${SERVICE_MESSAGES.page} ${pageWin}`;
  return pageWin;
}

export class PaginationWin extends HTMLelement {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['pagination']);
    const prev = new ColorButton(this.tagPrnt, ['button__link'], SERVICE_MESSAGES.prev);
    const next = new ColorButton(this.tagPrnt, ['button__link'], SERVICE_MESSAGES.next);

    prev.onClickBtn = () => {
      pageWin[0]--;
      if (pageWin[0] < 1) {
        pageWin[0] = 1;
      }
      ShowWinner(pageWin[0]);
      setPageWin(pageWin[0]);
    };

    next.onClickBtn = () => {
      pageWin[0]++;
      if (pageWin[0] > counts[1] / 10) {
        pageWin[0] = Math.ceil(counts[1] / 10);
      }
      ShowWinner(pageWin[0]);
      setPageWin(pageWin[0]);
    };
  }
}
