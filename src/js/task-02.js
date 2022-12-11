const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const items = ingredients.map(ingredient => {
  const liItems = document.createElement('li');
  liItems.classList.add('.item');
  liItems.textContent = ingredient;
  return liItems;
});
console.log(items);

const list = document.querySelector('#ingredients');
list.append(...items);
