import { App } from './app';

window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#app') as HTMLDivElement;
  new App(rootElement);
});
