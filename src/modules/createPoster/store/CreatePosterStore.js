import {CREATE_POSTER_ACTIONS_TYPE} from './Actions';
import prepareForEdit from './edit/prepareForEdit';

const initialState = {
  edit: null,
  kind: 'flat',
  selectedInput: null,
  typeApartment: 'first',
  state: 'not-decoration',
  typePoster: 'rent',
  typeRent: 'monthly',
  typeSales: 'owner',
  typeCommercial: 'sale',
  comfort: [],
  wallMaterial: 'cube',
  shed: 'yes',
  description: '',
  countSeatsShed: '1',
  legalName: {value: null, valid: false, warning: null},
  unp: {value: null, valid: false, warning: null},
  name: {value: null, valid: false, warning: null},
  callFrom: '8:00',
  callTo: '0:00',
  phone: [],
  contacts: [],
  conditionsRent: [],
  price: {value: null, valid: false, warning: null},
  parkingPlace: 'no',
  floor: {value: null, valid: false, warning: null},
  countFloors: {value: null, valid: false, warning: null},
  ceilingHeight: {value: null, valid: false, warning: null},
  yearOfConstruction: {value: null, valid: false, warning: null},
  countRoomsInput: {value: null, valid: false, warning: null},
  countRooms: '1',
  combineKitchen: 'no',
  loggia: 'yes',
  area: {value: null, valid: false, warning: null},
  livingArea: {value: null, valid: false, warning: null},
  kitchenArea: {value: null, valid: false, warning: null},
  landArea: {value: null, valid: false, warning: null},
  pictures: [],
  masterPicture: 0,
  centerMap: {lat: 53.9, lng: 27.56667},
  location: {
    lat: null,
    lng: null,
  },
  fullAddress: '',
  city: '',
  page: 0,
  errors: null,
  sideEffects: null,
};


const CreateCompanyReducer = (state = initialState, action) => {
  let modifyPictures = [];
  if (action.type === 'CreatePoster/SET_PATH_PICTURES') {
    modifyPictures = [...state[action.payload.reduxField]];
    const index = modifyPictures?.findIndex((el) => el.path === null);
    if (index !== -1) {
      modifyPictures[index].path = action.payload.value;
    }
  }
  switch (action.type) {
    case CREATE_POSTER_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_ADDRESS:
      return {
        ...state,
        location: {
          lat: action.payload.lat,
          lng: action.payload.lng,
        },
        fullAddress: action.payload.fullAddress || '',
        city: action.payload.city || '',
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_PATH_PICTURES:
      return {
        ...state,
        [action.payload.reduxField]: modifyPictures,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_PICTURES:
      return {
        ...state,
        [action.payload.reduxField]: action.payload.value,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_MASTER_PICTURE:
      return {
        ...state,
        masterPicture: action.payload,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_CENTER_MAP:
      return {
        ...state,
        centerMap: action.payload,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_SELECTED_COMBINE_INPUT:
      return {
        ...state,
        selectedInput: action.payload,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_KIND:
      return {
        ...state,
        kind: action.payload,
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_DATA:
      return {
        ...state,
        ...prepareForEdit(action.payload),
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_CONTACTS:
      return {
        ...state,
        phone: action.payload.phone ? action.payload.phone.map((phone) => {
          return {
            value: phone, valid: true, warning: null,
          };
        }) : [
          {
            value: null, valid: false, warning: null,
          },
        ],
        contacts: action.payload.contacts ? action.payload.contacts.map((contact) => {
          return [
            {value: contact.method, valid: true, warning: null},
            {value: contact.path, valid: true, warning: null},
          ];
        }) : [],
        unp: {value: action.payload.unp || null, valid: !!action.payload.unp, warning: null},
        legalName: {value: action.payload.legalName || null, valid: !!action.payload.legalName, warning: null},
        name: {value: action.payload.name || null, valid: !!action.payload.name, warning: null},
        typeSales: action.payload.typeSales || 'owner',
        callFrom: action.payload.callTime.from || '8:00',
        callTo: action.payload.callTime.to || '0:00',
      };
    case CREATE_POSTER_ACTIONS_TYPE.SET_INIT:
      return {
        edit: null,
        kind: 'flat',
        selectedInput: null,
        typeApartment: 'first',
        state: 'not-decoration',
        typePoster: 'rent',
        typeRent: 'monthly',
        typeSales: 'owner',
        typeCommercial: 'sale',
        comfort: [],
        wallMaterial: 'cube',
        shed: 'yes',
        description: '',
        countSeatsShed: '1',
        legalName: {value: null, valid: false, warning: null},
        unp: {value: null, valid: false, warning: null},
        name: {value: null, valid: false, warning: null},
        callFrom: '8:00',
        callTo: '0:00',
        phone: [],
        contacts: [],
        conditionsRent: [],
        price: {value: null, valid: false, warning: null},
        parkingPlace: 'no',
        floor: {value: null, valid: false, warning: null},
        countFloors: {value: null, valid: false, warning: null},
        ceilingHeight: {value: null, valid: false, warning: null},
        yearOfConstruction: {value: null, valid: false, warning: null},
        countRoomsInput: {value: null, valid: false, warning: null},
        countRooms: '1',
        combineKitchen: 'no',
        loggia: 'yes',
        area: {value: null, valid: false, warning: null},
        livingArea: {value: null, valid: false, warning: null},
        kitchenArea: {value: null, valid: false, warning: null},
        landArea: {value: null, valid: false, warning: null},
        pictures: [],
        masterPicture: 0,
        centerMap: {lat: 53.9, lng: 27.56667},
        location: {
          lat: null,
          lng: null,
        },
        fullAddress: '',
        city: '',
        page: 0,
        errors: null,
        sideEffects: null,
      };
    default:
      return state;
  }
};

export default CreateCompanyReducer;
