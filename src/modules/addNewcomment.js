const addNewComment = () => {
  const mealItem = document.querySelector('.meal-details');
  const form = document.querySelector('.form');
  const userName = form.elements.name;
  const userComment = form.elements.comment;
  const currentCommentList = document.querySelector('.commentList');
  const commentCount = document.querySelector('#comment-counter');
  const li = document.createElement('li');
  li.innerHTML = userComment.value;
  currentCommentList.appendChild(li);
  commentCount.innerHTML = currentCommentList.childElementCount;

  const InvolvementApiKey = 'H1778Eipl0PRUFSJ8DNo';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/comments`;
  const commentData = {
    item_id: mealItem.id,
    username: userName.value,
    comment: userComment.value,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => response.json())
    .then((comment) => comment)
    .catch((error) => error);
};

export default addNewComment;