import renderComment from "./renderComment.js";
import updateCommentCounter from "./updateCommentCounter.js";

const fetchComments = async (id) => {
  const InvolvementApiKey = 'H1778Eipl0PRUFSJ8DNo';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/comments/?item_id=${id}`;

  const response = await fetch(url);
  const commentData = await response.json();
  renderComment(commentData);
  updateCommentCounter(commentData);
}

export default fetchComments;