import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import {
  activeFarmingRouteSaga,
  appLoadSaga,
  farmingRouteSaga,
  inGameItemSaga,
} from "./sagas";
import {
  farmingRoutes,
  loadingFarmingRoutes,
  errorLoadingFarmingRoutes,
} from "./reducers/farmingRoutes";

import {
  activeFarmingRoute,
  loadingActiveFarmingRoute,
  errorLoadingActiveFarmingRoute,
} from "./reducers/activeFarmingRoute";

import {
  inGameItems,
  loadingInGameItems,
  errorLoadingInGameItems,
} from "./reducers/inGameItems";

import { activeTimestamp } from "./reducers/activeTimestamp";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    activeFarmingRoute,
    loadingActiveFarmingRoute,
    errorLoadingActiveFarmingRoute,
    farmingRoutes,
    loadingFarmingRoutes,
    errorLoadingFarmingRoutes,
    inGameItems,
    loadingInGameItems,
    errorLoadingInGameItems,
    activeTimestamp,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(routerMiddleware(history))
      .concat(sagaMiddleware),
});

sagaMiddleware.run(appLoadSaga);
sagaMiddleware.run(farmingRouteSaga);
sagaMiddleware.run(inGameItemSaga);
sagaMiddleware.run(activeFarmingRouteSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
