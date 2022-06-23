import './style.css';
import renderFooter from './modules/footer.js';
import getMeals from './modules/getMeals.js';
import addActiveClass from './modules/addActiveClass.js';
import openCommentModel from './modules/showCommentModel.js';
import closeCommentPopup from './modules/closeCommentModel.js';
import getPopupMedia from './modules/getPopupMedia.js';

getMeals('Breakfast');

const navMenu = document.querySelector('.nav-menu');
const mealsList = document.querySelector('#content');
const closeCommentModel = document.querySelector('.close');

navMenu.addEventListener('click', (event) => {
  // const category = event.target.innerHTML;
  addActiveClass(event.target);
  // getMeals(category);
});

document.getElementById('Breakfast').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Breakfast');
});

document.getElementById('Seafood').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Seafood');
});

document.getElementById('Pasta').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Pasta');
});

document.getElementById('Dessert').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Dessert');
});

document.getElementById('Chicken').addEventListener('click', () => {
  document.getElementById('classlist').innerHTML = '';
  getMeals('Chicken');
});

renderFooter();

// handle show comment pop-up model
mealsList.addEventListener('click', (event) => {
  if (event.target.className === 'commentBtn') {
    console.log(event.target.id);
    getPopupMedia(event.target.id);
    openCommentModel();
  }
});

// close comment pop-up model
closeCommentModel.addEventListener('click', () => {
  closeCommentPopup();
});
