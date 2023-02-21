//аудиоплеер
import playList from './playList.js';

const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const audio = new Audio();

let isPlay = false;
let playNum = 0;

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    isPlay = true;
  } else if (isPlay) {
    audio.pause();
    isPlay = false;
  }
  chooseSong()
  setTitle()
  progress.style.width = 0;
  setMusicInfo()
}
playBtn.addEventListener('click', playAudio);

function toggleBtn() {
  playBtn.classList.toggle('pause');
}
playBtn.addEventListener('click', toggleBtn);
prevBtn.addEventListener('click', () => {
  if (!isPlay) {
    toggleBtn();
  }
});
nextBtn.addEventListener('click', () => {
  if (!isPlay) {
    toggleBtn();
  }
});

function playPrev() {
  isPlay = false;
  playNum -= 1;
  if (playNum == -1) {
    playNum = 3;
  }
  //chooseSong()
  //console.log(playNum)
  playAudio()
}
function playNext() {
  isPlay = false;
  playNum += 1;
  if (playNum == 4) {
    playNum = 0;
  }
  //chooseSong()
  //console.log(playNum)
  playAudio()
}
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);


for (let i = 0; i < playList.length; i++) {
  const playListContainer = document.querySelector('.play-list');
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  playListContainer.append(li);
}

function chooseSong() {
  let elements = document.querySelectorAll('ul > li.play-item');
  elements.forEach(el => {
    el.classList.remove('item-active');
  });
  for (let i = 0; i < playList.length; i++) {
    if (playNum == i) {
      elements[i].classList.add('item-active');
    }
  }
}

audio.onended = (event) => {
  playNext()
};

const musicInfo = document.querySelector('.music-info');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('.title');

function setTitle() {
  title.innerHTML = playList[playNum].title;
}
function setMusicInfo() {
  musicInfo.classList.add('play-music')
}

function updateProgress(ev) {
  const { duration, currentTime } = ev.srcElement;
  const progressPersent = (currentTime / duration) * 100;
  progress.style.width = `${progressPersent}%`;
  //const timeline = audioPlayer.querySelector(".timeline");
  progressContainer.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(progressContainer).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false);
}

audio.addEventListener('timeupdate', updateProgress);

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

// volume
//const volume = document.querySelector('.volume');
const volumeUp = document.querySelector('#volume_icon');
const volumeShow = document.querySelector('.volume-show');
const volumeBar = document.querySelector('.volume-bar');

let isMute = false;

function muteMe() {
  if (!isMute) {
    audio.muted = true;
    isMute = true;
    volumeUp.classList = 'fa fa-volume-off volume-border';
    volumeShow.innerHTML = 0;
    volumeBar.value = 0;
  } else {
    audio.muted = false;
    isMute = false;
    volumeUp.classList = 'fa fa-volume-up volume-border';
    volumeBar.value = 55;
    volumeShow.innerHTML = volumeBar.value;
  }
}

volumeUp.addEventListener('click', muteMe)

// audio.volume = 1.2;


volumeBar.onchange = function () {
  volumeShow.innerHTML = volumeBar.value;
  audio.volume = volumeBar.value / 100;
}

function chooseSongs() {
  let elements = document.querySelectorAll('ul > li.play-item');
  elements.forEach((item, i) => {
    item.addEventListener('click', () => {
      playNum = i;
      audio.src = playList[playNum].src;
      audio.currentTime = 0;
      audio.play();
      chooseSong()
      setTitle()
      progress.style.width = 0;
      setMusicInfo()
      playBtn.classList.add('pause')
      isPlay = true;
    })
  })

}
chooseSongs()

