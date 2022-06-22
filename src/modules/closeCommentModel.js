const closeCommentPopup = () => {
  const mainContainer = document.querySelector('.container');
  const commentContainer = document.querySelector('.comment-model');

  mainContainer.style.display = 'block';
  commentContainer.style.display = 'none';
}

export default closeCommentPopup;