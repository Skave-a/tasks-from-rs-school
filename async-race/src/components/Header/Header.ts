import { HTMLelement } from '../HTMLelement/HTMLelement';
import { btnsDisable, SERVICE_MESSAGES } from '../utils/constants';

export class Header extends HTMLelement {
  ButtonGarage: HTMLelement;
  ButtonWinners: HTMLelement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['header']);

    this.ButtonGarage = new HTMLelement(this.tagPrnt, 'button', ['button__link'], SERVICE_MESSAGES.garage);
    this.ButtonWinners = new HTMLelement(this.tagPrnt, 'button', ['button__link'], SERVICE_MESSAGES.winners);
    (this.ButtonGarage.tagPrnt as HTMLButtonElement).disabled = true;

    this.ButtonWinners.tagPrnt.addEventListener('click', () => this.toggleView());
    this.ButtonGarage.tagPrnt.addEventListener('click', () => this.toggleView());
  }

  toggleView() {
    const app = document.querySelector('.app') as HTMLElement;
    app.classList.toggle('hide');
    if (btnsDisable.garage) {
      (this.ButtonGarage.tagPrnt as HTMLButtonElement).disabled = false;
      (this.ButtonWinners.tagPrnt as HTMLButtonElement).disabled = true;
      btnsDisable.garage = false;
      btnsDisable.winners = true;
    } else {
      (this.ButtonWinners.tagPrnt as HTMLButtonElement).disabled = false;
      (this.ButtonGarage.tagPrnt as HTMLButtonElement).disabled = true;
      btnsDisable.garage = true;
      btnsDisable.winners = false;
    }
  }
}
