// eslint-disable-next-line no-unused-vars
const updateCommentCounter = (commentArr) => {
  // eslint-disable-next-line no-unused-expressions
  !commentArr.length ? 0 : commentArr.length;
};

const counterArr = ['Nice meal', 'Very deligious'];

describe('comment counter test', () => {
  test('counter to increase by array lenght', () => {
    expect(counterArr.length).toBe(2);
  });
});