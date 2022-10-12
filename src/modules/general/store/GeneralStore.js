import {GENERAL_ACTIONS_TYPE} from './Actions';

const initialState = {
  fixed: false,
  plug: false,
};


const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_ACTIONS_TYPE.SET_FIXED:
      return {
        ...state,
        fixed: action.payload,
      };
    case GENERAL_ACTIONS_TYPE.SET_PLUG:
      return {
        ...state,
        plug: action.payload,
      };
    default:
      return state;
  }
};

export default GeneralReducer;
