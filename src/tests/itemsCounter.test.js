test('item counter is calculated successfully', () => {
  /*
    Arrange
  */
  const arr = [1, 2, 3];

  const div = document.createElement('div');
  div.id = 'par';

  const calculateCounter = (id, length) => {
    document.getElementById(`${id}`).innerHTML = `<p>${id} (${length})</p>`;
  };

  /*
    Act
  */
  document.body.appendChild(div);
  calculateCounter('par', arr.length);

  /*
    Assert
  */
  expect(div.innerHTML).toBe(`<p>${div.id} (${arr.length})</p>`);
});
