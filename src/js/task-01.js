const items = document.querySelectorAll('.item');
console.log('Number of categories: ', items.length);

// const elTitle = document.querySelectorAll('.item h2');

// console.log(elTitle);

const liItems = document.querySelectorAll('.item');
liItems.forEach(liItem => {
  console.log(`Category: ${liItem.firstElementChild.textContent}`);
  console.log(`Elements: ${liItem.lastElementChild.children.length}`);
});
