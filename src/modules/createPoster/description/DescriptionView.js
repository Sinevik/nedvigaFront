import React from 'react';
import DescriptionHook from './DescriptionHook';
import Flat from './flat/Flat';
import House from './house/House';
import Land from './land/Land';
import Shed from './shed/Shed';
import Commercial from './commercial/Commercial';
import Room from './room/Room';


const getContent = (state, small) => {
  let result;
  switch (state.kind) {
    case 'flat':
      result = (
        <Flat small={small} state={state}/>
      );
      break;
    case 'house':
      result = (
        <House small={small} state={state}/>
      );
      break;
    case 'dacha':
      result = (
        <House small={small} state={state}/>
      );
      break;
    case 'land':
      result = (
        <Land small={small} state={state}/>
      );
      break;
    case 'shed':
      result = (
        <Shed small={small} state={state}/>
      );
      break;
    case 'room':
      result = (
        <Room small={small} state={state}/>
      );
      break;
    case 'commercial':
      result = (
        <Commercial small={small} state={state}/>
      );
      break;
    default:
      result = null;
  }
  return result;
};


const DescriptionView = () => {
  const {state, small} = DescriptionHook();

  return (
    <React.Fragment>
      {getContent(state, small)}
    </React.Fragment>
  );
};


export default DescriptionView;
