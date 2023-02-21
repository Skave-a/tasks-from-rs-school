import { deleteCar } from '../API/API';
import { Auto } from '../Auto/Auto';
import { ColorButton } from '../FormColor/ColorButton';
import { CountCarsFun } from '../Functions/CountCars';
import { disableBntPlay, disableBntSelect, disableBntStop } from '../Functions/DisableBnt';
import { showCars } from '../Functions/ShowCars';
import { startCar } from '../Functions/StartCar';
import { StopCar } from '../Functions/StopCar';
import { setColorToInput } from '../Functions/UpdateCar';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { btnsDisable, colorCar, selectCar, SERVICE_MESSAGES } from '../utils/constants';
import { ICar } from '../utils/types';

export class GarageRaceItem extends HTMLelement {
  imgCar: HTMLelement;
  car: ICar;

  constructor(parentNode: HTMLElement, car: ICar) {
    super(parentNode, 'div', ['garage__item']);
    this.car = car;

    const garageBtns = new HTMLelement(this.tagPrnt, 'div', ['garage__btns']);
    const selectBtn = new ColorButton(garageBtns.tagPrnt, ['button__link'], SERVICE_MESSAGES.select);
    const deleteCarBtn = new ColorButton(garageBtns.tagPrnt, ['button__link'], SERVICE_MESSAGES.remove);
    const carName = new HTMLelement(garageBtns.tagPrnt, 'p', [], car.name);

    const garageTrace = new HTMLelement(this.tagPrnt, 'div', ['garage__trace']);
    const itemBtns = new HTMLelement(garageTrace.tagPrnt, 'div', ['item__btns']);

    const startBtn = new ColorButton(itemBtns.tagPrnt, ['button__link'], SERVICE_MESSAGES.start);
    const stopBtn = new ColorButton(itemBtns.tagPrnt, ['button__link'], SERVICE_MESSAGES.stop);
    (stopBtn.tagPrnt as HTMLButtonElement).disabled = true;

    this.imgCar = new HTMLelement(garageTrace.tagPrnt, 'div', ['img__auto']);
    this.imgCar.tagPrnt.innerHTML = Auto(car.color);

    const finishFlag = new HTMLelement(garageTrace.tagPrnt, 'img', ['img__flag']);
    finishFlag.tagPrnt.setAttribute('src', './assets/images/flag.png');

    deleteCarBtn.onClickBtn = () => {
      deleteCar(car.id);
      this.delete();
      showCars();
      CountCarsFun();
    };

    selectBtn.onClickBtn = () => {
      let color = car.color;
      let name = car.name;
      selectCar.color = car.color;
      selectCar.name = car.name;
      selectCar.id = car.id;
      colorCar.push(this.imgCar);
      colorCar.push(carName);
      if (selectCar.color) color = selectCar.color;
      if (selectCar.name) name = selectCar.name;
      setColorToInput(color, name);
      btnsDisable.select = false;
      disableBntSelect();
    };

    startBtn.onClickBtn = () => {
      startCar(car.id, this.imgCar.tagPrnt, startBtn.tagPrnt as HTMLButtonElement);
      disableBntStop(stopBtn.tagPrnt as HTMLButtonElement);
    };

    stopBtn.onClickBtn = () => {
      StopCar(car.id, this.imgCar.tagPrnt);
      btnsDisable.play = false;
      disableBntPlay(startBtn.tagPrnt as HTMLButtonElement);
    };
  }
}
