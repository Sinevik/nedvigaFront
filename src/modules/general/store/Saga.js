import {takeEvery} from 'redux-saga/effects';

function* getExample({payload}) {

}


function* watchGeneralSaga() {
  yield takeEvery('', getExample);
}

export default watchGeneralSaga;
