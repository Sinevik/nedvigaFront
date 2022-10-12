export const USER_ACTIONS_TYPE = {
  GET_USER: 'UserState/GET_USER',
  SET_USER: 'UserState/SET_USER',
};


export const ActionsUser = (dispatch) => ({
  getUser: () => dispatch({
    type: USER_ACTIONS_TYPE.GET_USER,
  }),
  setUser: (value) => dispatch({
    type: USER_ACTIONS_TYPE.SET_USER,
    payload: value,
  }),
});
