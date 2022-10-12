import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {prepareFirmForSave} from '../../../common/functions';
import {CREATE_FIRM_ACTIONS_TYPE} from './Actions';
import {USER_ACTIONS_TYPE} from '../../user/store/Actions';


function* createFirm({payload}) {
  const getToken = (state) => state.storage.token;
  const token = yield select(getToken);
  const getCreateFirm = (state) => state.createFirm;
  const createFirm = yield select(getCreateFirm);
  const companySave = prepareFirmForSave(createFirm);
  const getEdit = (state) => state.createFirm.edit;
  const edit = yield select(getEdit);
  try {
    /*yield put({
      type: CREATE_FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });*/
    if (!edit) {
      yield axios.post(`${process.env.REACT_APP_API_URL}/createStore`, {
        ...companySave,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      yield axios.post(`${process.env.REACT_APP_API_URL}/updateStore`, {
        ...companySave,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    yield put({
      type: CREATE_FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
    yield put({
      type: USER_ACTIONS_TYPE.GET_USER,
    });
    /*yield put({
      type: CREATE_FIRM_ACTIONS_TYPE.SET_INIT,
      payload: false,
    });*/
    //payload();
  } catch (e) {
    console.log(e);
    yield put({
      type: CREATE_FIRM_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occured',
    });
    yield put({
      type: CREATE_FIRM_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
  }
}

function* watchCreateFirmSaga() {
  yield takeEvery(CREATE_FIRM_ACTIONS_TYPE.CREATE_FIRM, createFirm);
}

export default watchCreateFirmSaga;
