export function PopUp(name: string, time: number) {
  const popUp = document.querySelector('.pop-up') as HTMLDivElement;
  // (popUp as HTMLDivElement).style.display = 'block';
  function hide() {
    // (popUp as HTMLDivElement).style.display = 'none';
    (popUp as HTMLDivElement).innerHTML = '';
  }
  setTimeout(hide, 4000);
  (popUp as HTMLDivElement).innerHTML = `
    <p class='pop-up__name'>${name}</p>
    <p class='pop-up__went'>went first</p>
    <p class='pop-up__time'>in ${time} sec</p>
  `;
}
