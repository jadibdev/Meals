import fetchComments from './fetchComments.js';

const openCommentModel = (id) => {
  const mainContainer = document.querySelector('.container');
  const commentContainer = document.querySelector('.comment-model');

  fetchComments(id);
  mainContainer.style.display = 'none';
  commentContainer.style.display = 'block';
};

export default openCommentModel;