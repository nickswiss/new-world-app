import * as TYPES from "../types";
import initialState from "../initialState";

export const loadingFarmingRoutes = (
  state = initialState.loadingFarmingRoutes,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_FARMING_ROUTES_REQUEST:
      return true;
    case TYPES.FETCH_FARMING_ROUTES_SUCCESS:
      return false;
    case TYPES.FETCH_FARMING_ROUTES_FAILURE:
      return false;
    default:
      return state;
  }
};

export const errorLoadingFarmingRoutes = (
  state = initialState.errorLoadingFarmingRoutes,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_FARMING_ROUTES_SUCCESS:
      return false;
    case TYPES.FETCH_FARMING_ROUTES_FAILURE:
      return true;
    default:
      return state;
  }
};

export const farmingRoutes = (state = initialState.farmingRoutes, action) => {
  switch (action.type) {
    case TYPES.FETCH_FARMING_ROUTES_SUCCESS:
      return [...action.data];
    default:
      return state;
  }
};
