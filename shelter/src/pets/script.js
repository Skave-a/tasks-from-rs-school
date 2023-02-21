'use strict'


function toggleBurger() {
  const btn = document.querySelector('.hamburger-pet');
  const overlay = document.querySelector('.overlay');
  function toggleActiveClass(classNameBlock, toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if (block.classList.contains(toggleClassName)) {
      block.classList.remove(toggleClassName);
      document.body.style.overflow = 'visible';
    } else {
      block.classList.add(toggleClassName);
      document.body.style.overflow = 'hidden';
    }

  }
  btn.addEventListener('click', () => {
    toggleActiveClass('.header__nav', 'active');
    toggleActiveClass('.hamburger-pet', 'active');
    toggleActiveClass('.header__wrap', 'active');
    toggleActiveClass('.overlay', 'active');
    toggleActiveClass('.header__logo', 'active');
  })
  overlay.addEventListener('click', (e) => {
    toggleActiveClass('.header__nav', 'active');
    toggleActiveClass('.header__wrap', 'active');
    toggleActiveClass('.hamburger-pet', 'active');
    toggleActiveClass('.overlay', 'active');
  })
}
toggleBurger()



const pets = [
  {
    "name": "Jennifer",
    "img": "../images/our_pets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../images/our_pets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../images/our_pets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../images/our_pets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../images/our_pets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../images/our_pets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../images/our_pets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../images/our_pets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];


let modal = document.querySelector('.pop-up');
let sliderBtns = document.querySelectorAll('.ourfriends__buttons');
let width = window.innerWidth;
let sliderInner = document.querySelector('.ourfriends__block');
let sliderOuter = document.querySelector('.slider-pets');


function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let petStack = [];
let octStack = [];

let k;

function cardLoad() {

  switch (petStack.length) {
    case 0:
      k = 4;
      break;
    case 1:
      k = 0;
      break;
    case 2:
      k = 2;
      break;
    case 3:
      k = 1;
      break;
    case 4:
      k = 5;
      break;
    case 5:
      k = 7;
      break;
    case 6:
      k = 3;
      break;
    case 7:
      k = 6;
      break;
    default:
      k = getRandomNumberBetween(0, 7);
  }

  petStack.push(k);

  if (petStack.length > 8) {
    if (octStack.length >= 8) {
      octStack = [];
    }
    while (octStack.includes(k)) {
      k = getRandomNumberBetween(0, 7);
    }
    octStack.push(k);
  }

  let cardWrapper = `<div class="ourfriends__item" id="pop-up__open" onclick="openModal(${k})">
                        <img src="${pets[k].img}" alt="${pets[k].img}" class="ourfriends__pic">
                        <p class="ourfriends__name">${pets[k].name}</p>
                        <button class="ourfriends__button" data-modal="${k}">Learn more</button>
                    </div>`;

  sliderInner.innerHTML += cardWrapper;
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 48; i++) {
    cardLoad();
  }
})

function openModal(k) {

  modal.classList.add('active');

  let modalWrapper = `
    <div class="pop-up__container">
        <div class="pop-up__button">
            <button class="button__round exit" id="pop-up__close" onclick="closeModal()">
            <img src="../images/icons/exit.png" alt="exit" class="friends__arrow">
            </button>
            <div class="pop-up__body" id="pop-up__body">
                <img src="${pets[k].img}" alt="${pets[k].name}" class="pop-up__img">
                <div class="pop-up__article">
                    <h3 class="pop-up__name">${pets[k].name}</h3>
                    <h4 class="pop-up__breed">${pets[k].type} - ${pets[k].breed}</h4>
                    <p class="pop-up__description">${pets[k].description}</p>
                    <ol class="pop-up__list">
                        <li class="pop-up__age"><b>Age:</b> ${pets[k].age}</li>
                        <li class="pop-up__inoculations"><b>Inoculations:</b> ${pets[k].inoculations.join()}</li>
                        <li class="pop-up__diseases"><b>Diseases:</b> ${pets[k].diseases.join()}</li>
                        <li class="pop-up__parasites"><b>Parasites:</b> ${pets[k].parasites.join()}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>`;

  modal.innerHTML = modalWrapper;

  const openPopUp = document.getElementById('pop-up__open');
  const closePopUp = document.getElementById('pop-up__close');
  const popUp = document.getElementById('pop-up');

  openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
  })
  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.style.overflow = 'visible';
  })
  popUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.style.overflow = 'visible';
  })

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.innerHTML = '';
  modal.classList.remove('active');
  document.body.style.overflow = 'visible';
}

let firstPageBtn = document.querySelector('.first__page');
let prevPageBtn = document.querySelector('.prev__page');
let nextPageBtn = document.querySelector('.next__page');
let lastPageBtn = document.querySelector('.last__page');
let page__count = document.querySelector('.num__page');
let y = sliderInner.style.top;
let x = sliderInner.style.left;

function pageCount() {
  if (width >= 1280) {
    page__count.textContent = `${-y / 930 + 1}`;
  } else if (width >= 768 && width < 1280) {
    page__count.textContent = `${-y / 1395 + 1}`;
  } else {
    page__count.textContent = `${-y / 1395 + 1}`;
  }
  if (page__count.textContent == Math.floor(sliderInner.offsetHeight / sliderOuter.offsetHeight)) {
    lastPageBtn.classList.add('button__inactive');
    nextPageBtn.classList.add('button__inactive');
    firstPageBtn.classList.remove('button__inactive');
    prevPageBtn.classList.remove('button__inactive');
  }
  else if (page__count.textContent == 1) {
    lastPageBtn.classList.remove('button__inactive');
    nextPageBtn.classList.remove('button__inactive');
    firstPageBtn.classList.add('button__inactive');
    prevPageBtn.classList.add('button__inactive');
  }
  else {
    lastPageBtn.classList.remove('button__inactive');
    nextPageBtn.classList.remove('button__inactive');
    firstPageBtn.classList.remove('button__inactive');
    prevPageBtn.classList.remove('button__inactive');
  }
}

nextPageBtn.addEventListener('click', () => {
  if (width >= 1280) {
    y = y - 930;
    if (y < -4650) {
      y = -4650;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 1280 && width >= 768) {
    y = y - 1395;
    if (y < - 9765) {
      y = - 9765;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 758) {
    y = y - 1395;
    if (y < - 20925) {
      y = - 20925;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
})

lastPageBtn.addEventListener('click', () => {
  if (width >= 1280) {
    y = -4650;
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 1280 && width >= 768) {
    y = -9765;
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 768) {
    y = -20925;
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
})

prevPageBtn.addEventListener('click', () => {
  if (width >= 1280) {
    y = y + 930;
    if (y >= 0) {
      y = 0;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 1280 && width >= 768) {
    y = y + 1395;
    if (y >= 0) {
      y = 0;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
  else if (width < 768) {
    y = y + 1395;
    if (y >= 0) {
      y = 0;
    }
    pageCount();
    sliderInner.style.top = `${y}px`;
  }
})

firstPageBtn.addEventListener('click', () => {
  y = 0;
  pageCount();
  sliderInner.style.top = 0;
})

window.onresize = function () {
  width = window.innerWidth;
  y = 0;
  pageCount();
  sliderInner.style.top = 0;
}