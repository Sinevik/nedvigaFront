export const POSTERS_ACTIONS_TYPE = {
  GET_POSTERS: 'Posters/GET_POSTERS',
  GET_POSTERS_MAP: 'Posters/GET_POSTERS_MAP',
  GET_POSTERS_ID_ARRAY: 'Posters/GET_POSTERS_ID_ARRAY',
  GET_COUNT_POSTERS: 'Posters/GET_COUNT_POSTERS',
  SET_VALUE_FIELD: 'Posters/SET_VALUE_FIELD',
  SET_CENTER_MAP: 'Posters/SET_CENTER_MAP',
  SET_SELECTED_POSTER_MAP: 'Posters/SET_SELECTED_POSTER_MAP',
  SET_KIND: 'Posters/SET_KIND',
  SET_SIDE_EFFECTS_MAP: 'Posters/SET_SIDE_EFFECTS_MAP',
  SET_SIDE_EFFECTS: 'Posters/SET_SIDE_EFFECTS',
  SET_SIDE_EFFECTS_POSTERS_MAP: 'Posters/SET_SIDE_EFFECTS_POSTERS_MAP:',
  SET_POSTERS_MAP: 'Posters/SET_POSTERS_MAP',
  SET_POSTERS: 'Posters/SET_POSTERS',
  SET_INIT_STATE: 'Posters/SET_INIT_STATE',
  SET_COUNT_POSTERS: 'Posters/SET_COUNT_POSTERS',
};

export const ActionsPosters = (dispatch) => ({
  setValueField: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_VALUE_FIELD,
    payload: value,
  }),
  setCenterMap: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_CENTER_MAP,
    payload: value,
  }),
  setPostersMap: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_POSTERS_MAP,
    payload: value,
  }),
  setPosters: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_POSTERS,
    payload: value,
  }),
  setSideEffectsMap: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
    payload: value,
  }),

  setSideEffectsPostersMap: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_POSTERS_MAP,
    payload: value,
  }),

  setKind: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_KIND,
    payload: value,
  }),
  setSelectedPosterMap: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_SELECTED_POSTER_MAP,
    payload: value,
  }),
  getPosters: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.GET_POSTERS,
    payload: value,
  }),
  getPostersMap: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.GET_POSTERS_MAP,
    payload: value,
  }),
  getPostersIdArray: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.GET_POSTERS_ID_ARRAY,
    payload: value,
  }),
  getCountPosters: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS,
    payload: value,
  }),
  setInitState: () => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_INIT_STATE,
  }),
  setCountPosters: (value) => dispatch({
    type: POSTERS_ACTIONS_TYPE.SET_COUNT_POSTERS,
    payload: value,
  }),
});
