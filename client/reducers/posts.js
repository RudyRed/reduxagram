// a reducer takes in 2 things
//
// 1. the actoin (info about what happened)
// 2. copy of the current state

const posts = function (state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
