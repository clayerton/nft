import {takeLatest, all} from 'redux-saga/effects';
import {ProductTypes} from '../redux/projectRedux'

import {getType} from './projectSagas'
import {createApi} from '../services/api'
const api = createApi();

export default function* root() {
    yield all([
        takeLatest(ProductTypes.GET_TYPE, getType, api),
    ])
}