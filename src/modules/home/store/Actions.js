export const HOME_ACTIONS_TYPE = {
  GET_POSTERS: 'HOME/GET_POSTERS',
  SET_POSTERS: 'HOME/SET_POSTERS',
};

export const ActionsHome = (dispatch) => ({
  getPosters: (value) => dispatch({
    type: HOME_ACTIONS_TYPE.GET_POSTERS,
    payload: value,
  }),
  setPosters: (value) => dispatch({
    type: HOME_ACTIONS_TYPE.SET_POSTERS,
    payload: value,
  }),
});
