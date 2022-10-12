import {put, takeEvery} from 'redux-saga/effects';
import {HOME_ACTIONS_TYPE} from './Actions';
import axios from 'axios';

function* getPosters() {
  try {
    const response = yield axios.post(`${process.env.REACT_APP_API_URL}/getPostersHome`);
    yield put({
      type: HOME_ACTIONS_TYPE.SET_POSTERS,
      payload: response.data.posters,
    });
  } catch (e) {
    console.log(e);
  }
}


function* watchHomeSaga() {
  yield takeEvery(HOME_ACTIONS_TYPE.GET_POSTERS, getPosters);
}

export default watchHomeSaga;
