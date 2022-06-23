// const renderMealsItem = (mealArr) => {
//   const mealsList = document.querySelector('#content');
//   const mealsContent = document.createElement('div');
//   mealsContent.classList.add('meals-list');

//   mealArr.forEach((data) => {
//     const item = document.createElement('div');
//     item.classList.add('meals-item');

//     item.innerHTML = `  
//       <img class="meal-images" src=${data.strMealThumb} alt="meal pic" />
//       <div class="title-and-icons">
//         <h5 class="meal-name">${data.strMeal}</h5>
//         <div>
//           <i class='fa fa-heart'></i>
//           <p>4</p>
//         </div>
//       </div>
//       <button class="commentBtn" id=${data.idMeal}>Comments</button>`;

//     mealsContent.append(item);
//   });

//   mealsList.replaceChildren(mealsContent);
// };

// export default renderMealsItem;