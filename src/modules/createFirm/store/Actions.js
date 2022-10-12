export const CREATE_FIRM_ACTIONS_TYPE = {
  SET_VALUE_FIELD: 'CreateFirm/SET_VALUE_FIELD',
  SET_SIDE_EFFECTS: 'CreateFirm/SET_SIDE_EFFECTS',
  CREATE_FIRM: 'CreateFirm/CREATE_FIRM',
  SET_CENTER_MAP: 'CreateFirm/SET_CENTER_MAP',
  SET_ADDRESS_MODAl: 'CreateFirm/SET_ADDRESS_MODAl',
  SET_ERROR: 'CreateFirm/SET_ERROR',
  SET_ADDRESS: 'CreateFirm/SET_ADDRESS',
  SET_INCREMENT_PAGE: 'CreateFirm/SET_INCREMENT_PAGE',
  SET_PICTURE: 'CreateFirm/SET_PICTURE',
  SET_PATH_PICTURES: 'CreateFirm/SET_PATH_PICTURES',
  SET_PICTURES: 'CreateFirm/SET_PICTURES',
  SET_MASTER_PICTURE: 'CreateFirm/SET_MASTER_PICTURE',
  SET_DATA: 'CreateFirm/SET_DATA',
  SET_INIT: 'CreateFirm/SET_INIT',
};


export const ActionsCreateFirm = (dispatch) => ({
  setSideEffects: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
  setValueField: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_VALUE_FIELD,
    payload: value,
  }),
  setCenterMap: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_CENTER_MAP,
    payload: value,
  }),
  setAddress: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_ADDRESS,
    payload: value,
  }),
  setPicture: (value, reduxField) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_PICTURE,
    payload: {
      value,
      reduxField,
    },
  }),
  setPathPictures: (value, reduxField) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_PATH_PICTURES,
    payload: {
      value,
      reduxField,
    },
  }),
  setPictures: (value, reduxField) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_PICTURES,
    payload: {
      value,
      reduxField,
    },
  }),
  setMasterPicture: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_MASTER_PICTURE,
    payload: value,
  }),
  setIncrementPage: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_INCREMENT_PAGE,
    payload: value,
  }),
  setError: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_ERROR,
    payload: value,
  }),
  createFirm: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.CREATE_FIRM,
    payload: value,
  }),
  setData: (value) => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_DATA,
    payload: value,
  }),
  setInit: () => dispatch({
    type: CREATE_FIRM_ACTIONS_TYPE.SET_INIT,
  }),
});
