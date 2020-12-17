import {takeLatest, all} from 'redux-saga/effects';
import {ProductTypes} from '../redux/projectRedux'

import {getType, getProduct, getHome, getSearch} from './projectSagas'
import {createApi} from '../services/api'
const api = createApi();

export default function* root() {
    yield all([
        takeLatest(ProductTypes.GET_TYPE, getType, api),
        takeLatest(ProductTypes.GET_PRODUCT, getProduct, api),
        takeLatest(ProductTypes.GET_HOME, getHome, api),
        takeLatest(ProductTypes.GET_SEARCH, getSearch, api),
    ])
}