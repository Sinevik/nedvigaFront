export const STORAGE_ACTIONS_TYPE = {
  SET_TOKEN: 'StorageState/SET_TOKEN',
  SET_POSTERS: 'StorageState/SET_POSTERS',
  ADD_POSTER_BOOKMARK: 'StorageState/ADD_POSTER_BOOKMARK',
  DELETE_POSTER_BOOKMARK: 'StorageState/DELETE_POSTER_BOOKMARK',
  SET_CENTER_MAP: 'StorageState/SET_CENTER_MAP',
};


export const ActionsStorage = (dispatch) => ({
  setToken: (value) => dispatch({
    type: STORAGE_ACTIONS_TYPE.SET_TOKEN,
    payload: value,
  }),
  addPosterBookmark: (value) => dispatch({
    type: STORAGE_ACTIONS_TYPE.ADD_POSTER_BOOKMARK,
    payload: value,
  }),
  deletePosterBookmark: (value) => dispatch({
    type: STORAGE_ACTIONS_TYPE.DELETE_POSTER_BOOKMARK,
    payload: value,
  }),
  setCenterMap: (value) => dispatch({
    type: STORAGE_ACTIONS_TYPE.SET_CENTER_MAP,
    payload: value,
  }),
});
