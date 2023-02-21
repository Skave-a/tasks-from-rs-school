function clock() {
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
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    day.textContent = date.toLocaleDateString('en-US', options);
    setTimeout(showTime, 1000);
  }

  //Определить время суток
  function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    const getTimeOf = () => (hours < 7) ? 'night' : (hours < 13) ? 'morning' : (hours < 19) ? 'afternoon' : 'evening';
    return getTimeOf();
  }
}

export default clock;