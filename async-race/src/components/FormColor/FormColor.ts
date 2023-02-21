import { createCar, updateCar } from '../API/API';
import { Auto } from '../Auto/Auto';
import { CountCarsFun } from '../Functions/CountCars';
import { disableBntSelect } from '../Functions/DisableBnt';
import { showCars } from '../Functions/ShowCars';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { btnsDisable, colorCar, dataForm, selectCar, SERVICE_MESSAGES } from '../utils/constants';
import { INewCar } from '../utils/types';
import { ColorButton } from './ColorButton';
import { ColorInput } from './ColorInput';

export default class FormColor extends HTMLelement {
  private colorText: ColorInput;

  private colorInput: ColorInput;

  constructor(parentNode: HTMLElement, btnText: string) {
    super(parentNode, 'div', ['color-form']);

    this.colorText = new ColorInput(this.tagPrnt, 'text', ['control-input__text']);
    this.colorInput = new ColorInput(this.tagPrnt, 'color', ['control-input__color'], '#000000');

    this.colorText.getInputValue = (e) => this.updateData('name', e);
    this.colorInput.getInputValue = (e) => this.updateData('color', e);

    const colorButton = new ColorButton(this.tagPrnt, ['control-input'], btnText);
    colorButton.onClickBtn = () => {
      dataForm.color = '#000000';
      dataForm.name = '';
      if (btnText == SERVICE_MESSAGES.create) {
        createCar(dataForm);
        showCars();
        this.cleanInputs();
        CountCarsFun();
      } else {
        this.cleanInputs();
        updateCar(selectCar);
        console.log(colorCar[0].tagPrnt);
        colorCar[0].tagPrnt.innerHTML = Auto(selectCar.color);
        colorCar[1].tagPrnt.innerHTML = selectCar.name;
        btnsDisable.select = true;
        disableBntSelect();
      }
    };
  }

  updateData(key: keyof INewCar, e: Event): void {
    const input = e.target as HTMLInputElement;
    dataForm[key] = input.value;
    selectCar[key] = input.value;
  }

  cleanInputs(): void {
    (this.colorText.tagPrnt as HTMLInputElement).value = dataForm.name;
    (this.colorInput.tagPrnt as HTMLInputElement).value = dataForm.color;
  }
}
