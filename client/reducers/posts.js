// a reducer takes in 2 things
//
// 1. the actoin (info about what happened)
// 2. copy of the current state

const posts = function (state = [], action) {
  const i = action.index;

  return action.type === 'INCREMENT_LIKES' ? [
    ...state.slice(0, i),
    {...state[i], likes: state[i].likes + 1},
    ...state.slice(i + 1),
  ] : state;
};

export default posts;
