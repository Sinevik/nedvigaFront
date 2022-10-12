import {ReduxHook} from './ReduxHook';


export const chooseHook = (hook) => {
  let result;
  switch (hook) {
    case 'redux':
      result = ReduxHook;
      break;
    default:
  }
  return result;
};
