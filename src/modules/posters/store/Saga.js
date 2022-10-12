import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {getFilter} from '../../../common/functions';
import {POSTERS_ACTIONS_TYPE} from './Actions';

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};


function* getPostersMap({payload}) {
  const getState = (state) => state.posters;
  const state = yield select(getState);
  const getKind = (state) => state.posters.kind;
  const kind = yield select(getKind);
  const getCenterMap = (state) => state.storage.centerMap;
  const centerMap = yield select(getCenterMap);
  const filter = getFilter({kind, state});


  try {
    if (payload?.side) {
      yield put({
        type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
        payload: true,
      });
    }
    const response = yield axios.post(`
    ${process.env.REACT_APP_API_URL}/getPostersMap`,
    {
      ...filter,
      latitude: payload?.lat || centerMap.lat,
      longitude: payload?.lng || centerMap.lng,
    }, {
      headers: {
        Distance: payload?.distance || 'max',
      },
    });
    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_POSTERS_MAP,
      payload: response.data.posters,
    });
    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
      payload: false,
    });
  } catch (e) {
    console.log(e);

    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP,
      payload: false,
    });
  }
}

function* getPosters() {
  const getKind = (state) => state.posters.kind;
  const kind = yield select(getKind);
  const getPageNumber = (state) => state.posters.pageNumber;
  const pageNumber = yield select(getPageNumber);
  const getCenterMap = (state) => state.storage.centerMap;
  const centerMap = yield select(getCenterMap);
  const getState = (state) => state.posters;
  const state = yield select(getState);

  const filter = getFilter({kind, state});

  try {
    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getPostersByLatLng`,
        {
          ...filter,
          pageNumber,
          latitude: centerMap.lat,
          longitude: centerMap.lng,
        });
    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_POSTERS,
      payload: response.data.posters,
    });

    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });

    yield put({
      type: POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS,
      payload: kind,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* getCountPosters() {
  const getKind = (state) => state.posters.kind;
  const kind = yield select(getKind);
  const getCenterMap = (state) => state.storage.centerMap;
  const centerMap = yield select(getCenterMap);
  const getState = (state) => state.posters;
  const state = yield select(getState);

  const filter = getFilter({kind, state});

  try {
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getPostersByLatLngCount`,
        {
          ...filter,
          latitude: centerMap.lat,
          longitude: centerMap.lng,
        });
    yield put({
      type: POSTERS_ACTIONS_TYPE.SET_COUNT_POSTERS,
      payload: response.data.number,
    });
  } catch (e) {
    console.log(e);
  }
}

function* getPostersIdArray({payload}) {
  const getSelectedPosterMap = (state) => state.posters.selectedPosterMap;
  const selected = yield select(getSelectedPosterMap);
  const arr = selected?.map((item) => item._id);
  const equal = arraysEqual(payload?.sort(), arr?.sort());
  if (!equal) {
    try {
      yield put({
        type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_POSTERS_MAP,
        payload: true,
      });
      const response = yield axios.post(
          `${process.env.REACT_APP_API_URL}/getPostersByIdArray`,
          {
            ids: payload,
          });
      yield put({
        type: POSTERS_ACTIONS_TYPE.SET_SELECTED_POSTER_MAP,
        payload: response.data.posters,
      });


      yield put({
        type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_POSTERS_MAP,
        payload: false,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_POSTERS_MAP,
        payload: false,
      });
    }
  }
}

function* watchPostersSaga() {
  yield takeEvery(POSTERS_ACTIONS_TYPE.GET_POSTERS_MAP, getPostersMap);
  yield takeEvery(POSTERS_ACTIONS_TYPE.GET_POSTERS, getPosters);
  yield takeEvery(POSTERS_ACTIONS_TYPE.GET_POSTERS_ID_ARRAY, getPostersIdArray);
  yield takeEvery(POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS, getCountPosters);
}

export default watchPostersSaga;
