/* eslint-disable no-await-in-loop */
const ids = [
  52891,
  53039,
  53047,
  52833,
  52953,
  53009,
];

const InvolvementApiKey = 'H1778Eipl0PRUFSJ8DNo';

const content = document.getElementById('content');

const ul = document.createElement('ul');
ul.classList.add('meals-list');
content.appendChild(ul);
const getMeals = async () => {
  for (let i = 0; i < ids.length; i += 1) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ids[i]}`);
    const data = await response.json();
    console.log(data);
    const mealTemplate = `
    <li>   
      <img class="meal-images" src=${data.meals[0].strMealThumb} alt="meal pic" />
      <article class="title-and-icons">
        <h5>${data.meals[0].strMeal}</h5>
        <div id="like-container">
          <i id=${data.meals[0].strMeal} class='fa fa-heart'></i>
          <p>4</p>
        </div>
      </div>
      <button class="commentBtn">Comments</button>
    </li>`;
    ul.insertAdjacentHTML('beforeend', mealTemplate);
  }

  // event listener to post a like
  document.querySelectorAll('.fa-heart').forEach((item) => {
    item.addEventListener('click', (event) => {
      console.log(item.id);

      async function postLike() {
        const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/likes/`;

        const data = {
          item_id: item.id,
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

      postLike().then((data) => {
        console.log('back from server', data);
      });

      async function getLikes() {
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/likes`);
        const data = await response.json();
        return data;
      }

      getLikes()
        .then((data) => {
          console.log(data);
          item.innerHTML = '<p>something</p>';
        });
    });
  });
};

export default getMeals;