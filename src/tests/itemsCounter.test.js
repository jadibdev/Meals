const calculateItemCounter = () => {
  const itemCounter = Math.floor(Math.random() * 25);
  return itemCounter;
};

test('item counter is calculated successfully', () => {
  /*
    Arrange
  */

  let counter = 0;
  // eslint-disable-next-line no-unused-vars
  const mealTemplate = `
    <li>   
      <div class="title-and-icons">
        <h5 id="meal-title">Fettucine alfredo</h5>
        <div id="like-container">
          <i class='fa fa-heart'></i>
          <p class="counter">${counter}</p>
        </div>
      </div>
      <button class="commentBtn">Comments</button>
    </li>`;

  /*
    Act
  */
  counter = calculateItemCounter();

  /*
    Assert
  */
  expect(counter).toBeGreaterThan(0);
});
