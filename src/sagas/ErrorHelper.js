// import config from "@config/AppConfig";

export function parseRestError(response) {
  if (__DEV__) console.log("Parse Error:", response);
  try {
    if (response && response.data && response.data.errors) {
      const temp = response.data.errors[""][0];
      const error = typeof temp === "object" ? JSON.stringify(temp) : temp;
      if (error) {
        return error;
      } else {
        return "emptyError";
      }
    } else if (response && response.data) {
      if (response.status === 500) {
        return "serverInternalError";
      }
      const temp = response.data;
      const error = typeof temp === "object" ? JSON.stringify(temp) : temp;
      if (error) {
        return error;
      } else {
        return "emptyError";
      }
    }
    else if (response && response.status === 404) {
      return "apiError";
    }
    else if (response && response.status === 401) {
      // DeviceEventEmitter.emit(config.TokenOutDeviceEventEmitter, "");
      return "permissionExpired";
    }
    else if (response && response.problem === "NETWORK_ERROR") {
      return "networkError";
    }
    else if (response && response.problem === "TIMEOUT_ERROR") {
      return "timeoutError";
    }
  } catch (e) {
    if (__DEV__) {
      console.log("parseRestError: " + e);
    }
  }
  return "unknownError";
}
