export const CREATE_USER_ACTIONS_TYPE = {
  SET_VALUE_FIELD: 'CreateUser/SET_VALUE_FIELD',
  SET_SIDE_EFFECTS: 'CreateUser/SET_SIDE_EFFECTS',
  SET_INIT: 'CreateUser/SET_INIT',
  SET_DATA: 'CreateUser/SET_DATA',
  SET_ERROR: 'CreateUser/SET_ERROR',
  SET_PICTURE: 'CreateUser/SET_PICTURE',
  CREATE_USER: 'CreateUser/CREATE_USER',
};


export const ActionsCreateUser = (dispatch) => ({
  setSideEffects: (value) => dispatch({
    type: CREATE_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
  setValueField: (value) => dispatch({
    type: CREATE_USER_ACTIONS_TYPE.SET_VALUE_FIELD,
    payload: value,
  }),
  setPicture: (value, reduxField) => dispatch({
    type: CREATE_USER_ACTIONS_TYPE.SET_PICTURE,
    payload: {
      value,
      reduxField,
    },
  }),
  setError: (value) => dispatch({
    type: CREATE_USER_ACTIONS_TYPE.SET_ERROR,
    payload: value,
  }),
  setInit: () => dispatch({
    type: CREATE_USER_ACTIONS_TYPE.SET_INIT,
  }),
  setData: (value) => dispatch({
    type: CREATE_USER_ACTIONS_TYPE.SET_DATA,
    payload: value,
  }),
  createUser: (value) => dispatch({
    type: CREATE_USER_ACTIONS_TYPE.CREATE_USER,
    payload: value,
  }),
});
