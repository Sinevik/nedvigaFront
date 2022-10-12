import {ActionsAuth} from '../modules/auth/store/Actions';
import {ActionsStorage} from '../modules/storage/store/Actions';
import {ActionsCreateUser} from '../modules/createUser/store/Actions';
import {ActionsCreateFirm} from '../modules/createFirm/store/Actions';
import {ActionsCreatePoster} from '../modules/createPoster/store/Actions';
import {ActionsPosters} from '../modules/posters/store/Actions';
import {ActionsMyPosters} from '../modules/myPosters/store/Actions';
import {ActionsFirms} from '../modules/firms/store/Actions';
import {ActionsHome} from '../modules/home/store/Actions';
import {ActionsPoster} from '../modules/poster/store/Actions';
import {ActionsFirm} from '../modules/firm/store/Actions';
import {ActionsUser} from '../modules/user/store/Actions';
import {ActionsInfoUser} from '../modules/infoUser/store/Actions';
import {ActionsGeneral} from '../modules/general/store/Actions';

export const Actions = (reducer) => {
  switch (reducer) {
    case 'auth':
      return ActionsAuth;
    case 'user':
      return ActionsUser;
    case 'infoUser':
      return ActionsInfoUser;
    case 'storage':
      return ActionsStorage;
    case 'createUser':
      return ActionsCreateUser;
    case 'createFirm':
      return ActionsCreateFirm;
    case 'createPoster':
      return ActionsCreatePoster;
    case 'myPosters':
      return ActionsMyPosters;
    case 'posters':
      return ActionsPosters;
    case 'firms':
      return ActionsFirms;
    case 'poster':
      return ActionsPoster;
    case 'firm':
      return ActionsFirm;
    case 'home':
      return ActionsHome;
    case 'general':
      return ActionsGeneral;
    default:
      return false;
  }
};
