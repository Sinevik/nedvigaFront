export const MY_POSTERS_ACTIONS_TYPE = {
  SET_SIDE_EFFECTS: 'MyPosters/SET_SIDE_EFFECTS',
  GET_POSTERS: 'MyPosters/GET_POSTERS',
  GET_POSTERS_BOOKMARK: 'MyPosters/GET_POSTERS_BOOKMARK',
  GET_COUNT_POSTERS: 'MyPosters/GET_COUNT_POSTERS',
  GET_COUNT_POSTERS_BOOKMARK: 'MyPosters/GET_COUNT_POSTERS_BOOKMARK',
  SET_VALUE_FILED: 'MyPosters/SET_VALUE_FILED',
  SET_POSTERS: 'MyPosters/SET_POSTERS',
  SET_COUNT_POSTERS: 'MyPosters/SET_COUNT_POSTERS',
  DELETE_POSTER: 'MyPosters/DELETE_POSTER',
  SET_UP: 'MyPosters/SET_UP',
};

export const ActionsMyPosters = (dispatch) => ({
  setValueField: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.SET_VALUE_FILED,
    payload: value,
  }),
  setPosters: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.SET_POSTERS,
    payload: value,
  }),
  getPosters: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.GET_POSTERS,
    payload: value,
  }),
  getCountPosters: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS,
  }),
  setCountPosters: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.SET_COUNT_POSTERS,
    payload: value,
  }),
  deletePoster: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.DELETE_POSTER,
    payload: value,
  }),
  getPostersBookmark: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.GET_POSTERS_BOOKMARK,
    payload: value,
  }),
  getCountPostersBookmark: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS_BOOKMARK,
    payload: value,
  }),
  setUp: (value) => dispatch({
    type: MY_POSTERS_ACTIONS_TYPE.SET_UP,
    payload: value,
  }),
});
