export const FIRMS_ACTIONS_TYPE = {
  GET_FIRMS_MAP: 'FIRMS/GET_FIRMS_MAP',
  GET_FIRMS_ID_ARRAY: 'FIRMS/GET_FIRMS_ID_ARRAY',
  SET_SELECTED_FIRM_MAP: 'FIRMS/SET_SELECTED_FIRM_MAP',
  SET_FIRMS_MAP: 'FIRMS/SET_FIRMS_MAP',
  SET_SIDE_EFFECTS_MAP: 'FIRMS/SET_SIDE_EFFECTS_MAP',
  GET_FIRMS: 'FIRMS/GET_FIRMS',
  SET_FIRMS: 'FIRMS/SET_FIRMS',
  SET_SIDE_EFFECTS: 'FIRMS/SET_SIDE_EFFECTS',
  SET_COUNT_FIRMS: 'FIRMS/SET_COUNT_FIRMS',
  GET_COUNT_FIRMS: 'FIRMS/GET_COUNT_FIRMS',
  SET_SIDE_EFFECTS_FIRMS_MAP: 'FIRMS/SET_SIDE_EFFECTS_FIRMS_MAP',
  SET_VALUE_FIELD: 'FIRMS/SET_VALUE_FIELD',
  SET_INIT_STATE: 'FIRMS/SET_INIT_STATE',

};

export const ActionsFirms = (dispatch) => ({
  getFirmsMap: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.GET_FIRMS_MAP,
    payload: value,
  }),
  getFirms: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.GET_FIRMS,
    payload: value,
  }),
  getCountFirms: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.GET_COUNT_FIRMS,
    payload: value,
  }),
  getFirmsIdArray: () => dispatch({
    type: FIRMS_ACTIONS_TYPE.GET_FIRMS_ID_ARRAY,
  }),
  setSelectedFirmMap: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_SELECTED_FIRM_MAP,
    payload: value,
  }),
  setFirmsMap: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_FIRMS_MAP,
    payload: value,
  }),
  setFirms: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_FIRMS,
    payload: value,
  }),
  setCountFirms: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_COUNT_FIRMS,
    payload: value,
  }),
  setSideEffects: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
  setSideEffectsMap: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
    payload: value,
  }),
  setSideEffectsFirmsMap: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_FIRMS_MAP,
    payload: value,
  }),
  setValueField: (value) => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_VALUE_FIELD,
    payload: value,
  }),
  setInitState: () => dispatch({
    type: FIRMS_ACTIONS_TYPE.SET_INIT_STATE,
  }),
});
