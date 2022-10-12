import {USER_ACTIONS_TYPE} from './Actions';

const initialState = {
  data: null,
};


const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS_TYPE.SET_USER:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
