import { getInitializedApi } from "./config";

export const getFarmingRoute = (id) => {
  return getInitializedApi()
    .get(`farming-routes/${id}`)
    .then((response: any) => response.data);
};

export const getFarmingRoutes = () => {
  return getInitializedApi()
    .get("farming-routes?limit=1000")
    .then((response: any) => response.data.items);
};

export const getInGameItems = () => {
  return getInitializedApi()
    .get("in-game-items?limit=1000")
    .then((response: any) => response.data.items);
};
