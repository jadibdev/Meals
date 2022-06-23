import './style.css';
import addNewComment from './modules/addNewcomment.js';
import showNotification from './modules/showNotification.js';
import renderFooter from './modules/footer.js';
import getMeals from './modules/getMeals.js';
import addActiveClass from './modules/addActiveClass.js';
import openCommentModel from './modules/showCommentModel.js';
import closeCommentPopup from './modules/closeCommentModel.js';
import fetchSingleMeal from './modules/fetchSingleMeal.js';

getMeals('Breakfast');

const navMenu = document.querySelector('.nav-menu');
const mealsList = document.querySelector('.meals-list');
const closeCommentModel = document.querySelector('.close');
const form = document.querySelector('.form');

navMenu.addEventListener('click', (event) => {
  addActiveClass(event.target);
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
  const id = parseInt(event.target.id, 10);
  if (event.target.className === 'commentBtn') {
    fetchSingleMeal(id);
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
});
