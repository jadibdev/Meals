const updateCommentCounter = (commentArr) => {
  const commentCount = document.querySelector('#comment-counter');
  commentCount.innerHTML = !commentArr.length ? 0 : commentArr.length;
}

export default updateCommentCounter;