import renderMealsItem from "./renderData.js";

const fetchData = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  let mealsArr = [];

  try {
    const response = await fetch(url);
    const categoryItems = await response.json();
    mealsArr = [...categoryItems.meals];
  } catch (error) {
    return error;
  }
  renderMealsItem(mealsArr);

}

export default fetchData;