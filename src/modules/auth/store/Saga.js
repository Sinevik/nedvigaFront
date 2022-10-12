import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {AUTH_ACTIONS_TYPE} from './Actions';
import {STORAGE_ACTIONS_TYPE} from '../../storage/store/Actions';
import {USER_ACTIONS_TYPE} from '../../user/store/Actions';


function* logIn({payload}) {
  const getEmail = (state) => state.auth.email.value;
  const email = yield select(getEmail);
  const getPassword = (state) => state.auth.password.value;
  const password = yield select(getPassword);
  try {
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/logIn`, {
          email,
          password,
        });
    if (response.data.token === 'unable-to-login') {
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_ERROR,
        payload: response.data.token,
      });
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
        payload: false,
      });
    } else {
      yield put({
        type: STORAGE_ACTIONS_TYPE.SET_TOKEN,
        payload: response.data.token,
      });
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
        payload: false,
      });
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_ERROR,
        payload: null,
      });
      yield put({
        type: USER_ACTIONS_TYPE.GET_USER,
      });
      payload();
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occurred',
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* signIn({payload}) {
  const getPassword = (state) => state.auth.password.value;
  const password = yield select(getPassword);
  const getNickName = (state) => state.auth.nickName.value;
  const nickName = yield select(getNickName);
  const getToken = (state) => state.auth.token;
  const token = yield select(getToken);
  try {
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/signUp`, {
          token,
          nickName,
          password,
        });
    if (response.data.token === 'this-nickname-already-exists') {
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_ERROR,
        payload: response.data.token,
      });
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
        payload: false,
      });
    } else {
      yield put({
        type: STORAGE_ACTIONS_TYPE.SET_TOKEN,
        payload: response.data.token,
      });
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
        payload: false,
      });
      yield put({
        type: AUTH_ACTIONS_TYPE.SET_ERROR,
        payload: null,
      });
      payload();
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occured',
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* sendEmail() {
  const getEmail = (state) => state.auth.email.value;
  const email = yield select(getEmail);
  const getPurpose = (state) => state.auth.purposeSendEmail;
  const purpose = yield select(getPurpose);
  const getCaptchaToken = (state) => state.auth.captchaToken;
  const captchaToken = yield select(getCaptchaToken);

  try {
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(`${process.env.REACT_APP_API_URL}/verifyEmail`, {
      email,
      purpose,
      validTokenCaptcha: captchaToken,
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_STATUS_SEND_EMAIL,
      payload: (!(response.data.email === 'email-already-busy' || response.data.email === 'no-such-email-was-found')),
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_ERROR,
      payload: (response.data.email === 'email-already-busy' || response.data.email === 'no-such-email-was-found') ? response.data.email : null,
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_CAPTCHA,
      payload: false,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occured',
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_CAPTCHA,
      payload: false,
    });
  }
}

function* changePassword() {
  const getPassword = (state) => state.auth.password.value;
  const password = yield select(getPassword);
  const getToken = (state) => state.auth.token;
  const token = yield select(getToken);
  try {
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/resetPassword`, {
          token,
          password,
        });

    yield put({
      type: STORAGE_ACTIONS_TYPE.SET_TOKEN,
      payload: response.data.token,
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_STATUS_RESET_PASSWORD,
      payload: true,
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_ERROR,
      payload: null,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occured',
    });
    yield put({
      type: AUTH_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* watchAuthSaga() {
  yield takeEvery(AUTH_ACTIONS_TYPE.LOG_IN, logIn);
  yield takeEvery(AUTH_ACTIONS_TYPE.SIGN_IN, signIn);
  yield takeEvery(AUTH_ACTIONS_TYPE.SEND_EMAIL, sendEmail);
  yield takeEvery(AUTH_ACTIONS_TYPE.CHANGE_PASSWORD, changePassword);
}

export default watchAuthSaga;
