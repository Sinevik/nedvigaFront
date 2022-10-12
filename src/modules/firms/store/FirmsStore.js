import React from 'react';
import {FIRMS_ACTIONS_TYPE} from './Actions';

const initialState = {
  firmsMap: [],
  selectedFirmMap: null,
  sideEffectsMap: null,
  sideEffectsFirmsMap: null,
  sideEffects: false,
  firms: [],
  pageNumber: 1,
  countFirms: 0,
  maxPage: 0,
};


const FirmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRMS_ACTIONS_TYPE.SET_FIRMS_MAP:
      return {
        ...state,
        firmsMap: [...action.payload],
      };
    case FIRMS_ACTIONS_TYPE.SET_SELECTED_FIRM_MAP:
      return {
        ...state,
        selectedFirmMap: action.payload,
      };
    case FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_FIRMS_MAP:
      return {
        ...state,
        sideEffectsFirmsMap: action.payload,
      };
    case FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP:
      return {
        ...state,
        sideEffectsMap: action.payload,
      };
    case FIRMS_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case FIRMS_ACTIONS_TYPE.SET_FIRMS:
      return {
        ...state,
        firms: action.payload,
      };
    case FIRMS_ACTIONS_TYPE.SET_COUNT_FIRMS:
      return {
        ...state,
        countFirms: action.payload,
        maxPage: action.payload / 20,
      };
    case FIRMS_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value && typeof action.payload.value === 'object' &&
        action.payload.value.length === 0 ? null : action.payload.value,
      };
    case FIRMS_ACTIONS_TYPE.SET_CENTER_MAP:
      return {
        ...state,
        centerMap: action.payload,
      };
    case FIRMS_ACTIONS_TYPE.SET_INIT_STATE:
      return {
        ...state,
        firmsMap: [],
        selectedFirmMap: null,
        sideEffectsMap: null,
        sideEffectsFirmsMap: null,
        sideEffects: false,
        centerMap: {lat: 53.902334, lng: 27.5618791},
        arrayIds: [],
        firms: [],
        pageNumber: 1,
        countFirms: 0,
        maxPage: 0,
      };
    default:
      return state;
  }
};

export default FirmsReducer;
