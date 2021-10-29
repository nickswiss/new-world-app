import { configureStore } from "@reduxjs/toolkit";
import ActiveTimestampReducer from "./reducers/activeTimestampSlice";
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

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    activeTimestamp: ActiveTimestampReducer,
    activeFarmingRoute,
    loadingActiveFarmingRoute,
    errorLoadingActiveFarmingRoute,
    farmingRoutes,
    loadingFarmingRoutes,
    errorLoadingFarmingRoutes,
    inGameItems,
    loadingInGameItems,
    errorLoadingInGameItems,
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
