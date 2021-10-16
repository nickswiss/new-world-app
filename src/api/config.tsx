import axios from "axios";

const LOCAL: string = "LOCAL";
const PROD: string = "PROD";

export function getEnvironment() {
  /*
  Returns the environment, based on the value of window.location.hostname
   */
  const hostname: string = window.location.hostname;
  if (hostname === "localhost") {
    return LOCAL;
  } else if (
    hostname === "www.newworlddocs.com" ||
    hostname === "newworlddocs.com"
  ) {
    return PROD;
  }
}

export const getApiDomain = () => {
  /*
  Returns the current domain for backend server, based on environment
   */
  const env = getEnvironment();
  if (env === LOCAL) {
    return "https://bj56e6ed80.execute-api.us-east-1.amazonaws.com/dev/";
  } else if (env === PROD) {
    return "https://ha1pzm8y23.execute-api.us-east-1.amazonaws.com/prod/";
  }
};

const getInitializedApi = () => {
  /*
  Returns an axios client initialized with default values
  Erroring on >500 status so that we can handle our own validation from server
   */
  let headers: any = {
    "Content-type": "application/json",
  };
  return axios.create({
    baseURL: getApiDomain(),
    responseType: "json",
    withCredentials: false,
    validateStatus: (status: number) => {
      // handling our own errors
      return status < 501;
    },
    headers: headers,
  });
};

export const get = function (url: string) {
  /*
  GET request with initialized axios client
  */
  return getInitializedApi().get(url);
};
