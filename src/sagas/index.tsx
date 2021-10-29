import * as TYPES from "../types";
import {
  appInit,
  fetchActiveFarmingRoute,
  fetchFarmingRoutes,
  fetchInGameItems,
} from "../actions";
import { takeLatest } from "redux-saga/effects";

export function* farmingRouteSaga() {
  yield takeLatest(TYPES.FETCH_FARMING_ROUTES_REQUEST, fetchFarmingRoutes);
}

export function* inGameItemSaga() {
  yield takeLatest(TYPES.FETCH_IN_GAME_ITEMS_REQUEST, fetchInGameItems);
}

export function* appLoadSaga() {
  yield takeLatest("APP_INIT", appInit);
}

export function* activeFarmingRouteSaga() {
  yield takeLatest(
    TYPES.FETCH_ACTIVE_FARMING_ROUTE_REQUEST,
    fetchActiveFarmingRoute
  );
}
