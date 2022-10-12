import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {POSTER_ACTIONS_TYPE} from './Actions';

function* getPoster({payload}) {
  try {
    yield put({
      type: POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(`
    ${process.env.REACT_APP_API_URL}/getPosterById`,
    {
      id: payload,
    });
    yield put({
      type: POSTER_ACTIONS_TYPE.SET_POSTER,
      payload: response.data.poster,
    });
    yield put({
      type: POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  } catch (e) {
    console.log(e);
  }
}


function* watchPosterSaga() {
  yield takeEvery(POSTER_ACTIONS_TYPE.GET_POSTER, getPoster);
}

export default watchPosterSaga;
