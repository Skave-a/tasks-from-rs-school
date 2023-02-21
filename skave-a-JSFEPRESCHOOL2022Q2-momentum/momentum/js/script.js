// import clock from './clock_and_calendar.js';
// clock()

const setLanguage = document.getElementById('settingLanguage');
let language = "english";
function settingLanguage() {
  if (setLanguage.checked == true) {
    language = "english";
  } else {
    language = "russian";
  }
  showTime();
  showGreeting();
  getQuotes();
  //getWeather()
  setRuPlaceholder()
  setRuSettings()
  getWeather()
  setEnCity()
}
setLanguage.addEventListener('click', settingLanguage)

// Вывести время
function showTime() {
  const time = document.querySelector('.time');
  const date = new Date();
  time.textContent = date.toLocaleTimeString();
  setTimeout(showTime, 1000);
  showDate();
  showGreeting()
}
showTime();


// Вывести дату
function showDate() {
  const day = document.querySelector('.date');
  const date = new Date();
  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  if (language == "english") {
    day.textContent = date.toLocaleDateString('en-US', options);
  } else {
    options = { month: 'long', day: 'numeric', year: 'numeric' };
    day.textContent = date.toLocaleDateString('ru-RU', options);
  }
  setTimeout(showTime, 1000);
}


//Определить время суток
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  //const getTimeOf = () => (hours < 7) ? 'night' : (hours < 13) ? 'morning' : (hours < 19) ? 'afternoon' : 'evening';
  function getTimeOf() {
    if (language == "english") {
      if (hours < 7) {
        return 'night';
      } else if (hours < 13) {
        return 'morning';
      } else if (hours < 19) {
        return 'afternoon';
      } else {
        return 'evening';
      }
    } else {
      if (hours < 7) {
        return 'ночи';
      } else if (hours < 13) {
        return 'утро';
      } else if (hours < 19) {
        return 'день';
      } else {
        return 'вечер';
      }
    }
  }
  return getTimeOf();
}


// Вывести приветствие
function showGreeting() {
  const greeting = document.querySelector('.greeting');
  if (language == "english") {
    greeting.textContent = `Good ${getTimeOfDay()},`;
  } else {
    //console.log(getTimeOfDay())
    if (getTimeOfDay() == 'ночи') {
      greeting.textContent = `Доброй ${getTimeOfDay()},`;
    } else if (getTimeOfDay() == 'вечер' || getTimeOfDay() == 'день') {
      greeting.textContent = `Добрый ${getTimeOfDay()},`;
    } else {
      greeting.textContent = `Доброе ${getTimeOfDay()},`;
    }
  }
}

function setRuPlaceholder() {
  if (language == "english") {
    document.querySelector('.name').placeholder = "[Enter name]";
  } else {
    document.querySelector('.name').placeholder = "[Введите имя]";
  }
}

// Сохранять имя при перезагрузке 
// TODO LOAD
function saveName() {
  const name = document.querySelector('.name');
  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('DOMContentLoaded', getLocalStorage);
}
saveName()


// slider
function getSlider() {
  // rnd
  const body = document.querySelector('body');
  let timeOfDay = getTimeOfDay();
  const getRandomNum = () => Math.ceil(Math.random() * 20);
  let bgNum = getRandomNum()
  let randomNum = Number(bgNum);

  // установка фона
  function setBg() {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum.toString().padStart(2, 0)}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`
      //https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum.toString().padStart(2, 0)}.jpg)`;
    };
  }
  setBg()



  function getSlideNext() {
    if (randomNum == 20) randomNum = 1;
    else if (randomNum < 20) randomNum += 1;
    //setBg();
    if (r3.checked == true) {
      setBg()
    } else if (r2.checked == true) {
      getLinkToImageFlickr()
    } else if (r1.checked == true) {
      getLinkToImage()
    }
    return randomNum;
  }

  function getSlidePrev() {
    if (randomNum == 1) randomNum = 20;
    else if (randomNum <= 20) randomNum -= 1;
    //setBg();
    if (r3.checked == true) {
      setBg()
    } else if (r2.checked == true) {
      getLinkToImageFlickr()
    } else if (r1.checked == true) {
      getLinkToImage()
    }
    return randomNum;
  }

  const slideNext = document.querySelector('.slide-next');
  const slidePrev = document.querySelector('.slide-prev');
  slideNext.addEventListener('click', getSlideNext);
  slidePrev.addEventListener('click', getSlidePrev);
}
//getSlider()

const tags = document.querySelector('.tags');

let tag = tags.value;
tags.addEventListener('change', () => {
  tag = tags.value
  if (r2.checked == true) {
    getLinkToImageFlickr()
  } else if (r1.checked == true) {
    getLinkToImage()
  }
})

async function getLinkToImage() {
  const body = document.querySelector('body');
  const img = new Image();
  const url = `https://api.unsplash.com/photos/random?query=${tag}&client_id=YeaOrrzByrI_Wr25HRQANqXLrltzGgW7LArch1_TRpw`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.urls.regular)
  img.src = data.urls.regular;
  img.onload = () => {
    body.style.backgroundImage = `url(${data.urls.regular})`
  };

  // function getSlideNext() {
  //   getLinkToImage()
  // }

  // function getSlidePrev() {
  //   getLinkToImage()
  // }

  // const slideNext = document.querySelector('.slide-next');
  // const slidePrev = document.querySelector('.slide-prev');
  // slideNext.addEventListener('click', getSlideNext);
  // slidePrev.addEventListener('click', getSlidePrev);
}
//getLinkToImage()


async function getLinkToImageFlickr() {
  const body = document.querySelector('body');
  const img = new Image();
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a37f11d86ed2c3aba8dd7b6083feaae6&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();

  const getRandomNumFlick = () => Math.ceil(Math.random() * 100);
  let bgNumFlick = getRandomNumFlick()
  let randomNumFlick = Number(bgNumFlick);
  console.log(randomNumFlick)

  img.src = data.photos.photo[randomNumFlick].url_l;
  console.log(img.src)
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`
  };

  // function getSlideNext() {
  //   getLinkToImageFlickr()
  // }

  // function getSlidePrev() {
  //   getLinkToImageFlickr()
  // }

  // const slideNext = document.querySelector('.slide-next');
  // const slidePrev = document.querySelector('.slide-prev');
  // slideNext.addEventListener('click', getSlideNext);
  // slidePrev.addEventListener('click', getSlidePrev);
}
//getLinkToImageFlickr()


// погода
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
city.addEventListener('change', () => getWeather(city.value))
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');

function setEnCity() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  } else {
    if (language == "english") {
      city.value = "Minsk";
    } else {
      city.value = "Минск";
    }
  }
}



async function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=177ae38c9c080f77e9d4afc2ba4bc66d&units=metric`;

  if (language == "english") {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=177ae38c9c080f77e9d4afc2ba4bc66d&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=177ae38c9c080f77e9d4afc2ba4bc66d&units=metric`;
  }

  const res = await fetch(url);
  const data = await res.json();

  error.textContent = '';
  if (language == "english") {
    try {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      //if (language == "english") {
      wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
      //} else {
      //  wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      //  }
      humidity.textContent = `Humidity: ${data.main.humidity} %`;
    } catch (err) {
      error.textContent = `Error! city not found for '${city.value}'!`;
      temperature.textContent = '';
      weatherDescription.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
    }
  } else {
    try {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${data.main.humidity} %`;
    } catch (err) {
      error.textContent = `Error! city not found for '${city.value}'!`;
      temperature.textContent = '';
      weatherDescription.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
    }
  }
}
// TODO LOAD
function saveSity() {
  function setLocalStorage() {
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
  }
  window.addEventListener('DOMContentLoaded', getLocalStorage);
}
saveSity()

if (localStorage.getItem('city')) {
  city.value = localStorage.getItem('city');
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);


//Цитаты
const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes() {
  let quotes;
  if (language == "english") {
    quotes = 'quotesEN.json';
  } else {
    quotes = 'quotes.json';
  }
  const res = await fetch(quotes);
  const data = await res.json();
  const rndNumber = () => Math.floor(Math.random() * 6);
  //let rndNumber = Math.floor(Math.random() * 6);
  let rndNum = rndNumber();
  quote.textContent = data[rndNum].text;
  author.textContent = data[rndNum].author;
  changeQuote.addEventListener('click', () => {
    let rndNumb = rndNumber();
    quote.textContent = data[rndNumb].text;
    author.textContent = data[rndNumb].author;
  })

}
getQuotes();


function setRuSettings() {
  const popUpG = document.querySelector('.pop-up__item.general');
  const popUpB = document.querySelector('.pop-up__item.blocks');
  const popUpA = document.querySelector('.pop-up__item.about');
  const popUpP = document.querySelector('.pop-up__p');
  const popUpPh = document.querySelector('.pop-up__p.ph');
  const popUpTg = document.querySelector('.pop-up__p.tg');

  const blockT = document.querySelector('.blocks__t');
  const blockD = document.querySelector('.blocks__d');
  const blockG = document.querySelector('.blocks__g');
  const blockQ = document.querySelector('.blocks__q');
  const blockW = document.querySelector('.blocks__w');
  const blockA = document.querySelector('.blocks__a');
  const blockTD = document.querySelector('.blocks__td');


  if (language == "english") {
    popUpG.innerHTML = 'General';
    popUpB.innerHTML = 'Blocks';
    popUpA.innerHTML = 'About';
    popUpP.innerHTML = 'Language';
    popUpPh.innerHTML = 'Photo';
    popUpTg.innerHTML = 'Tags';

    blockT.innerHTML = `Time`;
    blockD.innerHTML = `Date`;
    blockG.innerHTML = `Greet`;
    blockW.innerHTML = `Weather`;
    blockQ.innerHTML = `Quote`;
    blockA.innerHTML = `Audio`;
    blockTD.innerHTML = `ToDo`;


  } else {
    popUpG.innerHTML = 'Основное';
    popUpB.innerHTML = 'Блоки';
    popUpA.innerHTML = 'Эбаут';
    popUpP.innerHTML = 'Язык';
    popUpPh.innerHTML = 'Фото';
    popUpTg.innerHTML = 'Теги';

    blockT.innerHTML = `Время`;

    blockD.innerHTML = `Дата`;
    blockG.innerHTML = `Приветствие`;
    blockW.innerHTML = `Погода`;
    blockQ.innerHTML = `Цитата`;
    blockA.innerHTML = `Плеер`;
    blockTD.innerHTML = `Дела`;
  }
}



const r1 = document.getElementById('radio-1');
const r2 = document.getElementById('radio-2');
const r3 = document.getElementById('radio-3');

function settingBg() {
  if (r3.checked == true) {
    getSlider()
  } else if (r2.checked == true) {
    getLinkToImageFlickr()
  } else if (r1.checked == true) {
    getLinkToImage()
  }
}
settingBg()

r1.addEventListener('click', settingBg)
r2.addEventListener('click', settingBg)
r3.addEventListener('click', settingBg)


window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}