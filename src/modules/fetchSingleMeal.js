import renderSingleMeal from './renderSingleMeal.js';

const fetchSingleMeal = async (id) => {
  let mealObj = {};
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(url);
    const mealData = await response.json();
    mealObj = { ...mealData.meals[0] };
    renderSingleMeal(mealObj);
  } catch (error) {
    return error;
  }
  return mealObj;
};

export default fetchSingleMeal;