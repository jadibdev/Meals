/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
const InvolvementApiKey = 'H1778Eipl0PRUFSJ8DNo';
const content = document.getElementById('content');
const ul = document.createElement('ul');

ul.classList.add('meals-list');
ul.id = 'classlist';
content.appendChild(ul);

async function postLike(meal) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/likes/`;

  const data = {
    item_id: meal,
  };

  const param = {

    method: 'Post',

    headers: {

      'content-type': 'application/json;charset = UTF-8',

    },

    body: JSON.stringify(data),

  };

  const sendRequest = await fetch(url, param);
  const response = await sendRequest.text();
  return response;
}

async function getLikes(itemId) {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/likes`);
  const data = await response.json();
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].item_id === itemId) {
      return data[i].likes;
    }
  }
  // return data;
}

/* const calculateItemCounter = () => {
  const itemCounter = Math.floor(Math.random() * 25);
  return itemCounter;
}; */

const calculateCounter = (id, length) => {
  document.getElementById(`${id}`).innerText = `${id} (${length})`;
};

const getMeals = async (category) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await response.json();
  for (let i = 0; i < data.meals.length; i += 1) {
    // document.getElementById(`${category}`).innerText = `${category} (${data.meals.length})`;
    calculateCounter(category, data.meals.length);
    const mealTemplate = `
    <li>   
      <img class="meal-images" src=${data.meals[i].strMealThumb} alt="meal pic" />
      <div class="title-and-icons">
        <h5>${data.meals[i].strMeal}: (${i})</h5>
        <div id="like-container">
          <i id='${data.meals[i].strMeal}' class='fa fa-heart'></i>
          <p id='p${data.meals[i].strMeal}' class="counter"></p>
        </div>
      </div>
      <button class="commentBtn" id='${data.meals[i].idMeal}'>Comments</button>
    </li>`;
    ul.insertAdjacentHTML('beforeend', mealTemplate);
    getLikes(`${data.meals[i].strMeal}`).then((result) => {
      document.getElementById(`p${data.meals[i].strMeal}`).innerText = result;
    });
  }

  // event listener to post a like
  document.querySelectorAll('.fa-heart').forEach((item) => {
    item.addEventListener('click', () => {
      postLike(item.id).then(() => {
      });

      getLikes(item.id).then((result) => {
        document.getElementById(`p${item.id}`).innerText = parseInt(result) + 1;
      });
    });
  });
};

export default getMeals;