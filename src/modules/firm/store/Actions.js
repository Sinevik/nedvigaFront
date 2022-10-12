export const FIRM_ACTIONS_TYPE = {
  SET_FIRM: 'FIRM/SET_FIRM',
  GET_FIRM: 'FIRM/GET_FIRM',
  SET_SIDE_EFFECTS: 'FIRM/SET_SIDE_EFFECTS',
};

export const ActionsFirm = (dispatch) => ({
  setFirm: (value) => dispatch({
    type: FIRM_ACTIONS_TYPE.SET_FIRM,
    payload: value,
  }),
  getFirm: (value) => dispatch({
    type: FIRM_ACTIONS_TYPE.GET_FIRM,
    payload: value,
  }),
  setSideEffects: (value) => dispatch({
    type: FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
});
