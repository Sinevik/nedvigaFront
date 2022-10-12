import {put, select, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {prepareUserForSave} from '../../../common/functions';
import {CREATE_USER_ACTIONS_TYPE} from './Actions';
import {USER_ACTIONS_TYPE} from '../../user/store/Actions';


function* createUser({payload}) {
  const getToken = (state) => state.storage.token;
  const token = yield select(getToken);
  const getCreateUser = (state) => state.createUser;
  const createUser = yield select(getCreateUser);
  const userSave = prepareUserForSave(createUser);
  try {
    yield put({
      type: CREATE_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: true,
    });
    yield axios.post(
        `${process.env.REACT_APP_API_URL}/updateUser`, {
          ...userSave,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    yield put({
      type: CREATE_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
    yield put({
      type: USER_ACTIONS_TYPE.GET_USER,
    });
    payload();
  } catch (e) {
    console.log(e);
    yield put({
      type: CREATE_USER_ACTIONS_TYPE.SET_SIDE_EFFECTS,
      payload: false,
    });
    yield put({
      type: CREATE_USER_ACTIONS_TYPE.SET_ERROR,
      payload: 'error-has-occured',
    });
  }
}

function* watchCreateUserSaga() {
  yield takeEvery(CREATE_USER_ACTIONS_TYPE.CREATE_USER, createUser);
}

export default watchCreateUserSaga;
