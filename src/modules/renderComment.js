const renderComment = (commentArr) => {
  const commentDivElem = document.querySelector('.comment-list');
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'commentList');
  commentArr.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.username}: ${element.comment}`;

    ul.append(li);
  });
  commentDivElem.replaceChildren(ul);
};

export default renderComment;