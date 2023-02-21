import { CountCarsFun } from '../Functions/CountCars';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { page } from '../Pagination/Pagination';
import { SERVICE_MESSAGES } from '../utils/constants';
import { GarageRaceItem } from './GarageRaceItem';

export class GarageRace extends HTMLelement {
  cars: GarageRaceItem[];
  wrapper: HTMLelement | undefined;
  countCar: number | undefined;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['garage__items']);
    this.cars = [];
    this.countCars();
  }

  private async countCars(): Promise<void> {
    new HTMLelement(this.tagPrnt, 'p', ['count-of-cars'], `${SERVICE_MESSAGES.garage} (${CountCarsFun()})`);
    new HTMLelement(this.tagPrnt, 'p', ['count-of-page'], `${SERVICE_MESSAGES.page} ${page}`);
    this.wrapper = new HTMLelement(this.tagPrnt, 'div', ['wrapper__garage']);
  }
}
