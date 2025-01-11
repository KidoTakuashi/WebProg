//task1

const container = document.createElement('div');
const decrementButton = document.createElement('button');
const incrementButton = document.createElement('button');
const input = document.createElement('input');

incrementButton.textContent = '+';
decrementButton.textContent = '-';
decrementButton.id = 'decrement';
incrementButton.id = 'increment';

input.type = 'text';
input.value = '1';
input.readOnly = true;
input.id = 'counter';

container.appendChild(decrementButton);
container.appendChild(input);
container.appendChild(incrementButton);
document.body.appendChild(container);

function updateButtons() {
  const value = parseInt(input.value, 10);
  document.getElementById('decrement').disabled = value <= 0;
  document.getElementById('increment').disabled = value >= 9;
}

incrementButton.addEventListener('click', () => {
  const currentValue = parseInt(input.value, 10);
  if (currentValue < 9) {
    input.value = currentValue + 1;
  }
  updateButtons();
});

decrementButton.addEventListener('click', () => {
  const currentValue = parseInt(input.value, 10);
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
  updateButtons();
});

