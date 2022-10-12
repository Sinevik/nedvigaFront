import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {FIRMS_ACTIONS_TYPE} from './Actions';

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};


function* getFirmsMap({payload}) {
  const getCenterMap = (state) => state.storage.centerMap;
  const centerMap = yield select(getCenterMap);
  try {
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
      payload: true,
    });
    const response = yield axios.post(`
    ${process.env.REACT_APP_API_URL}/getStoresMap`,
    {
      category: payload,
      latitude: centerMap.lat,
      longitude: centerMap.lng,
    });
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_FIRMS_MAP,
      payload: response.data.stores,
    });
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
      payload: false,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
      payload: false,
    });
  }
}

function* getFirmsIdArray({payload}) {
  const getSelectedFirmMap = (state) => state.posters.selectedFirmMap;
  const selected = yield select(getSelectedFirmMap);
  const arr = selected?.map((item) => item._id);
  const equal = arraysEqual(payload?.sort(), arr?.sort());
  if (equal) {
    try {
      yield put({
        type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_FIRMS_MAP,
        payload: true,
      });
      const response = yield axios.post(
          `${process.env.REACT_APP_API_URL}/getStoresByIdArray`,
          {
            ids: payload,
          });
      yield put({
        type: FIRMS_ACTIONS_TYPE.SET_SELECTED_FIRM_MAP,
        payload: response.data.stores,
      });


      yield put({
        type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_FIRMS_MAP,
        payload: false,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_FIRMS_MAP,
        payload: false,
      });
    }
  }
}

function* getFirms({payload}) {
  const getCenterMap = (state) => state.storage.centerMap;
  const centerMap = yield select(getCenterMap);
  const getPageNumber = (state) => state.firms.pageNumber;
  const pageNumber = yield select(getPageNumber);

  try {
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getStoresByLatLng`,
        {
          pageNumber,
          latitude: centerMap.lat,
          longitude: centerMap.lng,
          category: payload,
        });
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_FIRMS,
      payload: response.data.stores,
    });

    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });

    yield put({
      type: FIRMS_ACTIONS_TYPE.GET_COUNT_FIRMS,
      payload,
    });
  } catch (e) {
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* getCountFirms({payload}) {
  const getCenterMap = (state) => state.storage.centerMap;
  const centerMap = yield select(getCenterMap);
  const getPageNumber = (state) => state.firms.pageNumber;
  const pageNumber = yield select(getPageNumber);
  try {
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getStoresByIdLatLngCount`,
        {
          pageNumber,
          latitude: centerMap.lat,
          longitude: centerMap.lng,
          category: payload,
        });
    yield put({
      type: FIRMS_ACTIONS_TYPE.SET_COUNT_FIRMS,
      payload: response.data.number,
    });
  } catch (e) {
    console.log(e);
  }
}

function* watchFirmsSaga() {
  yield takeEvery(FIRMS_ACTIONS_TYPE.GET_FIRMS_MAP, getFirmsMap);
  yield takeEvery(FIRMS_ACTIONS_TYPE.GET_FIRMS_ID_ARRAY, getFirmsIdArray);
  yield takeEvery(FIRMS_ACTIONS_TYPE.GET_FIRMS, getFirms);
  yield takeEvery(FIRMS_ACTIONS_TYPE.GET_COUNT_FIRMS, getCountFirms);
}

export default watchFirmsSaga;
