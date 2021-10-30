import * as TYPES from "../types";
import { call, put } from "redux-saga/effects";
import {
  getFarmingRoute,
  getFarmingRoutes,
  getInGameItems,
} from "../api/requests";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchActiveFarmingRouteRequest = (id) => ({
  type: TYPES.FETCH_ACTIVE_FARMING_ROUTE_REQUEST,
  id,
});

export function* fetchActiveFarmingRoute(action) {
  try {
    const route = yield call(getFarmingRoute, action.id);
    yield put({ type: TYPES.FETCH_ACTIVE_FARMING_ROUTE_SUCCESS, data: route });
  } catch (e) {
    yield put({ type: TYPES.FETCH_ACTIVE_FARMING_ROUTE_FAILURE });
  }
}

export const fetchFarmingRoutesRequest = () => ({
  type: TYPES.FETCH_FARMING_ROUTES_REQUEST,
});

export function* fetchFarmingRoutes(action) {
  try {
    const routes = yield call(getFarmingRoutes);
    yield put({ type: TYPES.FETCH_FARMING_ROUTES_SUCCESS, data: routes });
  } catch (e) {
    yield put({ type: TYPES.FETCH_FARMING_ROUTES_FAILURE });
  }
}

export const fetchInGameItemsRequest = () => ({
  type: TYPES.FETCH_IN_GAME_ITEMS_REQUEST,
});

export function* fetchInGameItems(action) {
  try {
    const items = yield call(getInGameItems);
    yield put({ type: TYPES.FETCH_IN_GAME_ITEMS_SUCCESS, data: items });
  } catch (e) {
    yield put({ type: TYPES.FETCH_IN_GAME_ITEMS_FAILURE });
  }
}

export function* appInit(action) {
  try {
    yield put({ type: TYPES.FETCH_IN_GAME_ITEMS_REQUEST });
    yield put({ type: TYPES.FETCH_FARMING_ROUTES_REQUEST });
  } catch (e) {
    console.log(e);
  }
}
