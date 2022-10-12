import {combineReducers} from 'redux';
import StorageReducer from '../modules/storage/store/StorageStore';
import AuthStoreReducer from '../modules/auth/store/AuthStore';
import CreateUserReducer from '../modules/createUser/store/CreateUserStore';
import CreateFirmReducer from '../modules/createFirm/store/CreateFirmStore';
import CreatePosterReducer from '../modules/createPoster/store/CreatePosterStore';
import PostersReducer from '../modules/posters/store/PostersStore';
import MyPostersReducer from '../modules/myPosters/store/MyPostersStore';
import FirmsReducer from '../modules/firms/store/FirmsStore';
import HomeReducer from '../modules/home/store/HomeStore';
import PosterReducer from '../modules/poster/store/PosterStore';
import FirmReducer from '../modules/firm/store/FirmStore';
import UserReducer from '../modules/user/store/UserStore';
import InfoUserReducer from '../modules/infoUser/store/InfoUserStore';
import GeneralReducer from '../modules/general/store/GeneralStore';


export default combineReducers({
  user: UserReducer,
  infoUser: InfoUserReducer,
  storage: StorageReducer,
  auth: AuthStoreReducer,
  home: HomeReducer,
  poster: PosterReducer,
  firm: FirmReducer,
  posters: PostersReducer,
  myPosters: MyPostersReducer,
  firms: FirmsReducer,
  createUser: CreateUserReducer,
  createFirm: CreateFirmReducer,
  createPoster: CreatePosterReducer,
  general: GeneralReducer,
});
