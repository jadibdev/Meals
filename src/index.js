import './style.css';

const content = document.getElementById('content');

const nav = `
<h1>Meals</h1>`;

const renderNav = () => {
  content.insertAdjacentHTML('beforebegin', nav);
};

renderNav();

export default renderNav;
