export const GENERAL_ACTIONS_TYPE = {
  SET_FIXED: 'GENERAL/SET_FIXED',
  SET_PLUG: 'GENERAL/SET_PLUG',
};

export const ActionsGeneral = (dispatch) => ({
  setFixed: (value) => dispatch({
    type: GENERAL_ACTIONS_TYPE.SET_FIXED,
    payload: value,
  }),
  setPlug: (value) => dispatch({
    type: GENERAL_ACTIONS_TYPE.SET_PLUG,
    payload: value,
  }),
});
