const renderSingleMeal = (mealObj) => {
  const mealName = document.querySelector('#meal-name');
  const mealItem = document.querySelector('.meal-details');
  const mealCat = document.querySelector('#meal-cat');
  const mealArea = document.querySelector('#meal-area');
  const mealImage = document.querySelector('#commentImg');
  const mealVideo = document.querySelector('#meals-video');
  const vidUrl = mealObj.strYoutube.replace(/watch\?v=/g, 'embed/');

  mealName.innerHTML = `Name: ${mealObj.strMeal}`;
  mealCat.innerHTML = `Category: ${mealObj.strCategory}`;
  mealArea.innerHTML = `Area: ${mealObj.strArea}`;
  mealImage.setAttribute('src', mealObj.strMealThumb);
  mealVideo.setAttribute('src', vidUrl);
  mealItem.setAttribute('id', mealObj.idMeal)
};

export default renderSingleMeal;