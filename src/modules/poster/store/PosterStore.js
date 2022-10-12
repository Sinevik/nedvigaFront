import {POSTER_ACTIONS_TYPE} from './Actions';

const initialState = {
  data: null,
  sideEffects: true,
};


const PosterReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTER_ACTIONS_TYPE.SET_POSTER:
      return {
        ...state,
        data: action.payload,
      };
    case POSTER_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    default:
      return state;
  }
};

export default PosterReducer;
