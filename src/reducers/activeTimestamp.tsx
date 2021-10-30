import * as TYPES from "../types";
import initialState from "../initialState";

export const activeTimestamp = (
  state = initialState.activeTimestamp,
  action
) => {
  switch (action.type) {
    case TYPES.SET_ACTIVE_TIMESTAMP:
      return { ...action.timestamp };
    default:
      return state;
  }
};
