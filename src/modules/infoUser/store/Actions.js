export const INFO_USER_ACTIONS_TYPE = {
  GET_USER: 'InfoUserState/GET_USER',
  SET_USER: 'InfoUserState/SET_USER',
  SET_SIDE_EFFECTS: 'InfoUserState/SET_SIDE_EFFECTS',
  SET_ERROR: 'InfoUserState/SET_ERROR',
};


export const ActionsInfoUser = (dispatch) => ({
  getUser: (value) => dispatch({
    type: INFO_USER_ACTIONS_TYPE.GET_USER,
    payload: value,
  }),
  setUser: (value) => dispatch({
    type: INFO_USER_ACTIONS_TYPE.SET_USER,
    payload: value,
  }),
  setSideEffects: (value) => dispatch({
    type: INFO_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
  setError: (value) => dispatch({
    type: INFO_USER_ACTIONS_TYPE.SET_ERROR,
    payload: value,
  }),
});
