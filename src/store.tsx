import { configureStore } from "@reduxjs/toolkit";
import IconReducer from "./reducers/iconSlice";
import FarmingRouteReducer from "./reducers/farmingRouteSlice";
import ActiveRouteReducer from "./reducers/activeRouteSlice";
import ActiveTimestampReducer from "./reducers/activeTimestampSlice";

const store = configureStore({
  reducer: {
    icons: IconReducer,
    farmingRoutes: FarmingRouteReducer,
    activeRoute: ActiveRouteReducer,
    activeTimestamp: ActiveTimestampReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
