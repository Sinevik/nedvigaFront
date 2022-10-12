import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {CREATE_POSTER_ACTIONS_TYPE} from './Actions';
import {preparePosterForSave} from '../../../common/functions';


function* createPoster({payload}) {
  const getToken = (state) => state.storage.token;
  const token = yield select(getToken);
  const getKind = (state) => state.createPoster.kind;
  const kind = yield select(getKind);
  const getEdit = (state) => state.createPoster.edit;
  const edit = yield select(getEdit);
  const getCreatePoster = (state) => state.createPoster;
  const poster = yield select(getCreatePoster);
  const posterSave = preparePosterForSave(poster);

  try {
    yield put({
      type: CREATE_POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    if (!edit) {
      yield axios.post(`
    ${process.env.REACT_APP_API_URL}/createPoster`, {
        ...posterSave,
        type: kind,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      yield axios.post(`
    ${process.env.REACT_APP_API_URL}/updatePoster`, {
        ...posterSave,
        _id: edit,
        type: kind,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    yield put({
      type: CREATE_POSTER_ACTIONS_TYPE.SET_ERROR,
      payload: null,
    });
    yield put({
      type: CREATE_POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
    yield put({
      type: CREATE_POSTER_ACTIONS_TYPE.SET_VALUE_FIELD,
      payload: {
        field: 'page',
        value: 0,
      },
    });
    const contactsSave = {
      phone: posterSave.phone,
      name: posterSave.name,
      callTime: posterSave.callTime,
      typeSales: posterSave.typeSales,
    };
    if (posterSave.contacts && posterSave.contacts.length > 0) {
      contactsSave.contacts = posterSave.contacts;
    }
    if (posterSave.legalName) {
      contactsSave.legalName = posterSave.legalName;
    }
    if (posterSave.unp) {
      contactsSave.unp = posterSave.unp;
    }
    localStorage.setItem('contacts', JSON.stringify(contactsSave));
    payload();
  } catch (e) {
    console.log(e);
    yield put({
      type: CREATE_POSTER_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occured',
    });
    yield put({
      type: CREATE_POSTER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* watchCreatePosterSaga() {
  yield takeEvery(CREATE_POSTER_ACTIONS_TYPE.CREATE_POSTER, createPoster);
}

export default watchCreatePosterSaga;
