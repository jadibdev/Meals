const updateCommentCounter = (commentArr) => {
  return !commentArr.length ? 0 : commentArr.length;
};

const counterArr = ['Nice meal', 'Very deligious'];

describe('comment counter test', () => {
  test('counter to increase by array lenght', () => {
    expect(updateCommentCounter(counterArr).length).toBe(2);
  });
});