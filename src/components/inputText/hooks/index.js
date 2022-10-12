import {SubFormReduxHook} from './SubFormReduxHook';
import {ReduxHook} from './ReduxHook';
import {ImplementParentHook} from './ImplementParentHook';


export const chooseHook = (hook) => {
  let result;
  switch (hook) {
    case 'redux':
      result = ReduxHook;
      break;
    case 'subFormRedux':
      result = SubFormReduxHook;
      break;
    case 'parent':
      result = ImplementParentHook;
      break;
    default:
  }
  return result;
};
