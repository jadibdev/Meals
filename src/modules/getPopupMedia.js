async function getMedia(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  document.getElementById('vidImg').insertAdjacentHTML('beforebegin', `<img src=${data.meals[0].strMealThumb}/>`);
}

export default getMedia;