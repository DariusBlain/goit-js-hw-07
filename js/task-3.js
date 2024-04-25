const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const currentValue = event.currentTarget.value.trim();
  if (currentValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = currentValue;
  }
});
