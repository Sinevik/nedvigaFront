import React from 'react';
import {POSTERS_ACTIONS_TYPE} from './Actions';

const initialState = {
  kind: null,
  sideEffects: null,
  sideEffectsMap: null,
  sideEffectsPostersMap: null,
  centerMap: {lat: 53.902334, lng: 27.5618791},
  pageNumber: 1,
  countPosters: 0,
  maxPage: 0,
  selectedPosterMap: null,
  posters: [],
  postersMap: [],
  /* ---- */
  typeRent: 'monthly',
  typePoster: 'rent',
  state: null,
  countSeatsShed: null,
  typeApartment: null,
  typeCommercial: null,
  wallMaterial: null,
  countRooms: null,
  countRoomsFrom: null,
  countRoomsTo: null,
  areaFrom: null,
  areaTo: null,
  landAreaFrom: null,
  landAreaTo: null,
  priceFrom: null,
  priceTo: null,
  countFloorFrom: null,
  countFloorTo: null,
  countFloors: null,
  countFloorsFrom: null,
  countFloorsTo: null,
  kitchenAreaFrom: null,
  kitchenAreaTo: null,
  yearOfConstructionFrom: null,
  yearOfConstructionTo: null,
};


const PostersReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTERS_ACTIONS_TYPE.SET_VALUE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value && typeof action.payload.value === 'object' &&
        action.payload.value.length === 0 ? null : action.payload.value,
      };
    case POSTERS_ACTIONS_TYPE.SET_CENTER_MAP:
      return {
        ...state,
        centerMap: action.payload,
      };
    case POSTERS_ACTIONS_TYPE.SET_POSTERS_MAP:
      return {
        ...state,
        postersMap: [...action.payload],
      };
    case POSTERS_ACTIONS_TYPE.SET_POSTERS:
      return {
        ...state,
        posters: action.payload,
      };
    case POSTERS_ACTIONS_TYPE.SET_SELECTED_POSTER_MAP:
      return {
        ...state,
        selectedPosterMap: action.payload,
      };
    case POSTERS_ACTIONS_TYPE.SET_KIND:
      return {
        ...state,
        pageNumber: 1,
        typePoster: action.payload === 'dacha' ? 'sale' : 'rent',
        kind: action.payload,
      };
    case POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS:
      return {
        ...state,
        sideEffects: action.payload,
      };
    case POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_MAP:
      return {
        ...state,
        sideEffectsMap: action.payload,
      };
    case POSTERS_ACTIONS_TYPE.SET_SIDE_EFFECTS_POSTERS_MAP:
      return {
        ...state,
        sideEffectsPostersMap: action.payload,
      };
    case POSTERS_ACTIONS_TYPE.SET_INIT_STATE:
      return {
        ...state,
        state: null,
        countSeatsShed: null,
        typeApartment: null,
        typeCommercial: null,
        wallMaterial: null,
        countRooms: null,
        countRoomsFrom: null,
        countRoomsTo: null,
        areaFrom: null,
        areaTo: null,
        landAreaFrom: null,
        landAreaTo: null,
        priceFrom: null,
        priceTo: null,
        countFloorFrom: null,
        countFloorTo: null,
        countFloors: null,
        countFloorsFrom: null,
        countFloorsTo: null,
        kitchenAreaFrom: null,
        kitchenAreaTo: null,
        yearOfConstructionFrom: null,
        yearOfConstructionTo: null,
      };
    case POSTERS_ACTIONS_TYPE.SET_COUNT_POSTERS:
      return {
        ...state,
        countPosters: action.payload,
        maxPage: action.payload / 20,
      };
    default:
      return state;
  }
};

export default PostersReducer;
