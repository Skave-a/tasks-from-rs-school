import { Form } from '../Form/Form';
import { showCars } from '../Functions/ShowCars';
import { GarageRace } from '../GarageRace/GarageRace';
import { HTMLelement } from '../HTMLelement/HTMLelement';
import { Pagination } from '../Pagination/Pagination';
import { PopUp } from '../PopUp/PopUp';

export class Garage extends HTMLelement {
  private form;
  private garageRace: GarageRace | undefined;
  private pagination: Pagination;
  private cars;
  private popUp: PopUp;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['garage__wrapper']);
    this.form = new Form(this.tagPrnt);
    this.garageRace = new GarageRace(this.tagPrnt);
    this.cars = showCars();
    this.pagination = new Pagination(this.tagPrnt);
    this.popUp = new PopUp(this.tagPrnt);
  }
}
