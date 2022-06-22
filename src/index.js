import './style.css';
import fetchData from './modules/fetchData.js';
import renderFooter from './modules/footer.js';
import addActiveClass from './modules/addActiveClass.js';

const navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', (event) => {
  const category = event.target.innerHTML;
  addActiveClass(event.target);
  fetchData(category);
  
})

// load first category meals item
fetchData('Breakfast')
renderFooter();

