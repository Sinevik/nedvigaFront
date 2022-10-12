import {CREATE_USER_ACTIONS_TYPE} from './Actions';
import prepareForEdit from '../edit/prepareForEdit';

const initialState = {
  mode: 'create',
  sideEffects: false,
  avatar: [{title: 0, path: null}],
  firstName: {value: null, valid: false, warning: null},
  lastName: {value: null, valid: false, warning: null},
  email: {value: null, valid: false, warning: null},
  webSite: {value: null, valid: false, warning: null},
  phone: [],
  contacts: [],
  error: null,
};


const CreateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case CREATE_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case CREATE_USER_ACTIONS_TYPE.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_USER_ACTIONS_TYPE.SET_PICTURE:
      return {
        ...state,
        [action.payload.reduxField]: action.payload.value,
      };
    case CREATE_USER_ACTIONS_TYPE.SET_DATA:
      return {
        ...state,
        ...prepareForEdit(action.payload),
        mode: 'edit',
      };
    case CREATE_USER_ACTIONS_TYPE.SET_INIT:
      return {
        mode: 'create',
        sideEffects: false,
        avatar: [{title: 0, path: null}],
        firstName: {value: null, valid: false, warning: null},
        lastName: {value: null, valid: false, warning: null},
        email: {value: null, valid: false, warning: null},
        webSite: {value: null, valid: false, warning: null},
        phone: [],
        contacts: [],
        error: null,
      };
    default:
      return state;
  }
};

export default CreateUserReducer;
