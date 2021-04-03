const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]')
const btnEnd = document.querySelector('[data-action="stop"]')

btnStart.addEventListener('click', startRandomChangeBgc)
btnEnd.addEventListener('click', stopRandomChangeBgc)
btnEnd.setAttribute("disabled", "")

let timerId = null
function startRandomChangeBgc() {
  btnStart.setAttribute("disabled", "")
  btnEnd.removeAttribute("disabled", "")
  timerId = setInterval(addRandomColor, 1000)
}

function addRandomColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

function stopRandomChangeBgc() {
  clearInterval(timerId)
  btnStart.removeAttribute("disabled", "")
  btnEnd.setAttribute("disabled", "")
  document.body.style.backgroundColor = '#FFFFFF'
}