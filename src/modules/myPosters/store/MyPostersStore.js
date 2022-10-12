import React from 'react';
import {MY_POSTERS_ACTIONS_TYPE} from './Actions';

const initialState = {
  sideEffects: null,
  pageNumber: 1,
  countPosters: 0,
  maxPage: 0,
  posters: [],
};


const MyPostersReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_POSTERS_ACTIONS_TYPE.SET_VALUE_FILED:
      return {
        ...state,
        [action.payload.field]: action.payload.value && typeof action.payload.value === 'object' &&
        action.payload.value.length === 0 ? null : action.payload.value,
      };
    case MY_POSTERS_ACTIONS_TYPE.SET_POSTERS:
      return {
        ...state,
        posters: action.payload,
      };
    case MY_POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case MY_POSTERS_ACTIONS_TYPE.SET_COUNT_POSTERS:
      return {
        ...state,
        countPosters: action.payload,
        maxPage: action.payload / 20,
      };
    default:
      return state;
  }
};

export default MyPostersReducer;
