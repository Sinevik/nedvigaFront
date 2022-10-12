import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {USER_ACTIONS_TYPE} from './Actions';

function* getUser() {
  const getToken = (state) => state.storage.token;
  const token = yield select(getToken);
  if (token) {
    try {
      const response = yield axios.post(`${process.env.REACT_APP_API_URL}/getUserByToken`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = {
        ...response.data.user,
        store: response.data.store || null,
      };
      yield put({
        type: USER_ACTIONS_TYPE.SET_USER,
        payload: user,
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    yield put({
      type: USER_ACTIONS_TYPE.SET_USER,
      payload: null,
    });
  }
}


function* watchUserSaga() {
  yield takeEvery(USER_ACTIONS_TYPE.GET_USER, getUser);
}

export default watchUserSaga;
