import {HOME_ACTIONS_TYPE} from './Actions';

const initialState = {
  posters: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTIONS_TYPE.SET_POSTERS:
      return {
        ...state,
        posters: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
