import './style.css';
import addNewComment from './modules/addNewcomment.js'
import showNotification from './modules/showNotification.js'
import renderFooter from './modules/footer.js';
import getMeals from './modules/getMeals.js';
import addActiveClass from './modules/addActiveClass.js';
import openCommentModel from './modules/showCommentModel.js';
import closeCommentPopup from './modules/closeCommentModel.js';

getMeals('Breakfast');

const navMenu = document.querySelector('.nav-menu');
const mealsList = document.querySelector('#content');
const closeCommentModel = document.querySelector('.close');
const form = document.querySelector('.form');

navMenu.addEventListener('click', (event) => {
  // const category = event.target.innerHTML;
  addActiveClass(event.target);
  // getMeals(category);
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

// handle show comment pop-up model
mealsList.addEventListener('click', (event) => {
  const id = event.target.id;
  console.log(id)
  if (event.target.className === 'commentBtn') {
    openCommentModel(id);
  }
});

// close comment pop-up model
closeCommentModel.addEventListener('click', () => {
  closeCommentPopup();
});

// add new comment form action
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewComment();
  form.reset();
  showNotification();
})
