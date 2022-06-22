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

const getMeals = async (category) => {
  for (let i = 0; i < 6; i += 1) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    const mealTemplate = `
    <li>   
      <img class="meal-images" src=${data.meals[i].strMealThumb} alt="meal pic" />
      <article class="title-and-icons">
        <h5>${data.meals[i].strMeal}</h5>
        <div id="like-container">
          <i id='${data.meals[i].strMeal}' class='fa fa-heart'></i>
          <p id='p${data.meals[i].strMeal}' class="counter"></p>
        </div>
      </div>
      <button class="commentBtn">Comments</button>
    </li>`;
    ul.insertAdjacentHTML('beforeend', mealTemplate);
    getLikes(`${data.meals[i].strMeal}`).then((result) => {
      document.getElementById(`p${data.meals[i].strMeal}`).innerText = result;
    });
  }

  // event listener to post a like
  document.querySelectorAll('.fa-heart').forEach((item) => {
    item.addEventListener('click', () => {
      console.log(item.id);
      postLike(item.id).then((data) => {
        console.log('data from server: ', data);
      });

      getLikes(item.id).then((result) => {
        console.log('argument passed to getLikes()', item.id);
        console.log('promise result', result);
        document.getElementById(`p${item.id}`).innerText = parseInt(result) + 1;
      });
    });
  });
};

export default getMeals;