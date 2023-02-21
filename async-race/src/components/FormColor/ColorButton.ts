import { HTMLelement } from '../HTMLelement/HTMLelement';

export class ColorButton extends HTMLelement {
  onClickBtn: () => void = () => {
    /**/
  };

  constructor(parentNode: HTMLElement, styles: string[] = [], content: string, disabled = false) {
    super(parentNode, 'button', ['button__link'], content);
    this.tagPrnt.classList.add(...styles);
    this.tagPrnt.addEventListener('click', () => this.onClickBtn());

    if (disabled) {
      this.disabled(true);
    }
  }

  disabled(type = false): void {
    this.tagPrnt.toggleAttribute('disabled', type);
  }

  abled(): void {
    this.tagPrnt.removeAttribute('disabled');
  }
}
