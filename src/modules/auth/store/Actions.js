export const AUTH_ACTIONS_TYPE = {
  LOG_IN: 'AuthState/LOG_IN',
  SIGN_IN: 'AuthState/SIGN_IN',
  SEND_EMAIL: 'AuthState/SEND_EMAIL',
  CHANGE_PASSWORD: 'AuthState/CHANGE_PASSWORD',
  /* ---------- */
  SET_INIT_STATE: 'AuthState/SET_INIT_STATE',
  SET_VALUE_FIELD: 'AuthState/SET_VALUE_FIELD',
  SET_SIDE_EFFECTS: 'AuthState/SET_SIDE_EFFECTS',
  SET_STATUS_SEND_EMAIL: 'AuthState/SET_STATUS_SEND_EMAIL',
  SET_ERROR: 'AuthState/SET_ERROR',
  SET_STATUS_RESET_PASSWORD: 'AuthState/SET_STATUS_RESET_PASSWORD',
  SET_PURPOSE_SEND_EMAIL: 'AuthState/SET_PURPOSE_SEND_EMAIL',
  SET_TOKEN: 'AuthState/SET_TOKEN',
  SET_TOKEN_CAPTCHA: 'AuthState/SET_TOKEN_CAPTCHA',
  SET_CAPTCHA: 'AuthState/SET_CAPTCHA',
  SET_PAGE: 'AuthState/SET_PAGE',
};


export const ActionsAuth = (dispatch) => ({
  logIn: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.LOG_IN,
    payload: value,
  }),
  signIn: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SIGN_IN,
    payload: value,
  }),
  sendEmail: () => dispatch({
    type: AUTH_ACTIONS_TYPE.SEND_EMAIL,
  }),
  changePassword: () => dispatch({
    type: AUTH_ACTIONS_TYPE.CHANGE_PASSWORD,
  }),
  setSideEffects: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
    payload: value,
  }),
  setInitState: () => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_INIT_STATE,
  }),
  setValueField: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_VALUE_FIELD,
    payload: value,
  }),
  setPurposeSendEmail: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_PURPOSE_SEND_EMAIL,
    payload: value,
  }),
  setToken: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_TOKEN,
    payload: value,
  }),
  setTokenCaptcha: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_TOKEN_CAPTCHA,
    payload: value,
  }),
  setCaptcha: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_CAPTCHA,
    payload: value,
  }),
  setError: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_ERROR,
    payload: value,
  }),
  setStatusSendEmail: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_STATUS_SEND_EMAIL,
    payload: value,
  }),
  setStatusResetPassword: (value) => dispatch({
    type: AUTH_ACTIONS_TYPE.SET_STATUS_RESET_PASSWORD,
    payload: value,
  }),
});
