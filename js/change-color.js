import colors from './colors.js'

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
let timerId = null;

btnStart.addEventListener('click', onBtnStart);

function onBtnStart() {
  changeActivBtn(btnStart, btnStop);
  timerId = setInterval(changeColor, 1000);
  // console.log(`запустили таймер', ${timerId}`);
};

function onBtnStop() {
  clearInterval(timerId);
  document.body.style.backgroundColor = '';
  changeActivBtn(btnStop, btnStart);
  // console.log('остановили таймер');
};

function changeActivBtn(activeBtn, noActiveBtn) {
  if (activeBtn === btnStart) {
    activeBtn.removeEventListener('click', onBtnStart);
    noActiveBtn.addEventListener('click', onBtnStop);
  } else {
    activeBtn.removeEventListener('click', onBtnStop);
    noActiveBtn.addEventListener('click', onBtnStart);
  };

  activeBtn.classList.remove('is-active');
  noActiveBtn.classList.add('is-active');
};

// генерирует случайное число(индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, (colors.length - 1))];
};