const blocks = document.querySelector('.pop-up__item.blocks');
const general = document.querySelector('.pop-up__item.general');
const about = document.querySelector('.pop-up__item.about');

const generalA = document.querySelector('.pop-up__general');
const blocksA = document.querySelector('.pop-up__blocks');
const aboutA = document.querySelector('.pop-up__about');

const popButton = document.querySelector('.pop-up__button');
const popUp = document.querySelector('.pop-up');

const popUpContainer = document.querySelector('.pop-up-container');

function appearBlocks() {
  general.classList.remove('pop-up__bold-link');
  about.classList.remove('pop-up__bold-link')
  blocks.classList.add('pop-up__bold-link')
  generalA.classList.add('none');
  aboutA.classList.add('none');
  blocksA.classList.remove('none');
}
blocks.addEventListener('click', appearBlocks)

function appearAbout() {
  general.classList.remove('pop-up__bold-link');
  blocks.classList.remove('pop-up__bold-link')
  about.classList.add('pop-up__bold-link')
  generalA.classList.add('none');
  blocksA.classList.add('none');
  aboutA.classList.remove('none');
}
about.addEventListener('click', appearAbout)

function appearGeneral() {
  blocks.classList.remove('pop-up__bold-link');
  about.classList.remove('pop-up__bold-link')
  general.classList.add('pop-up__bold-link')
  blocksA.classList.add('none');
  aboutA.classList.add('none');
  generalA.classList.remove('none');
}
general.addEventListener('click', appearGeneral)

function appearPopUp() {
  let openPopUp = false;
  if (!openPopUp) {
    popUp.classList.remove('none')
    popUpContainer.classList.add('active')
    openPopUp = true;
  } else {
    popUp.classList.add('none')
    popUpContainer.classList.remove('active')
    openPopUp = false;
  }
}

popButton.addEventListener('click', appearPopUp)

// document.addEventListener('click', (e) => {
//   if (e.target != popUp || e.target != popButton) {
//     popUp.classList.add('none');
//   }
// })

document.addEventListener('click', (e) => {
  if (e.target == popUpContainer) {
    popUp.classList.add('none');
    popUpContainer.classList.remove('active')
  }
})