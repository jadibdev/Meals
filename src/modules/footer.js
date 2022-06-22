import '../style.css';

const content = document.getElementById('content');

const footer = `
<div class="footer">&copy King Meals, Inc. All Rights Reserved 2022</div>`;

const renderFooter = () => {
  content.insertAdjacentHTML('beforeend', footer);
};

export default renderFooter;
