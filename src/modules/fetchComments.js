import renderComment from './renderComment.js';
import updateCommentCounter from './updateCommentCounter.js';
import empty from './emptyElement.js';
import { remove } from 'lodash';

const fetchComments = async (id) => {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'commentList');

  const InvolvementApiKey = 'H1778Eipl0PRUFSJ8DNo';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/comments/?item_id=${id}`;

  const response = await fetch(url);
  if (response.status === 200) {
    const commentData = await response.json();
    renderComment(commentData);
    updateCommentCounter(commentData);
  } else {
    const currentUl = document.querySelector('.commentList')
    empty(currentUl);
    const commentDiv = document.querySelector('.comment-list');
    const commentCounter = document.querySelector('#comment-counter');
    commentDiv.append(ul);
    commentCounter.innerHTML = 0;
  }
};

export default fetchComments;