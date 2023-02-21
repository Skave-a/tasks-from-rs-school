import { FormButton } from '../FormButton/FormButton';
import FormColor from '../FormColor/FormColor';
import { disableBntSelect } from '../Functions/DisableBnt';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { SERVICE_MESSAGES } from '../utils/constants';

export class Form extends HTMLelement {
  private colorFormCreate: FormColor;
  private colorFormUpdate: FormColor;
  private formButton: FormButton;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['control']);
    this.colorFormCreate = new FormColor(this.tagPrnt, SERVICE_MESSAGES.create);
    this.colorFormUpdate = new FormColor(this.tagPrnt, SERVICE_MESSAGES.update);
    this.formButton = new FormButton(this.tagPrnt);
    disableBntSelect();
  }
}
