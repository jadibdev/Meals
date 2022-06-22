/* eslint-disable no-await-in-loop */
const ids = [
  52891,
  53039,
  53047,
  52833,
  52953,
  53009,
];

const content = document.getElementById('content');

const ul = document.createElement('ul');
ul.classList.add('meals-list');
content.appendChild(ul);
const getMeals = async () => {
  for (let i = 0; i < ids.length; i += 1) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ids[i]}`);
    const data = await response.json();
    const mealTemplate = `
    <li>   
      <img class="meal-images" src=${data.meals[0].strMealThumb} alt="meal pic" />
      <div class="title-and-icons">
        <h5>${data.meals[0].strMeal}</h5>
        <div>
          <i class='fa fa-heart'></i>
          <p>4</p>
        </div>
      </div>
      <button class="commentBtn">Comments</button>
    </li>`;
    ul.insertAdjacentHTML('beforeend', mealTemplate);
  }
};

export default getMeals;