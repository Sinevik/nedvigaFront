import {STORAGE_ACTIONS_TYPE} from './Actions';

const initialState = {
  token: null,
  postersBookmark: [],
  centerMap: {lat: 53.902334, lng: 27.5618791},
};


const StorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORAGE_ACTIONS_TYPE.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case STORAGE_ACTIONS_TYPE.ADD_POSTER_BOOKMARK:
      return {
        ...state,
        postersBookmark: [
          ...state.postersBookmark,
          action.payload,
        ],
      };
    case STORAGE_ACTIONS_TYPE.SET_CENTER_MAP:
      return {
        ...state,
        centerMap: action.payload,
      };
    case STORAGE_ACTIONS_TYPE.DELETE_POSTER_BOOKMARK:
      return {
        ...state,
        postersBookmark: state.postersBookmark.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default StorageReducer;
