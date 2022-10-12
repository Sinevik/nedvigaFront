import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {FIRM_ACTIONS_TYPE} from './Actions';

function* getFirm({payload}) {
  try {
    yield put({
      type: FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(`
    ${process.env.REACT_APP_API_URL}/getStoreById`,
    {
      id: payload,
    });
    yield put({
      type: FIRM_ACTIONS_TYPE.SET_FIRM,
      payload: response.data.store,
    });
    yield put({
      type: FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  } catch (e) {
    console.log(e);
  }
}


function* watchFirmSaga() {
  yield takeEvery(FIRM_ACTIONS_TYPE.GET_FIRM, getFirm);
}

export default watchFirmSaga;
