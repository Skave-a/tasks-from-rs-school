import { HTMLelement } from '../HTMLelement/HTMLelement';

export class ColorInput extends HTMLelement {
  getInputValue: (event: Event) => void = () => {
    /**/
  };

  constructor(parentNode: HTMLElement, type: string, styles: string[] = [], value?: string) {
    super(parentNode, 'input', ['color__inp']);
    this.tagPrnt.setAttribute('type', type);
    this.tagPrnt.classList.add(...styles);

    if (value) {
      this.tagPrnt.setAttribute('value', value);
    }

    this.tagPrnt.addEventListener('input', (e) => this.getInputValue(e));
  }
}
