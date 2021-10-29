import initialState from "../initialState";
import * as TYPES from "../types";

export const loadingInGameItems = (
  state = initialState.loadingInGameItems,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_IN_GAME_ITEMS_REQUEST:
      return true;
    case TYPES.FETCH_IN_GAME_ITEMS_SUCCESS:
    case TYPES.FETCH_IN_GAME_ITEMS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const errorLoadingInGameItems = (
  state = initialState.errorLoadingInGameItems,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_IN_GAME_ITEMS_SUCCESS:
      return false;
    case TYPES.FETCH_IN_GAME_ITEMS_FAILURE:
      return true;
    default:
      return state;
  }
};

export const inGameItems = (state = initialState.inGameItems, action) => {
  switch (action.type) {
    case TYPES.FETCH_IN_GAME_ITEMS_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
};
