import './assets/styles/normalize.scss';
import './assets/styles/reset.scss';
import './assets/styles/global.scss';
import { Header } from './components/Header/Header';
import { Garage } from './components/Garage/Garage';
import { HTMLelement } from './components/HTMLelement/HTMLelement';
import { Winners } from './components/Winners/Winners';

export class App {
  private main;
  private garage;
  private winners;
  private footer;

  constructor(private rootElement: HTMLElement) {
    new Header(this.rootElement);
    this.main = new HTMLelement(this.rootElement, 'main', ['main']);
    this.garage = new Garage(this.main.tagPrnt);
    this.winners = new Winners(this.main.tagPrnt);
    this.footer = new HTMLelement(this.rootElement, 'footer', ['footer']);
  }
}
