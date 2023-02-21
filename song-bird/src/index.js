import birdsData from './js/birds.js';
import birdsDataEn from './js/birdsEn.js';

let birdsObj = birdsDataEn;

let score = 0;
let round = 0;
let numOfBird = 0;
let pressRight = false;

const birdName = document.querySelector('.audio-player__name');
const quizItems = document.querySelector('.quiz__items');
const btnNext = document.querySelector('.next-level');

//gallery
const gallery = document.querySelector('.gallery');
const galleryGame = document.querySelector('.gallery-game');
const game = document.querySelector('.game');
const galleryBlock = document.querySelector('.gallery-block');
const galleryItems = document.querySelector('.gallery__items');

//quiz
const scoreGame = document.querySelector('#score-game');
scoreGame.innerHTML = 0;

const levelItem = document.querySelectorAll('.level__item');
const audioBird = document.querySelector('.audio__bird');

const listen = document.querySelector('.listen');
const infoBlock = document.querySelector('.info__block');

//greeting
const headerScore = document.querySelector('.header__score');
const greetingStart = document.querySelector('.greeting__start');
const greeting = document.querySelector('.greeting');

//result
const resultsScore = document.querySelector('.results__sc');
const results = document.querySelector('.results');
const resultsRestartBtn = document.querySelector('.results__restart');

//nav
const h1 = document.querySelector('.h1');
const naviResult = document.querySelector('.navi.result');
const naviRestart = document.querySelector('.navi.restart');
const naviMain = document.querySelector('.navi.main');



//functions
clearBirds();
showOptions();
showNextLevel();
numOfBirdRnd();

gallery.addEventListener('click', showGallery);
galleryGame.addEventListener('click', showGame);


function clearBirds() {
  birdName.innerHTML = '*****';
  quizItems.innerHTML = '';
  audioBird.src = 'src/img/quiz-bird.jpg';
  listen.classList.remove('none');
  infoBlock.innerHTML = '';
}

let isRight = false;

function showNextLevel() {
  const quizItemArr = document.querySelectorAll('.quiz__item');
  score += 5;
  quizItemArr.forEach((item, i) => {
    item.addEventListener('click', () => {
      showInfoBird();
      if ((i + 1) == (numOfBird + 1)) {
        pressRight = true;
        isRight = true;
        isPlay = true;
        item.classList.add('yes');
        item.classList.remove('wrong');
        playSoundOk();
        setRightAnswer();
        playAudio();
        //TODO разобраться с этим блоком и удалить его
        infoBlock.innerHTML = `
      <img src="${birdsObj[round][i].image}" alt="bird" class="item__img inf">
      <div class="block__i">
      <h3 class="item__name in">${birdsObj[round][i].name}</h3>
<p class="block__it">${birdsObj[round][i].species}</p>      
      </div>
          <p class="item__description info">${birdsObj[round][i].description}</p>
          <div class="audio-container">
            <div class="audio-player in-gallery">
            <audio src="${birdsObj[round][i].audio}" controls></audio>
            </div> `;
        listen.classList.add('none');
        if (!pressRight) {
          item.classList.add('wrong');
        }

      } else {
        if (score > 0) {
          //TODO разобраться с этим блоком и удалить его
          infoBlock.innerHTML = `
      <img src="${birdsObj[round][i].image}" alt="bird" class="item__img inf">
      <div class="block__i">
      <h3 class="item__name in">${birdsObj[round][i].name}</h3>
<p class="block__it">${birdsObj[round][i].species}</p>      
      </div>
          <p class="item__description info">${birdsObj[round][i].description}</p>
          <div class="audio-container">
            <div class="audio-player in-gallery">
            <audio src="${birdsObj[round][i].audio}" controls></audio>
            </div> `;
          listen.classList.add('none');
          if (!pressRight) {
            item.classList.add('wrong');
          }

          if (!pressRight) {
            item.classList.add('wrong');
            if (!isRight) {
              score--;
            }
            playSoundFail();
          }
        }
      }
    })
  })
}

function setRightAnswer() {
  btnNext.classList.remove('blocked');
  scoreGame.innerHTML = score;
  birdName.innerHTML = birdsObj[round][numOfBird].name;
  audioBird.src = birdsObj[round][numOfBird].image;
}
//TODO после первого клика не выводит информацию
function showInfoBird() {
  const quizItemArr = document.querySelectorAll('.quiz__item');

  quizItemArr.forEach((item, i) => {
    item.addEventListener('click', showMe);

    function showMe() {
      infoBlock.innerHTML = `
      <img src="${birdsObj[round][i].image}" alt="bird" class="item__img inf">
      <div class="block__i">
      <h3 class="item__name in">${birdsObj[round][i].name}</h3>
<p class="block__it">${birdsObj[round][i].species}</p>      
      </div>
          <p class="item__description info">${birdsObj[round][i].description}</p>
          <div class="audio-container">
            <div class="audio-player in-gallery">
            <audio src="${birdsObj[round][i].audio}" controls></audio>
            </div> `;
      listen.classList.add('none');
      if (!pressRight) {
        item.classList.add('wrong');
      }
    }
  })
}


function showOptions() {
  for (let i = 0; i < 6; i++) {
    if (round < 6) {
      quizItems.innerHTML += `
  <li class="quiz__item">
            <span>${birdsObj[round][i].name}</span>
        </li>
        `
    }
  }
}

function showGallery() {
  showGalleryItems();
  game.classList.add('none');
  galleryBlock.classList.remove('none');
  gallery.classList.add('none');
  galleryGame.classList.remove('none');
}
function showGame() {
  galleryBlock.classList.add('none');
  game.classList.remove('none');
  gallery.classList.remove('none');
  galleryGame.classList.add('none');
}

function showGalleryItems() {
  for (let i = 0; i < birdsObj.length; i++) {
    for (let k = 0; k < birdsObj[i].length; k++) {
      if (typeof birdsObj[i][k] != 'number') {
        galleryItems.innerHTML += `
      <li class="gallery__item">
          <img src="${birdsObj[i][k].image}" alt="bird" class="item__img">
          <h3 class="item__name">${birdsObj[i][k].name}</h3>
          <p class="item__description">${birdsObj[i][k].description}</p>
          <div class="audio-container">
            <div class="audio-player in-gallery">
            <audio src="${birdsObj[i][k].audio}" controls></audio>
            </div>
        </li>`;
      }
    }
  }
}

function pressBtn() {
  //console.log('%cMyProject%cline:167%cisRight', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', isRight)
  //console.log('%cMyProject%cline:178%cpressRight', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(1, 77, 103);padding:3px;border-radius:2px', pressRight)
  isPlay = true;
  playAudio();
  if (isRight == true) {
    round++;
    showResults();
    clearBirds();
    btnNext.classList.add('blocked');
    levelItem.forEach(el => {
      el.classList.remove('choosen');
    })
    if (round < 6) {
      //console.log(round)
      levelItem[round].classList.add('choosen');
    }
    showOptions();
    showNextLevel();
  } else {
    alert('Choose the right answer')
  }
  isRight = false;
  pressRight = false;

  numOfBirdRnd();

  if (round < 6) {
    console.log(`Answer - ${birdsObj[round][numOfBird].name}`);
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

btnNext.addEventListener('click', pressBtn);

//-------------------------------------audioStart------------------
//player
const playBtn = document.querySelector('.audio-player__play');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.bar__progress');
const audio = new Audio();

let isPlay = false;
// let levelNum = 0;
// let playNum = 0;

//volume
const volumeOn = document.querySelector('.volume-on');
const volumeBar = document.querySelector('.volume-bar');

let isMute = false;

//actions
playBtn.addEventListener('click', playAudio);
audio.addEventListener('timeupdate', updateProgress);
volumeOn.addEventListener('click', muteMe)
volumeBar.addEventListener('change', changeVolume)

//functions
function playAudio() {
  audio.currentTime = 0;
  if (!isPlay) {
    audio.src = birdsObj[round][numOfBird].audio;
    audio.play();
    isPlay = true;
    playBtn.src = 'src/img/icons/pause.svg';
  } else if (isPlay) {
    audio.pause();
    isPlay = false;
    playBtn.src = 'src/img/icons/play.svg';
  }
}

function updateProgress(ev) {
  const { duration, currentTime } = ev.srcElement;
  const progressPersent = (currentTime / duration) * 100;
  progress.style.width = `${progressPersent}%`;

  if (progressPersent == 100) {
    playAudio();
  }
  progressContainer.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(progressContainer).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false);
}

function muteMe() {
  if (!isMute) {
    audio.muted = true;
    isMute = true;
    volumeOn.src = 'src/img/icons/mute.svg';
    volumeBar.value = 0;
  } else {
    audio.muted = false;
    isMute = false;
    volumeOn.src = 'src/img/icons/volume.svg';
    volumeBar.value = 55;
  }
}

function changeVolume() {
  audio.volume = volumeBar.value / 100;
}

audio.addEventListener('timeupdate', (event) => {
  let currentTime = document.querySelector(".current-time");
  let time = event.target.currentTime;
  let startMin = Math.floor(time / 60);
  let startSec = Math.floor(time % 60);
  if (startSec < 10) {
    startSec = `0${startSec}`;
  }
  currentTime.innerText = `${startMin}:${startSec}`;
});

audio.addEventListener("loadeddata", () => {
  let musicDuartion = document.querySelector(".max-duration");
  let audioDuration = audio.duration;
  let min = Math.floor(audioDuration / 60);
  let sec = Math.floor(audioDuration % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  musicDuartion.innerText = `${min}:${sec}`;
});
//-------------------------------------audioEnd------------------

window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}



function letsGame() {
  headerScore.classList.remove('none');
  gallery.classList.remove('none');
  greeting.classList.add('none');
  game.classList.remove('none');
  console.log(`Answer - ${birdsObj[round][numOfBird].name}`);
}

greetingStart.addEventListener('click', letsGame);

function playSoundOk() {
  let song = document.getElementById('sound-ok');
  song.volume = 1;
  song.play();
}

function playSoundFail() {
  let song = document.getElementById('sound-fail');
  song.volume = 1;
  song.play();
}

function showResults() {
  if (round == 6) {
    game.classList.add('none');
    resultsScore.innerHTML = score;
    results.classList.remove('none');
    if (score == 30) {
      resultsRestartBtn.classList.add('none');
    }
  }
}

function setStartPage() {
  score = 0;
  round = 0;
  scoreGame.innerHTML = 0;
  results.classList.add('none');
  greeting.classList.remove('none');
  gallery.classList.add('none');
  levelItem[round].classList.add('choosen');
  resultsRestartBtn.classList.remove('none');
  levelItem[round].classList.add('choosen');
  clearBirds();
  showOptions();
  showNextLevel();
}

resultsRestartBtn.addEventListener('click', setStartPage);

function numOfBirdRnd() {
  numOfBird = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(0))) + Math.ceil(0);
  return numOfBird;
}

h1.addEventListener('click', () => {
  setStartPage();
  game.classList.add('none')
  galleryBlock.classList.add('none')
  galleryGame.classList.add('none')
  levelItem.forEach(el => {
    el.classList.remove('choosen');
  })

  levelItem[round].classList.add('choosen');

})

naviMain.addEventListener('click', () => {
  setStartPage();
  game.classList.add('none')
  galleryBlock.classList.add('none')
  galleryGame.classList.add('none')
  levelItem.forEach(el => {
    el.classList.remove('choosen');
  })

  levelItem[round].classList.add('choosen');
})

naviRestart.addEventListener('click', () => {
  levelItem.forEach(el => {
    el.classList.remove('choosen');
  })
  setStartPage();
  letsGame();
})

// naviResult.addEventListener('click', () => {

// })
import strings from './js/language.js';

const toggleLang = document.querySelector('#switch');
const langEn = document.querySelector('.lang.en');
const langRu = document.querySelector('.lang.ru');

let language = 'en';

const greetingBird = document.querySelector('.greeting__bird');
const resultImg = document.querySelector('.result__img');



toggleLang.addEventListener('change', () => {
  if (!toggleLang.checked) {
    langEn.classList.add('chousen');
    langRu.classList.remove('chousen');
    greetingBird.classList.remove('greeting__bird-ru')
    resultImg.classList.remove('result__img-ru')
    language = 'en';
    birdsObj = birdsDataEn;
    setAnotherLang(language);
    setStartPage();
  } else {
    langEn.classList.remove('chousen');
    langRu.classList.add('chousen');
    greetingBird.classList.add('greeting__bird-ru')
    resultImg.classList.add('result__img-ru')
    language = 'ru';
    birdsObj = birdsData;
    setAnotherLang(language);
    setStartPage();
  }
})


function setAnotherLang(language) {

  function setString(lang, attribute) {
    if (strings[lang].hasOwnProperty(attribute)) {
      return strings[lang][attribute];
    } else {
      return attribute;
    }
  }

  const stringsArr = document.querySelectorAll('[changeLang]');

  for (const item of stringsArr) {
    item.innerHTML = setString(language, item.getAttribute('changeLang'));
  }
}
