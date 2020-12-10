import { call, put } from "redux-saga/effects";
import { AuthTypes } from "../redux/authRedux";

function* getType(api, { payload }) {
  const response = yield call(api.getType, payload);
  console.log(response)
  if (response.ok) {
    yield put({ type: AuthTypes.LOGIN_SUCCESS, payload: response.data });
  } else {
    yield put({ type: AuthTypes.LOGIN_FAILURE, payload: {} });
  }
}
export { getType }