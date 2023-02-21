'use strict'

function toggleBurger() {
    const btn = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay');
    //const links = document.querySelector('.header__links.close__burger');
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
        toggleActiveClass('.header__wrapper', 'active');
        toggleActiveClass('.hamburger', 'active');
        toggleActiveClass('.overlay', 'active');
        toggleActiveClass('.header__logo', 'active');
    })
    overlay.addEventListener('click', (e) => {
        toggleActiveClass('.header__nav', 'active');
        toggleActiveClass('.header__wrapper', 'active');
        toggleActiveClass('.hamburger', 'active');
        toggleActiveClass('.overlay', 'active');
        toggleActiveClass('.header__logo', 'active');
    })
    // links.addEventListener('click', (e) => {
    //     toggleActiveClass('.header__nav', 'active');
    //     toggleActiveClass('.header__wrapper', 'active');
    //     toggleActiveClass('.hamburger', 'active');
    //     toggleActiveClass('.overlay', 'active');
    //     toggleActiveClass('.header__logo', 'active');
    // })

}
toggleBurger()

const pets = [
    {
        "name": "Jennifer",
        "img": "src/images/our_pets/pets-jennifer.png",
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
        "img": "src/images/our_pets/pets-sophia.png",
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
        "img": "src/images/our_pets/pets-woody.png",
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
        "img": "src/images/our_pets/pets-scarlet.png",
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
        "img": "src/images/our_pets/pets-katrine.png",
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
        "img": "src/images/our_pets/pets-timmy.png",
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
        "img": "src/images/our_pets/pets-freddie.png",
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
        "img": "src/images/our_pets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];


let sliderOuter = document.querySelector('.slider');
let sliderInner = document.querySelector('.friends__cats');
let leftBtn = document.querySelector('.button-arrow-1');
let rightBtn = document.querySelector('.button-arrow-2');
let x = sliderInner.style.left;
let petsWidth = sliderInner.offsetWidth;
let width = window.innerWidth;

// random 
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let petStack = [];

function slideLoad() {
    let k = getRnd(0, 7);

    while (petStack.includes(k)) {
        k = getRnd(0, 7);
    }

    if (petStack.length == 0) {
        k = 4;
    } else if (petStack.length == 1) {
        k = 0;
    } else if (petStack.length == 2) {
        k = 2;
    }

    petStack.push(k);

    let petWrap = `<div class="friends__cats" id="pop-up__open">
        <div class="card-pic" onclick="openModal(${k})">
            <img class="card-img" src="${pets[k].img}" alt="${pets[k].type} ${pets[k].name}">
            <p class="card-name">${pets[k].name}</p>
            <button class="button__bordered" data-modal="${k}">Learn more</button>
        </div>
    </div>`;

    sliderInner.innerHTML += petWrap;
}

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 6; i++) {
        slideLoad();
    }
})

function slideAppend(petsWidth) {
    sliderInner.style.width = `${petsWidth}px`;
    console.log(petsWidth)
    if (width >= 1280) {
        petStack.shift();
        petStack.shift();
        petStack.shift();
        for (let i = 0; i < 3; i++) {
            slideLoad();
        }
    }
    else if (width < 1280 && width >= 768) {
        petStack.shift();
        petStack.shift();
        for (let i = 0; i < 2; i++) {
            slideLoad();
        }
    }
    else if (width < 767) {
        petStack.shift();
        slideLoad();
    }
}

rightBtn.addEventListener('click', () => {
    if (width < 768) {
        x = x - 270;
        petsWidth = sliderInner.offsetWidth + 270;
        slideAppend(petsWidth);
    }
    else if (768 <= width && width < 1279) {
        x = x - 310 * 2;
        petsWidth = sliderInner.offsetWidth + 620;
        slideAppend(petsWidth);
    }
    else {
        x = x - 360 * 3;
        petsWidth = sliderInner.offsetWidth + 1080;
        slideAppend(petsWidth)
    }
    sliderInner.style.left = `${x}px`;
});

leftBtn.addEventListener('click', () => {
    if (width < 768) {
        x = x + 270;
    }
    else if (768 <= width && width < 1279) {
        x = x + 310 * 2;
    }
    else {
        x = x + 360 * 3;
    }
    if (x > 0) {
        x = 0;
    }
    sliderInner.style.left = `${x}px`;
});


// POP-UP

let modal = document.querySelector('.pop-up');

function openModal(k) {

    modal.classList.add('active');

    let modalWrapper = ` 
    <div class="pop-up__container">
        <div class="pop-up__button">
            <button class="button__round exit" id="pop-up__close"><img
                    src="src/images/icons/exit.png" alt="exit" class="friends__arrow"></button>
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


let body = document.getElementById('pop-up__body');

// function stopDefAction(evt) {
//     evt.cancelBubble;
//     //evt.preventDefault();
// }

// document.getElementById('pop-up__body').addEventListener(
//     'click', stopDefAction(), false
// );


body.onclick = function (event) {
    event = event || window.event
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true)
}
