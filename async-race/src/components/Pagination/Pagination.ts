import { ColorButton } from '../FormColor/ColorButton';
import { showCars } from '../Functions/ShowCars';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { counts, SERVICE_MESSAGES } from '../utils/constants';

export const page = [1];

export function setPage(page: number) {
  const p = document.querySelector('.count-of-page') as HTMLParagraphElement;
  p.innerHTML = `${SERVICE_MESSAGES.page} ${page}`;
  return page;
}

export class Pagination extends HTMLelement {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['pagination']);
    const prev = new ColorButton(this.tagPrnt, ['button__link'], SERVICE_MESSAGES.prev);
    const next = new ColorButton(this.tagPrnt, ['button__link'], SERVICE_MESSAGES.next);

    prev.onClickBtn = () => {
      page[0]--;
      if (page[0] < 1) {
        page[0] = 1;
      }
      showCars(page[0]);
      setPage(page[0]);
    };

    next.onClickBtn = () => {
      page[0]++;
      if (page[0] > counts[0] / 7) {
        page[0] = Math.ceil(counts[0] / 7);
      }
      showCars(page[0]);
      setPage(page[0]);
    };
  }
}
