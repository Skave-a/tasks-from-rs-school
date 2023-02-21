let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

wrapper.innerHTML = `<div class="buttons">
<button class="shuffle">shuffle</button>
<button class="stop">stop</button>
<!-- <button class="safe">safe</button>
<button class="result">result</button> -->
</div>
<select class="level">
<option value="1">3x3</option>
<option value="2" selected>4x4</option>
<option value="3">5x5</option>
<option value="4">6x6</option>
<option value="5">7x7</option>
<option value="6">8x8</option>
</select>
<h1 class="h1">00:00</h1>
<h2 class="score">00</h2>
<img src="src/img/icon-sound.png" alt="sound-on" class="img__sound">
<audio src="src/audio/sound.mp3" id="sound">
  </audio>`;

let container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);
let game = document.createElement('div');
game.classList.add('game');
container.prepend(game);

let widthScreen = window.innerWidth;
let selected = document.querySelector('.level');
let element;
let width = 4;
let height = 4;
let score = document.querySelector('.score');
let scoreOfSteps = 0;

const timer = document.querySelector('.h1');
const stopWatch = document.querySelector('.stop');
let min = 0;
let sec = 0;
let isStopTime = true;

function setSelect() {
  game.innerHTML = "";
  score.innerHTML = `00`;
  scoreOfSteps = 0;

  switch (selected.options.selectedIndex) {
    case 0:
      width = 3;
      height = 3;
      game.innerHTML = "";
      games()
      break;
    case 1:
      width = 4;
      height = 4;
      game.innerHTML = "";
      games()
      break;
    case 2:
      width = 5;
      height = 5;
      game.innerHTML = "";
      games()
      break;
    case 3:
      width = 6;
      height = 6;
      game.innerHTML = "";
      games()
      break;
    case 4:
      width = 7;
      height = 7;
      game.innerHTML = "";
      games();
      break;
    case 5:
      width = 8;
      height = 8;
      game.innerHTML = "";
      games();
      break;
  }
  zeroTime();
}

selected.addEventListener('change', setSelect);

let shuffleGame = document.querySelector('.shuffle');

function setShuffle() {
  score.innerHTML = `00`;
  scoreOfSteps = 0;
  min = 0;
  sec = 0;
  game.innerHTML = "";
  zeroTime();
  //startTimer();
  setSelect();
  games();
}
shuffleGame.addEventListener('click', setShuffle)
//startTimer();

const sound = document.getElementById('sound')

function setSound() {
  sound.play();
}

const imgSound = document.querySelector('.img__sound')

let iconAudio = true;

function changeAudioIcon() {
  if (iconAudio == true) {
    imgSound.src = `src/img/icon-non-sound.png`;
    iconAudio = false;
    sound.volume = 0;
  } else {
    imgSound.src = `src/img/icon-sound.png`;
    iconAudio = true;
    sound.volume = 1;
  }
}

imgSound.addEventListener('click', changeAudioIcon)

function games() {
  let numbers;
  let arr = [];
  let countNum = width * height - 1;

  function createSells() {
    min = 0;
    sec = 0;
    game.innerHTML = "";
    let num = 0;
    for (let x = 0; x < width; ++x) {
      for (let y = 0; y < height; ++y) {
        ++num;
        if (num === height * width) {
          return;
        }

        element = document.createElement('div');
        element.className = 'sell';
        element.textContent = num;

        function setNum(num) {

          return function () {
            changePosition(num);
          }
        }

        element.addEventListener('click', (setNum)(num));

        arr.push(element);
        setPosition(num, x, y);
        game.appendChild(element);
      }
    }
  }
  createSells();

  let arrShuffled = _.shuffle(_.range(0, width * height));

  function setPuzzle() {
    numbers = [];
    //let arrShuffled = _.shuffle(_.range(0, width * height))
    for (let i = 0; i < width * height; i++) {
      for (let x = 0; x < width; ++x) {
        numbers.push([]);
        for (let y = 0; y < height; ++y) {
          let num = arrShuffled[i];
          arrShuffled.splice(arrShuffled.indexOf(num), 1);
          numbers[x].push(num);

          function setNum() {
            if (num === 0) {
              return;
            } else {
              setPosition(num, x, y);
              //console.log('%cMyProject%cline:113%cnum', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(89, 61, 67);padding:3px;border-radius:2px', num)
            }
          }
          setNum()
        }
      }
    }
  }
  setPuzzle()

  function setPosition(num, x, y) {
    let sellPosition = arr[num - 1];
    let numOfMulti;
    if (widthScreen >= 1000) {
      numOfMulti = 7;
    } else if (widthScreen < 1000 && widthScreen >= 700) {
      numOfMulti = 5;
    } else if (widthScreen < 700 && widthScreen >= 450) {
      numOfMulti = 3.5;
    } else {
      numOfMulti = 2;
    }
    if (sellPosition != undefined) {
      sellPosition.style.top = (x * countNum * numOfMulti) + 'px';
      sellPosition.style.left = (y * countNum * numOfMulti) + 'px';
    }
  }


  function changePosition(numb) {
    //console.log(isStopTime)
    let pos = searchNum(numb);
    //console.log('%cMyProject%cline:275%cpos', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(60, 79, 57);padding:3px;border-radius:2px', pos)

    if (isStopTime == true) {
      isStopTime = false;
      //console.log(isStopTime)
      setTime()
    }

    let x = pos.x;
    let y = pos.y;

    if (zeroSell(x + 1, y) === 0) {
      getPos(numb, x, y, x + 1, y);
      scoreOfSteps++
      if (scoreOfSteps < 10) {
        score.innerHTML = `0${scoreOfSteps}`;
      } else {
        score.innerHTML = scoreOfSteps;
      }
      setSound()
    }
    else if (zeroSell(x, y + 1) === 0) {
      getPos(numb, x, y, x, y + 1);
      scoreOfSteps++
      if (scoreOfSteps < 10) {
        score.innerHTML = `0${scoreOfSteps}`;
      } else {
        score.innerHTML = scoreOfSteps;
      }
      setSound()
    }
    else if (zeroSell(x, y - 1) === 0) {
      getPos(numb, x, y, x, y - 1);
      scoreOfSteps++
      if (scoreOfSteps < 10) {
        score.innerHTML = `0${scoreOfSteps}`;
      } else {
        score.innerHTML = scoreOfSteps;
      }
      setSound()
    }
    else if (zeroSell(x - 1, y) === 0) {
      getPos(numb, x, y, x - 1, y);
      scoreOfSteps++
      if (scoreOfSteps < 10) {
        score.innerHTML = `0${scoreOfSteps}`;
      } else {
        score.innerHTML = scoreOfSteps;
      }
      setSound()
    }

    let arr = [];

    function numbersArray() {
      let a = numbers.flat();
      for (let i = 0; i < a.length; i++) {
        if (a[i] != undefined) {
          arr.push(a[i]);
        }
      }
      return arr;
    }
    numbersArray()
    //console.log(arr)
    let arrRight = [];
    for (let a = 1; a < width * height; a++) {
      arrRight.push(a)
    }
    arrRight.push(0)
    //console.log('%cMyProject%cline:324%carrRight', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(95, 92, 51);padding:3px;border-radius:2px', arrRight)
    //console.log(arrRight.join(''))
    //console.log(arr.join(''))

    if (arrRight.join('') == arr.join('')) {
      alert(`Ура! Вы решили головоломку за ${timer.innerHTML} и ${scoreOfSteps} ходов!`);
    }
  }

  function searchNum(num) {
    for (let i = 0; i < numbers.length; ++i) {
      let index = numbers[i].indexOf(num);
      if (index > -1) {
        return { x: i, y: index }
      }
    }
    return false;
  }

  function zeroSell(x, y) {
    if (numbers[x]) {
      return numbers[x][y];
    }
    return null;
  }

  function getPos(numb, x, y, i, k) {
    numbers[x][y] = 0;
    numbers[i][k] = numb;

    function setNum() {
      if (numb === 0) {
        return;
      } else {
        setPosition(numb, i, k);
      }
    }
    setNum()
  }
}
games()

function startTimer() {
  if (isStopTime == true) {
    isStopTime = false;
    setTime();
  }
}

stopWatch.addEventListener('click', stopStopwatch)

function stopStopwatch() {
  if (isStopTime == false) {
    isStopTime = true;
  }
}

function setTime() {
  if (isStopTime == false) {
    sec = parseInt(sec);
    min = parseInt(min);

    sec = sec + 1;
    if (sec == 60) {
      min = Number(min) + 1;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    timer.innerHTML = `${min}:${sec}`;
    setTimeout("setTime()", 1000);
  }
}

function zeroTime() {
  timer.innerHTML = '00:00';
}
