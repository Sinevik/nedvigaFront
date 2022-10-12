import {NextPageReduxHook} from './NextPageReduxHook';
import {ReduxHook} from './ReduxHook';
import {ImplementParentHook} from './ImplementParentHook';


export const chooseHook = (hook) => {
  let result;
  switch (hook) {
    case 'nextPageRedux':
      result = NextPageReduxHook;
      break;
    case 'redux':
      result = ReduxHook;
      break;
    case 'parent':
      result = ImplementParentHook;
      break;
    default:
  }
  return result;
};
