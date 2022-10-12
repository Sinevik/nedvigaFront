import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {MY_POSTERS_ACTIONS_TYPE} from './Actions';


function* getPosters() {
  const getPageNumber = (state) => state.myPosters.pageNumber;
  const pageNumber = yield select(getPageNumber);
  const getUserId = (state) => state.user.data._id;
  const id = yield select(getUserId);

  try {
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getPostersByUserId`,
        {
          id,
          pageNumber,
        });
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_POSTERS,
      payload: response.data.posters,
    });

    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });

    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* getPostersBookmark() {
  const getPageNumber = (state) => state.myPosters.pageNumber;
  const pageNumber = yield select(getPageNumber);
  const getPostersBookmark = (state) => state.storage.postersBookmark;
  const postersBookmark = yield select(getPostersBookmark);

  try {
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getPostersByIdArray`,
        {
          ids: postersBookmark,
          pageNumber,
        });
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_POSTERS,
      payload: response.data.posters,
    });
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS_BOOKMARK,
    });
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* getCountPosters() {
  const getUserId = (state) => state.user.data._id;
  const id = yield select(getUserId);

  try {
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getPostersByUserIdCount`,
        {
          id,
        });
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_COUNT_POSTERS,
      payload: response.data.number,
    });
  } catch (e) {
    console.log(e);
  }
}

function* getCountPostersBookmark() {
  const getPostersBookmark = (state) => state.storage.postersBookmark;
  const postersBookmark = yield select(getPostersBookmark);

  try {
    const response = yield axios.post(
        `${process.env.REACT_APP_API_URL}/getPostersByIdArrayCount`,
        {
          ids: postersBookmark,
        });
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_COUNT_POSTERS,
      payload: response.data.number,
    });
  } catch (e) {
    console.log(e);
  }
}

function* deletePoster({payload}) {
  const getToken = (state) => state.storage.token;
  const token = yield select(getToken);

  try {
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    yield axios.post(`
    ${process.env.REACT_APP_API_URL}/deletePoster`, {
      _id: payload,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put({
      type: MY_POSTERS_ACTIONS_TYPE.GET_POSTERS,
    });
  } catch (e) {
    console.log(e);
  }
}

function* setUp({payload}) {
  const getToken = (state) => state.storage.token;
  const token = yield select(getToken);
  try {
    yield axios.post(`
    ${process.env.REACT_APP_API_URL}/upPoster`, {
      _id: payload,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

function* watchMyPostersSaga() {
  yield takeEvery(MY_POSTERS_ACTIONS_TYPE.GET_POSTERS, getPosters);
  yield takeEvery(MY_POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS, getCountPosters);
  yield takeEvery(MY_POSTERS_ACTIONS_TYPE.DELETE_POSTER, deletePoster);
  yield takeEvery(MY_POSTERS_ACTIONS_TYPE.GET_POSTERS_BOOKMARK, getPostersBookmark);
  yield takeEvery(MY_POSTERS_ACTIONS_TYPE.GET_COUNT_POSTERS_BOOKMARK, getCountPostersBookmark);
  yield takeEvery(MY_POSTERS_ACTIONS_TYPE.SET_UP, setUp);
}

export default watchMyPostersSaga;
