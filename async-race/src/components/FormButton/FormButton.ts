import { startEngine } from '../API/API-engine';
import { ColorButton } from '../FormColor/ColorButton';
import { setWinners } from '../Functions/CreateWinner';
import { disableBntPlay, disableBntReset, disableBntStop } from '../Functions/DisableBnt';
import { GenerateCars } from '../Functions/GenerateCars';
import { PopUp } from '../Functions/PopUp';
import { carsArr } from '../Functions/ShowCars';
import { ShowWinner } from '../Functions/ShowWinners';
import { startCar } from '../Functions/StartCar';
import { StopCar } from '../Functions/StopCar';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { btnsDisable, SERVICE_MESSAGES, theFirst } from '../utils/constants';

export class FormButton extends HTMLelement {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['color-form']);
    const btnRace = new ColorButton(this.tagPrnt, ['button__link'], SERVICE_MESSAGES.race);
    const btnReset = new ColorButton(this.tagPrnt, ['button__reset'], SERVICE_MESSAGES.reset, true);
    const generateCars = new ColorButton(this.tagPrnt, ['button__link'], SERVICE_MESSAGES.generateCars);

    generateCars.onClickBtn = () => {
      GenerateCars();
    };

    btnRace.onClickBtn = async () => {
      this.startRaceAll();
      btnsDisable.reset = false;
      disableBntReset();
    };

    btnReset.onClickBtn = () => {
      const cars = Array.from(document.querySelectorAll('.img__auto'));
      cars.forEach(async (car) => {
        if (car) {
          StopCar(2, car as HTMLElement);
        }
      });
      btnsDisable.reset = true;
      const main = Array.from(document.querySelectorAll('.garage__item'));
      disableBntReset();
      btnsDisable.play = false;
      btnsDisable.stop = false;
      main.forEach(async (el) => {
        const btn = (el.lastChild as HTMLElement).firstChild?.firstChild as HTMLButtonElement;
        disableBntPlay(btn);
        disableBntStop(btn.nextSibling as HTMLButtonElement);
      });
    };
  }

  private async startRaceAll(): Promise<void> {
    const arr = carsArr.map(async (el) => {
      const btn = el.tagPrnt.lastChild?.firstChild?.firstChild as HTMLButtonElement;
      const img = el.tagPrnt.lastChild?.childNodes[1];
      await startCar(el.car.id, img as HTMLElement, btn);
      return el;
    });
    const result = await Promise.race(arr).then((result) => {
      return result;
    });
    theFirst.name = result.car.name;
    theFirst.id = result.car.id;
    const { velocity, distance } = await startEngine(theFirst.id);
    const winner = {
      id: theFirst.id,
      time: Number(((distance / velocity) / 1000).toFixed(2)),
    };
    await setWinners(winner);
    PopUp(theFirst.name, winner.time);
    ShowWinner(1);
  }
}
