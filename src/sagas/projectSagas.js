import { call, put } from "redux-saga/effects";
import { ProductTypes } from "../redux/projectRedux";

function* getType(api, { payload }) {
  const response = yield call(api.getType, payload);
  if (response.ok) {
    yield put({ type: ProductTypes.GET_TYPE_SUCCESS, payload: response.data });
  } else {
    yield put({ type: ProductTypes.GET_TYPE_FAILURE, payload: {} });
  }
}
function* getProduct(api, { payload }) {
  const response = yield call(api.getProduct, payload);
  if (response.ok) {
    yield put({ type: ProductTypes.GET_PRODUCT_SUCCESS, payload: response.data });
  } else {
    yield put({ type: ProductTypes.GET_PRODUCT_FAILURE, payload: {} });
  }
}
function* getHome(api, { payload }) {
  const response = yield call(api.getHome, payload);
  if (response.ok) {
    yield put({ type: ProductTypes.GET_HOME_SUCCESS, payload: response.data });
  } else {
    yield put({ type: ProductTypes.GET_HOME_FAILURE, payload: {} });
  }
}
function* getSearch(api, { payload }) {
  const response = yield call(api.getSearch, payload);
  if (response.ok) {
    yield put({ type: ProductTypes.GET_SEARCH_SUCCESS, payload: response.data });
  } else {
    yield put({ type: ProductTypes.GET_SEARCH_FAILURE, payload: {} });
  }
}
export { getType, getProduct, getHome, getSearch }