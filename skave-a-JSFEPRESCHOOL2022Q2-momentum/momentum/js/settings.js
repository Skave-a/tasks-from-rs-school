//TIME

const setTime = document.getElementById('settingTime');
function settingTime() {
  const time = document.querySelector('.time');

  //setTime.checked = localStorage.getItem('setTime');


  //console.log(setTime.checked)
  if (setTime.checked == true) {
    time.classList.remove('visible')
    localStorage.setItem('setTi', JSON.stringify(true))

  } else {
    time.classList.add('visible')
    localStorage.setItem('setTi', JSON.stringify(false))

  }
}
setTime.addEventListener('change', settingTime)

//DATE

const setDate = document.getElementById('settingDate');
function settingDate() {
  const date = document.querySelector('.date');
  if (setDate.checked == true) {
    date.classList.remove('visible')
  } else {
    date.classList.add('visible')
  }
}
setDate.addEventListener('click', settingDate)

//Greet

const setGreet = document.getElementById('settingGreet');
function settingGreet() {
  const greet = document.querySelector('.greeting-container');
  if (setGreet.checked == true) {
    greet.classList.remove('visible')
  } else {
    greet.classList.add('visible')
  }
}
setGreet.addEventListener('click', settingGreet)

//Quote

const setQuote = document.getElementById('settingQuote');
function settingQuote() {
  const quote = document.querySelector('.footer');
  if (setQuote.checked == true) {
    quote.classList.remove('visible')
  } else {
    quote.classList.add('visible')
  }
}
setQuote.addEventListener('click', settingQuote)

//Weather

const setWeather = document.getElementById('settingWeather');
function settingWeather() {
  const weather = document.querySelector('.weather');
  if (setWeather.checked == true) {
    weather.classList.remove('visible')
  } else {
    weather.classList.add('visible')
  }
}
setWeather.addEventListener('click', settingWeather)

//Audio

const setAudio = document.getElementById('settingAudio');
function settingAudio() {
  const audio = document.querySelector('.player');
  if (setAudio.checked == true) {
    audio.classList.remove('visible')
  } else {
    audio.classList.add('visible')
  }
}
setAudio.addEventListener('click', settingAudio)

// //TIME

const setToDoP = document.getElementById('settingToDo');
function settingToDo() {
  const todo = document.querySelector('.todo-p');
  if (setToDoP.checked == true) {
    todo.classList.remove('visible')
  } else {
    todo.classList.add('visible')
  }
}
setToDoP.addEventListener('click', settingToDo)

