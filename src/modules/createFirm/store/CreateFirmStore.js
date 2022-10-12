import {CREATE_FIRM_ACTIONS_TYPE} from './Actions';
import prepareForEdit from './edit/prepareForEdit';

const initialState = {
  edit: null,
  sideEffects: false,
  centerMap: {lat: 53.9, lng: 27.56667},
  avatar: [{title: 0, path: null}],
  unpPhoto: [{title: 0, path: null}],
  legalName: {value: null, valid: false, warning: null},
  unp: {value: null, valid: false, warning: null},
  email: {value: null, valid: false, warning: null},
  webSite: {value: null, valid: false, warning: null},
  description: '',
  phone: [
    {
      value: null, valid: false, warning: null,
    },
  ],
  categories: [],
  contacts: [],
  masterPicture: 0,
  pictures: [],
  address: [],
  page: 0,
  error: null,
};


const CreateFirmReducer = (state = initialState, action) => {
  let modifyPictures = [];
  if (action.type === 'CreateFirm/SET_PATH_PICTURES') {
    modifyPictures = [...state[action.payload.reduxField]];
    const index = modifyPictures?.findIndex((el) => el.path === null);
    if (index !== -1) {
      modifyPictures[index].path = action.payload.value;
    }
  }
  switch (action.type) {
    case CREATE_FIRM_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_CENTER_MAP:
      return {
        ...state,
        centerMap: action.payload,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_PICTURE:
      return {
        ...state,
        [action.payload.reduxField]: action.payload.value,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_PATH_PICTURES:
      return {
        ...state,
        [action.payload.reduxField]: modifyPictures,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_PICTURES:
      return {
        ...state,
        [action.payload.reduxField]: action.payload.value,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_MASTER_PICTURE:
      return {
        ...state,
        masterPicture: action.payload,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_ADDRESS:
      return {
        ...state,
        address: [...action.payload],
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_DATA:
      return {
        ...state,
        ...prepareForEdit(action.payload),
      };
    case CREATE_FIRM_ACTIONS_TYPE.SET_INIT:
      return {
        edit: null,
        sideEffects: false,
        centerMap: {lat: 53.9, lng: 27.56667},
        avatar: [{title: 0, path: null}],
        unpPhoto: [{title: 0, path: null}],
        legalName: {value: null, valid: false, warning: null},
        unp: {value: null, valid: false, warning: null},
        email: {value: null, valid: false, warning: null},
        webSite: {value: null, valid: false, warning: null},
        description: '',
        phone: [
          {
            value: null, valid: false, warning: null,
          },
        ],
        categories: [],
        contacts: [],
        pictures: [],
        masterPicture: 0,
        address: [],
        page: 0,
        error: null,
      };
    default:
      return state;
  }
};

export default CreateFirmReducer;
