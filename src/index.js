import './style.css';
import renderFooter from './modules/footer.js';
import getMeals from './modules/getMeals.js';
import addActiveClass from './modules/addActiveClass.js';

getMeals('Breakfast');

const navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', (event) => {
  const category = event.target.innerHTML;
  addActiveClass(event.target);
  getMeals(category);
});

document.getElementById('breakfast').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Breakfast');
});

document.getElementById('seafood').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Seafood');
});

document.getElementById('pasta').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Pasta');
});

document.getElementById('dessert').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Dessert');
});

document.getElementById('chicken').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Chicken');
});
renderFooter();
