const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

let timerId = null;

btnStart.addEventListener('click', onBtnStart);

function onBtnStart() {
  btnStart.removeEventListener('click', onBtnStart);
  btnStop.addEventListener('click', onBtnStop);
  btnStart.classList.remove('is-active');
  btnStop.classList.add('is-active');
  timerId = setInterval(changeColor, 1000);

  console.log(`запустили таймер', ${timerId}`);
};



function onBtnStop() {
  clearInterval(timerId);
  document.body.style.backgroundColor = '';
  btnStart.classList.add('is-active');
  btnStop.classList.remove('is-active');
  btnStart.addEventListener('click', onBtnStart);
  btnStop.removeEventListener('click', onBtnStop);
  
  console.log('остановили таймер');
};

// генерирует случайное число(индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  // const currentColor = randomIntegerFromInterval(0, (colors.length - 1));
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, (colors.length - 1))];
};

// const timerId = setInterval(changeColor, 1000);