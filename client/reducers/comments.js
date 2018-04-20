const postComments = function (state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      const newComment = {
        user: action.author,
        text: action.comment,
      }

      return [...state, newComment];
    case 'REMOVE_COMMENT':
      const { i } = action;

      return [...state.slice(0, i), ...state.slice(i + 1)];
    default:
      return state;
  }

}

const comments = function (state = {}, action) {
  if (typeof action.postId !== undefined) {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action),
    }
  }
  return state;
}

export default comments;
