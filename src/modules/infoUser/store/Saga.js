import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {INFO_USER_ACTIONS_TYPE} from './Actions';

function* getUser({payload}) {
  try {
    yield put({
      type: INFO_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(`
    ${process.env.REACT_APP_API_URL}/getUserById`, {
      id: payload,
    });
    const count = yield axios.post(`
    ${process.env.REACT_APP_API_URL}/getPostersByUserIdCount`, {
      id: payload,
    });
    yield put({
      type: INFO_USER_ACTIONS_TYPE.SET_USER,
      payload: {
        ...response.data.user,
        countPosters: count.data.number,
      },
    });
    yield put({
      type: INFO_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  } catch (e) {
    yield put({
      type: INFO_USER_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occured',
    });
    yield put({
      type: INFO_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}


function* watchInfoUserSaga() {
  yield takeEvery(INFO_USER_ACTIONS_TYPE.GET_USER, getUser);
}

export default watchInfoUserSaga;
