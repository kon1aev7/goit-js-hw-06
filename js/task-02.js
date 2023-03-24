const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');
const makelist = options => {
  return options.map(option => {
    const liEl = document.createElement('li');
    liEl.textContent = option;
    liEl.classList.add('item');
    return liEl;
  });
};
const elements = makelist(ingredients);
listIngredients.append(...elements);
console.log(listIngredients)
