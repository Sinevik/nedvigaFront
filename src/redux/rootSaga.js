import {all} from 'redux-saga/effects';
import watchAuthSaga from '../modules/auth/store/Saga';
import watchCreateUserSaga from '../modules/createUser/store/Saga';
import watchCreateFirmSaga from '../modules/createFirm/store/Saga';
import watchCreatePosterSaga from '../modules/createPoster/store/Saga';
import watchPostersSaga from '../modules/posters/store/Saga';
import watchMyPostersSaga from '../modules/myPosters/store/Saga';
import watchFirmsSaga from '../modules/firms/store/Saga';
import watchHomeSaga from '../modules/home/store/Saga';
import watchPosterSaga from '../modules/poster/store/Saga';
import watchUserSaga from '../modules/user/store/Saga';
import watchFirmSaga from '../modules/firm/store/Saga';
import watchInfoUserSaga from '../modules/infoUser/store/Saga';

function* rootSaga() {
  yield all([
    watchInfoUserSaga(),
    watchAuthSaga(),
    watchUserSaga(),
    watchCreateUserSaga(),
    watchCreateFirmSaga(),
    watchCreatePosterSaga(),
    watchMyPostersSaga(),
    watchPostersSaga(),
    watchFirmsSaga(),
    watchHomeSaga(),
    watchPosterSaga(),
    watchFirmSaga(),
  ]);
}

export default rootSaga;
