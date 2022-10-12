import {INFO_USER_ACTIONS_TYPE} from './Actions';

const initialState = {
  user: null,
  sideEffects: false,
  error: null,
};


const InfoUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_USER_ACTIONS_TYPE.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case INFO_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case INFO_USER_ACTIONS_TYPE.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default InfoUserReducer;
