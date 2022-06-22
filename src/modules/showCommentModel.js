const openCommentModel = () => {
  const mainContainer = document.querySelector('.container');
  const commentContainer = document.querySelector('.comment-model');

  mainContainer.style.display = 'none';
  commentContainer.style.display = 'block';
};

export default openCommentModel;