import {FIRM_ACTIONS_TYPE} from './Actions';

const initialState = {
  data: null,
  sideEffects: false,
};


const FirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRM_ACTIONS_TYPE.SET_FIRM:
      return {
        ...state,
        data: action.payload,
      };
    case FIRM_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    default:
      return state;
  }
};

export default FirmReducer;
