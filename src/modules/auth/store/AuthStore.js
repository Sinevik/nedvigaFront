import {AUTH_ACTIONS_TYPE} from './Actions';

const initialState = {
  sideEffects: false,
  captchaToken: false,
  captcha: false,
  statusSendEmail: false,
  statusResetPassword: false,
  email: {value: null, valid: false, warning: null},
  password: {value: null, valid: false, warning: null},
  nickName: {value: null, valid: false, warning: null},
  confirmPassword: {value: null, valid: false, warning: null},
  token: null,
  purposeSendEmail: null,
  errors: null,
};


const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case AUTH_ACTIONS_TYPE.SET_STATUS_SEND_EMAIL:
      return {
        ...state,
        statusSendEmail: action.payload,
        errors: action.payload ? null : state.errors,
      };
    case AUTH_ACTIONS_TYPE.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case AUTH_ACTIONS_TYPE.SET_STATUS_RESET_PASSWORD:
      return {
        ...state,
        statusResetPassword: action.payload,
      };
    case AUTH_ACTIONS_TYPE.SET_PURPOSE_SEND_EMAIL:
      return {
        ...state,
        purposeSendEmail: action.payload,
      };
    case AUTH_ACTIONS_TYPE.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case AUTH_ACTIONS_TYPE.SET_TOKEN_CAPTCHA:
      return {
        ...state,
        captchaToken: action.payload,
      };
    case AUTH_ACTIONS_TYPE.SET_CAPTCHA:
      return {
        ...state,
        captcha: action.payload,
      };
    case AUTH_ACTIONS_TYPE.SET_INIT_STATE:
      return {
        ...state,
        sideEffects: false,
        captchaToken: false,
        captcha: false,
        statusSendEmail: false,
        statusResetPassword: false,
        email: {value: null, valid: false, warning: null},
        password: {value: null, valid: false, warning: null},
        nickName: {value: null, valid: false, warning: null},
        confirmPassword: {value: null, valid: false, warning: null},
        token: null,
        purposeSendEmail: null,
        errors: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
