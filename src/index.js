import './style.css';
import fetchData from './modules/fetchData.js';
import renderFooter from './modules/footer.js';
import addActiveClass from './modules/addActiveClass.js';
import openCommentModel from './modules/showCommentModel.js';
import closeCommentPopup from './modules/closeCommentModel.js';
import fetchSingleMeal from './modules/fetchSingleMeal.js';
import addNewComment from './addNewcomment.js';

const navMenu = document.querySelector('.nav-menu');
const mealsList = document.querySelector('#content');
const closeCommentModel = document.querySelector('.close');
const form = document.querySelector('.form');

navMenu.addEventListener('click', (event) => {
  const category = event.target.innerHTML;
  addActiveClass(event.target);
  fetchData(category);
});

// load first category meals item
fetchData('Breakfast');
renderFooter();

// handle show comment pop-up model
mealsList.addEventListener('click', (event) => {
  const id = parseInt(event.target.id, 10);
  if (event.target.className === 'commentBtn') {
    fetchSingleMeal(id);
    openCommentModel();
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
  
})
