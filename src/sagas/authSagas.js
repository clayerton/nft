import {call, put} from "redux-saga/effects";
import {AuthTypes} from "../redux/authRedux";
import {parseRestError} from "./ErrorHelper";
// import i18n from "@i18n";
// import {customToast} from "@utils/toast";
function* login(api, {payload}) {
  const response = yield call(api.login, payload);
  if (response.ok) {
    yield put({type: AuthTypes.LOGIN_SUCCESS, payload: response.data});
  } else {
    const error = parseRestError(response);
    // customToast(i18n.t(`errors.${error}`));
    yield put({type: AuthTypes.LOGIN_FAILURE, payload: error});
  }
}

function* register(api, {payload}) {
  const response = yield call(api.register, payload);
  // console.log({response})
  if (response.ok) {
    yield put({type: AuthTypes.REGISTER_SUCCESS, payload: response.data});
  } else {
    const error = parseRestError(response);
    // customToast(i18n.t(`errors.${error}`));
    yield put({type: AuthTypes.REGISTER_FAILURE, payload: error});
  }
}

function* getSelf(api, {payload, token}) {
  const response = yield call(api.getSelf, payload, token);
  if (response.ok) {
    yield put({type: AuthTypes.GET_SELF_SUCCESS, payload: response.data});
  } else {
    const error = parseRestError(response);
    yield put({type: AuthTypes.GET_SELF_FAILURE, payload: error});
  }
}

function* thirdLogin(api, {payload, token}) {
  const response = yield call(api.thirdLogin, payload, token);
  if (response.ok) {
    yield put({type: AuthTypes.THIRD_LOGIN_SUCCESS, payload: response.data});
  } else {
    const error = parseRestError(response);
    // customToast(i18n.t(`errors.${error}`));
    yield put({type: AuthTypes.THIRD_LOGIN_FAILURE, payload: error});
  }
}

export {login, register, getSelf, thirdLogin};
