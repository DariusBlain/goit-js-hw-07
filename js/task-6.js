function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let amount;
function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment();
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const createElement = document.createElement('div');
      createElement.style.width = size + 'px';
      createElement.style.height = size + 'px';
      createElement.style.backgroundColor = getRandomHexColor();
      fragment.append(createElement);
      size += 10;
    }
    boxes.append(fragment);
  }
}

input.addEventListener('input', event => {
  amount = event.currentTarget.value;
});

btnCreate.addEventListener('click', () => {
  boxes.innerHTML = '';
  createBoxes(amount);
  input.value = '';
});

btnDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});
