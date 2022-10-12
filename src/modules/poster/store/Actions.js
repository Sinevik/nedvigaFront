export const POSTER_ACTIONS_TYPE = {
  SET_POSTER: 'POSTER/SET_POSTER',
  GET_POSTER: 'POSTER/GET_POSTER',
  SET_SIDE_EFFECTS: 'POSTER/SET_SIDE_EFFECTS',
};

export const ActionsPoster = (dispatch) => ({
  setPoster: (value) => dispatch({
    type: POSTER_ACTIONS_TYPE.SET_POSTER,
    payload: value,
  }),
  getPoster: (value) => dispatch({
    type: POSTER_ACTIONS_TYPE.GET_POSTER,
    payload: value,
  }),
  setSideEffects: (value) => dispatch({
    type: POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
});
