'use strict'

function hamburger() {
  const hamburger = document.querySelector('.hamburger');
  const nav__items = document.querySelector('.nav__items');
  const nav__item = document.querySelectorAll('.nav__itema');
  const nav = document.querySelector('.nav');
  const bodyM = document.querySelector('.body');
  function toggle(className, classActive) {
    const block = document.querySelector(className);
    if (block.classList.contains(classActive)) {
      block.classList.remove(classActive);
      //document.header.style.overflow = 'visible';
    } else {
      block.classList.add(classActive);
      //document.header.style.overflow = 'hidden';
    }
  }
  hamburger.addEventListener('click', () => {
    toggle('.hamburger', 'active');
    toggle('.nav__items', 'active');
    toggle('.nav', 'active');
    toggle('.body', 'active');
  })
  document.addEventListener('click', (e) => {
    if (e.target == nav || e.target == nav__item) {
      hamburger.classList.remove('active');
      nav__items.classList.remove('active');
      nav.classList.remove('active');
      bodyM.classList.remove('active');
    }
  })
  for (let i = 0; i < nav__item.length; i++) {
    nav__item[i].addEventListener("click", () => {
      hamburger.classList.remove('active');
      nav__items.classList.remove('active');
      nav.classList.remove('active');
      bodyM.classList.remove('active');
    });
  }
  // nav__item.addEventListener('click', () => {
  //   hamburger.classList.remove('active');
  //   nav__items.classList.remove('active');
  //   nav.classList.remove('active');
  // })
}
hamburger();

function login() {
  const login = document.querySelector('.header__button');
  const pop_up = document.querySelector('.pop-up__container');
  const pop_upOpen = document.querySelector('.pop-up');
  const bodyM = document.querySelector('.body');
  login.addEventListener('click', () => {
    pop_up.classList.add('active');
    bodyM.classList.add('active');
    pop_upOpen.classList.add('active');
  })
  document.addEventListener('click', (e) => {
    if (e.target == pop_up) {
      pop_up.classList.remove('active');
      pop_upOpen.classList.remove('active');
      bodyM.classList.remove('active');
    }
  })
}
login()

function signU() {
  const signUp = document.querySelector('.pop-up__s');
  signUp.addEventListener('click', () => {
    const login = document.getElementById('email');
    const password = document.getElementById('password');
    alert(`Login: ${login.value} \nPassword: ${password.value}`);
  })
}
signU()


// function signUp() {
//   const signUp = document.querySelector('.pop-up__sigh-up');
//   const pop_up = document.querySelector('.pop-up__container2');
//   const pop_upOpen = document.querySelector('.pop-up2');
//   const pop_up1 = document.querySelector('.pop-up__container');
//   const pop_upOpen1 = document.querySelector('.pop-up');
//   const bodyM = document.querySelector('.body');
//   signUp.addEventListener('click', () => {
//     pop_up.classList.add('active');
//     pop_upOpen.classList.add('active');
//     bodyM.classList.add('active');
//     pop_up1.classList.remove('active');
//     pop_upOpen1.classList.remove('active');
//   })
//   document.addEventListener('click', (e) => {
//     if (e.target == pop_up) {
//       _popup.classList.remove('active');
//       pop_upOpen.classList.remove('active');
//       bodyM.classList.remove('active');
//     }
//   })
// }
// signUp()

function signUp() {
  const signUp = document.querySelector('.pop-up__sigh-up');
  const popUpFc = document.querySelector('.pop-up__fc');
  const popUpGl = document.querySelector('.pop-up__gl');
  const popUpOr = document.querySelector('.pop-up__or');
  const popUpLink = document.querySelector('.pop-up__link');
  const pop_up = document.querySelector('.pop-up__container');
  const popUpCaptin = document.querySelector('.pop-up__captin');
  const popUpCapt = document.querySelector('.pop-up__capt');
  const needAcc = document.querySelector('.need__acc');
  const dontAcc = document.querySelector('.dont__acc');
  const popUpS = document.querySelector('.pop-up__s');


  signUp.addEventListener('click', () => {
    popUpFc.classList.add('active');
    popUpGl.classList.add('active');
    popUpOr.classList.add('active');
    popUpLink.classList.add('active');
    popUpCaptin.classList.add('active');
    popUpCapt.classList.add('active');
    needAcc.classList.add('active');
    dontAcc.classList.add('active');
    popUpS.classList.add('active');

  })
  document.addEventListener('click', (e) => {
    if (e.target == pop_up) {
      popUpFc.classList.remove('active');
      popUpGl.classList.remove('active');
      popUpOr.classList.remove('active');
      popUpLink.classList.remove('active');
      popUpCaptin.classList.remove('active');
      popUpCapt.classList.remove('active');
      needAcc.classList.remove('active');
      dontAcc.classList.remove('active');
      popUpS.classList.remove('active');

    }

  })
}
signUp()

// function slider_max() {
//   const slider = document.querySelector('.destinations__blocks');
//   const radio_1 = document.querySelector('.sl1');
//   const radio_2 = document.querySelector('.sl2');
//   const radio_3 = document.querySelector('.sl3');
//   const arrowLeft = document.querySelector('.left');
//   const arrowRight = document.querySelector('.right');
//   let width = window.innerWidth;

//   radio_1.addEventListener('click', () => {
//     if (width < 630) {
//       slider.style.right = '0';
//     }
//     slider.classList.remove('active-2', 'active-3');
//     slider.classList.add('active-1');
//   })
//   radio_2.addEventListener('click', () => {
//     if (width < 630) {
//       slider.style.right = '0';
//     }
//     slider.classList.remove('active-1', 'active-3');
//     slider.classList.add('active-2');
//   })
//   radio_3.addEventListener('click', () => {
//     if (width < 630) {
//       slider.style.right = '0';
//     }
//     slider.classList.remove('active-1', 'active-2');
//     slider.classList.add('active-3');
//   })
//   let size = 0;
//   arrowLeft.addEventListener('click', () => {
//     slider.classList.remove('active-1', 'active-2', 'active-3');
//     size += -116.5;
//     if (size < 0) size = 233;
//     slider.style.right = size + '%';
//   })
//   arrowRight.addEventListener('click', () => {
//     slider.classList.remove('active-1', 'active-2', 'active-3');
//     size += 116.5;
//     if (size > 233) size = 0;
//     slider.style.right = size + '%';
//   })

// }
// slider_max()

function slider_max() {
  const slider = document.querySelector('.destinations__blocks');
  const radio_1 = document.querySelector('.slider__button.first');
  const radio_2 = document.querySelector('.slider__button.second');
  const radio_3 = document.querySelector('.slider__button.last');
  const dBlock_1 = document.querySelector('.destinations__block.first');
  const dBlock_2 = document.querySelector('.destinations__block.second');
  const dBlock_3 = document.querySelector('.destinations__block.last');
  const arrowLeft = document.querySelector('.left');
  const arrowRight = document.querySelector('.right');
  let width = window.innerWidth;

  if (width < 630) {
    radio_2.classList.remove('active');
    radio_3.classList.remove('active');
    radio_1.classList.add('active');
  }

  radio_1.addEventListener('click', () => {
    if (width < 630) {
      slider.style.right = '0';
    } else {
      slider.style.right = '-32rem';
    }
    radio_2.classList.remove('active');
    radio_3.classList.remove('active');
    radio_1.classList.add('active');
  })
  radio_2.addEventListener('click', () => {
    if (width < 630) {
      slider.style.right = '42rem';
    } else {
      slider.style.right = '54rem';
    }
    radio_1.classList.remove('active');
    radio_3.classList.remove('active');
    radio_2.classList.add('active');
  })
  radio_3.addEventListener('click', () => {
    if (width < 630) {
      slider.style.right = '84rem';
    } else {
      slider.style.right = '140rem';
    }
    radio_1.classList.remove('active');
    radio_2.classList.remove('active');
    radio_3.classList.add('active');
  })

  dBlock_1.addEventListener('click', () => {
    if (width < 630) {
      slider.style.right = '0';
    } else {
      slider.style.right = '-32rem';
    }
    radio_2.classList.remove('active');
    radio_3.classList.remove('active');
    radio_1.classList.add('active');
  })
  dBlock_2.addEventListener('click', () => {
    if (width < 630) {
      slider.style.right = '0';
    } else {
      slider.style.right = '54rem';
    }
    radio_1.classList.remove('active');
    radio_3.classList.remove('active');
    radio_2.classList.add('active');
  })
  dBlock_3.addEventListener('click', () => {
    if (width < 630) {
      slider.style.right = '0';
    } else {
      slider.style.right = '140rem';
    }
    radio_1.classList.remove('active');
    radio_2.classList.remove('active');
    radio_3.classList.add('active');
  })
  let size = 0;
  arrowLeft.addEventListener('click', () => {
    slider.classList.remove('active-1', 'active-2', 'active-3');
    size += -116.5;
    if (size < 0) size = 233;
    slider.style.right = size + '%';
    mainSize()
  })
  arrowRight.addEventListener('click', () => {
    slider.classList.remove('active-1', 'active-2', 'active-3');
    size += 116.5;
    if (size > 233) size = 0;
    slider.style.right = size + '%';
    mainSize()
  })
  function mainSize() {
    if (size == 233) {
      radio_1.classList.remove('active');
      radio_2.classList.remove('active');
      radio_3.classList.add('active');
    } else if (size == 0) {
      radio_3.classList.remove('active');
      radio_2.classList.remove('active');
      radio_1.classList.add('active');
    } else {
      radio_1.classList.remove('active');
      radio_3.classList.remove('active');
      radio_2.classList.add('active');
    }
  }

}
slider_max()

// console.log(` 
// Оценка - 100б\n
// 1. Вёрстка валидная +10 \n
// 2. Вёрстка семантическая +20\n
//     В коде странице присутствуют следующие элементы:\n
// <header>, <main>, <footer> +3\n
// четыре элемента <section> (по количеству секций) +3\n
// только один заголовок <h1> +3\n
// три заголовка <h2> +3\n
// один элемент <nav> (панель навигации) +3\n
// два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n
// четыре кнопки <button> +2\n
// 3. Вёрстка соответствует макету +48\n
// блок <header> +6\n
// секция preview +9\n
// секция steps +9\n
// секция destinations +9\n
// секция stories +9\n
// блок <footer> +6\n
// 4. Требования к css + 12\n
// для построения сетки используются флексы или гриды +2\n
// при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n
// фоновый цвет тянется на всю ширину страницы +2\n
// иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n
// изображения добавлены в формате .jpg +2\n
// есть favicon +2\n
// 5. Интерактивность, реализуемая через css +20\n
// плавная прокрутка по якорям +5\n
// ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n
// интерактивность +5\n
// обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5`)

// console.log(`
// Оценка - 75б\n
// Вёрстка соответствует макету. \nШирина экрана 390px +48 \n    блок <header> +6 \n    секция preview +9 \n    секция steps +9 \n    секция destinations +9 \n    секция stories +9 \n    блок <footer> +6 \n\n
// Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n\n
// нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n\n
// нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n\n
// На ширине экрана 390рх и меньше реализовано адаптивное меню +22 \n\n
// при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2 \n\n
// при нажатии на бургер-иконку плавно появляется адаптивное меню +4 \n\n
// адаптивное меню соответствует макету +4 \n\n
// при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4 \n\n
// ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню) \n\n
// при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4") \n\n`)

console.log(`
 Оценка - 100б\n
 1. Слайдер изображений в секции destinations +50\n
 на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа) + 20\n
 Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20
 Анимации плавного перемещения для слайдера +10\n
 2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n
 логин попап соответствует верстке его закрытие происходит при клике вне попапа +25\n
 логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку логин показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25\n
 3. Дополнительный функционал: сверстать в произвольной форме Sign Up попап который заменяет верстку предложенного логин попапа с тем же функционалом (инпуты и кнопка) +25\n`)