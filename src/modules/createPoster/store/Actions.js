export const CREATE_POSTER_ACTIONS_TYPE = {
  SET_VALUE_FIELD: 'CreatePoster/SET_VALUE_FIELD',
  SET_SIDE_EFFECTS: 'CreatePoster/SET_SIDE_EFFECTS',
  CREATE_POSTER: 'CreatePoster/CREATE_POSTER',
  SET_INCREMENT_PAGE: 'CreatePoster/SET_INCREMENT_PAGE',
  SET_PATH_PICTURES: 'CreatePoster/SET_PATH_PICTURES',
  SET_PICTURES: 'CreatePoster/SET_PICTURES',
  SET_MASTER_PICTURE: 'CreatePoster/SET_MASTER_PICTURE',
  SET_CENTER_MAP: 'CreatePoster/SET_CENTER_MAP',
  SET_ADDRESS: 'CreatePoster/SET_ADDRESS',
  SET_SELECTED_COMBINE_INPUT: 'CreatePoster/SET_SELECTED_COMBINE_INPUT',
  SET_ERROR: 'CreatePoster/SET_ERROR',
  SET_KIND: 'CreatePoster/SET_KIND',
  SET_DATA: 'CreatePoster/SET_DATA',
  SET_INIT: 'CreatePoster/SET_INIT',
  SET_CONTACTS: 'CreatePoster/SET_CONTACTS',
};

export const ActionsCreatePoster = (dispatch) => ({
  setSideEffects: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
  setValueField: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_VALUE_FIELD,
    payload: value,
  }),
  setIncrementPage: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_INCREMENT_PAGE,
    payload: value,
  }),
  setPathPictures: (value, reduxField) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_PATH_PICTURES,
    payload: {
      value,
      reduxField,
    },
  }),
  setPictures: (value, reduxField) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_PICTURES,
    payload: {
      value,
      reduxField,
    },
  }),
  setMasterPicture: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_MASTER_PICTURE,
    payload: value,
  }),
  setAddress: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_ADDRESS,
    payload: value,
  }),
  setCenterMap: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_CENTER_MAP,
    payload: value,
  }),
  setSelectedCombineInput: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_SELECTED_COMBINE_INPUT,
    payload: value,
  }),
  setError: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_ERROR,
    payload: value,
  }),
  createPoster: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.CREATE_POSTER,
    payload: value,
  }),
  setKind: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_KIND,
    payload: value,
  }),
  setData: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_DATA,
    payload: value,
  }),
  setInit: () => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_INIT,
  }),
  setContacts: (value) => dispatch({
    type: CREATE_POSTER_ACTIONS_TYPE.SET_CONTACTS,
    payload: value,
  }),
});
