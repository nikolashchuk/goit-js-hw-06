const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const dtnDecrement = document.querySelector('button[data-action="decrement"]');
const dtnIncrement = document.querySelector('button[data-action="increment"]');

const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

dtnDecrement.addEventListener('click', onDecrementClick);
dtnIncrement.addEventListener('click', onIncrementClick);

function onDecrementClick() {
  counter.decrement();
  counterValue.textContent = counter.value;
}

function onIncrementClick() {
  counter.increment();
  counterValue.textContent = counter.value;
}
