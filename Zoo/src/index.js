'use strict'

function toggle(className, classActive) {
  const block = document.querySelector(className);
  if (block.classList.contains(classActive)) {
    block.classList.remove(classActive);
  } else {
    block.classList.add(classActive);
  }
}

function hamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav__items');
  const navItem = document.querySelectorAll('.header__item');
  const dark = document.querySelector('.dark');
  const headerLogo = document.querySelector('.header__logo');
  const body = document.querySelector('.body');


  function toggled() {
    toggle('.nav__items', 'active');
    toggle('.hamburger', 'active');
    toggle('.header__logo', 'active');
    toggle('.dark', 'active');
    toggle('.body', 'active');
  }

  hamburger.addEventListener('click', () => {
    toggled();
  });

  document.addEventListener('click', (e) => {
    if (e.target == navItems || e.target == dark) {
      //toggled();
      hamburger.classList.remove('active');
      navItems.classList.remove('active');
      dark.classList.remove('active');
      headerLogo.classList.remove('active');
      body.classList.remove('active');
    }
    navItem.forEach(el => {
      function showEl() {
        hamburger.classList.remove('active');
        navItems.classList.remove('active');
        dark.classList.remove('active');
        headerLogo.classList.remove('active');
        body.classList.remove('active');
      }
      el.addEventListener('click', showEl)
    })

  })
}

hamburger()

let width = window.innerWidth;
const sliderPets = document.querySelector('.slider__blocks');

const animalsCards = document.querySelector('.animals__cards');

function slider() {
  const buttonRight = document.querySelector('.default.rigth.circle');
  const buttonLeft = document.querySelector('.default.left.circle');
  //const cardPhotos = document.querySelectorAll('.card__photo');

  const pets = [
    {
      "name": "giant Pandas",
      "img": "src/img/panda.png",
      "description": "Native to Southwest China",
      "food": "src/img/icons/banana-bamboo_icon.png"
    },
    {
      "name": "Eagles",
      "img": "src/img/eagle.png",
      "description": "Native to South America",
      "food": "src/img/icons/meet-fish_icon.png"
    },
    {
      "name": "Gorillas",
      "img": "src/img/Gorillas.png",
      "description": "Native to Congo",
      "food": "src/img/icons/banana-bamboo_icon.png"
    },
    {
      "name": "Two-toed Sloth",
      "img": "src/img/Sloth.png",
      "description": "Mesoamerica, South America",
      "food": "src/img/icons/banana-bamboo_icon.png"
    },
    {
      "name": "cheetahs",
      "img": "src/img/cheetahs.png",
      "description": "Native to Africa",
      "food": "src/img/icons/meet-fish_icon.png"
    },
    {
      "name": "Penguins",
      "img": "src/img/Penguins.png",
      "description": "Native to Antarctica",
      "food": "src/img/icons/meet-fish_icon.png"
    },
    {
      "name": "Alligators",
      "img": "src/img/Alligators.png",
      "description": "Native to Southeastern U. S.",
      "food": "src/img/icons/meet-fish_icon.png"
    },
    {
      "name": "Gorillas",
      "img": "src/img/Gorillas-2.png",
      "description": "Native to Congo",
      "food": "src/img/icons/banana-bamboo_icon.png"
    }
  ];



  function cardLoad() {
    animalsCards.innerHTML = ""

    let petsArr = _.shuffle(_.range(1, 8)).slice(0, 6);
    let card;
    let countCards;
    if (width >= 1000) {
      countCards = 7;
    } else if (width < 1000) {
      countCards = 4;
    }
    for (let i = 0; i < countCards; i++) {
      card = `<div class="card__photo">
    <div class="black__block">
      <img src="${pets[petsArr[i]].img}" alt="giant Pandas" class="card__img">
      <div class="black"></div>
    </div>
    <div class="card__description">
      <div class="card__sub">
        <p class="card__capt">${pets[petsArr[i]].name}</p>
        <p class="card__subtitle">${pets[petsArr[i]].description}</p>
      </div>
      <img src="${pets[petsArr[i]].food}" alt="icon" class="card__icon">
    </div>
  </div>`;
      animalsCards.innerHTML += card;
    }
    //animatePets('-10%', '1%', 0);

  }

  document.addEventListener("DOMContentLoaded", cardLoad);

  buttonRight.addEventListener('click', () => {
    sliderRight();
    cardLoad();
  });
  buttonLeft.addEventListener('click', () => {
    sliderLeft();
    cardLoad();
  });

}
slider()

const swiper = document.querySelector('.swiper');

function sliderRewie() {
  const swiperLine = document.querySelector('.swiper-line');
  const swiper = document.querySelector('.swiper');


  swiperLine.addEventListener('change', () => {
    if (width >= 1599) {
      if (swiperLine.value == 1) {
        swiper.style.left = '0px';
      } else if (swiperLine.value == 2) {
        swiper.style.left = '-298px';
      } else if (swiperLine.value == 3) {
        swiper.style.left = '-596px';
      } else if (swiperLine.value == 4) {
        swiper.style.left = '-894px';
      } else if (swiperLine.value == 5) {
        swiper.style.left = '-1192px';
      } else if (swiperLine.value == 6) {
        swiper.style.left = '-1490px';
      } else if (swiperLine.value == 7) {
        swiper.style.left = '-1780px';
      } else if (swiperLine.value == 8) {
        swiper.style.left = '-2078px';
      }
    } else if (width >= 1000) {
      if (swiperLine.value == 1) {
        swiper.style.left = '0px';
      } else if (swiperLine.value == 2) {
        swiper.style.left = '-320px';
      } else if (swiperLine.value == 3) {
        swiper.style.left = '-643px';
      } else if (swiperLine.value == 4) {
        swiper.style.left = '-966px';
      } else if (swiperLine.value == 5) {
        swiper.style.left = '-1287px';
      } else if (swiperLine.value == 6) {
        swiper.style.left = '-1609px';
      } else if (swiperLine.value == 7) {
        swiper.style.left = '-1932px';
      } else if (swiperLine.value == 8) {
        swiper.style.left = '-2252px';
      }
    }

  })
}
sliderRewie()


const cardOfRewie = document.querySelectorAll('.swiper-card__back');
const darks = document.querySelector('.darks');
const body = document.querySelector('.body');
const imgX = document.querySelectorAll('.img__x');


function popUp() {

  cardOfRewie.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.add('active');
      swiper.style.position = 'static';
      darks.classList.add('active');
      body.classList.add('active');

    })

    document.addEventListener('click', (e) => {

      imgX.forEach(element => {
        if (e.target == darks || e.target == element) {
          el.classList.remove('active');
          darks.classList.remove('active');
          body.classList.remove('active');
          swiper.style.position = 'relative';
        }
      })

    })

  })

}
popUp()



const sliderL = document.querySelector('.slider-left');
const sliderR = document.querySelector('.slider-right');
const sliderP = document.querySelector('.slider__pets');


function sliderLeft() {
  sliderPets.classList.add('cards-box-left');
  sliderL.innerHTML = sliderP.innerHTML;

  sliderPets.addEventListener('animationend', () => {
    sliderPets.classList.remove('cards-box-left');
  })
}

function sliderRight() {
  sliderPets.classList.add('cards-box-right')
  sliderR.innerHTML = sliderP.innerHTML;

  sliderPets.addEventListener('animationend', () => {
    sliderPets.classList.remove('cards-box-right');
  })
}

//swiper
// const track = document.querySelector(".swiper");
// const range = document.querySelector(".swiper-line");
// const sliderItem = document.querySelector(".swiper-card__back");

// const mediaQueryList = window.matchMedia("(max-width: 1160px)");

// handleResizeChange();

// new ResizeObserver(moveTrack).observe(track)
// mediaQueryList.addEventListener("change", handleResizeChange);
// range.addEventListener("input", moveTrack);

// function handleResizeChange() {
//   if (mediaQueryList.matches) {
//     range.max = 7;
//   } else {
//     range.max = 6;
//   }
// }

// function moveTrack() {
//   const sliderItemWidth = sliderItem.getBoundingClientRect().width
//   const outputValue = range.value * sliderItemWidth + 29;

//   track.style.transform = `translateX(-${outputValue}px)`;
// }