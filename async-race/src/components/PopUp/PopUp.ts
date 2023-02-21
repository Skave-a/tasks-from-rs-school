import { HTMLelement } from "../HTMLelement/HTMLelement";

export class PopUp extends HTMLelement {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['pop-up']);
  }
}
