import * as TYPES from "../types";
import initialState from "../initialState";

export const loadingActiveFarmingRoute = (
  state = initialState.farmingRoutes.loadingActiveFarmingRoute,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_ACTIVE_FARMING_ROUTE_REQUEST:
      return true;
    case TYPES.FETCH_ACTIVE_FARMING_ROUTE_SUCCESS:
      return false;
    case TYPES.FETCH_ACTIVE_FARMING_ROUTE_FAILURE:
      return false;
    default:
      return state;
  }
};

export const errorLoadingActiveFarmingRoute = (
  state = initialState.farmingRoutes.errorLoadingActiveFarmingRoute,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_ACTIVE_FARMING_ROUTE_SUCCESS:
      return false;
    case TYPES.FETCH_ACTIVE_FARMING_ROUTE_FAILURE:
      return true;
    default:
      return state;
  }
};

export const activeFarmingRoute = (
  state = initialState.farmingRoutes.activeFarmingRoute,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_ACTIVE_FARMING_ROUTE_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
};
