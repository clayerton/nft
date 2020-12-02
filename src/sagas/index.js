import {takeLatest, all} from 'redux-saga/effects';
import {AuthTypes} from "../redux/authRedux";
import {login} from './authSagas'

import {createApi} from '../services/api'
const api = createApi();

export default function* root() {
    yield all([
        takeLatest(AuthTypes.LOGIN, login, api),
    ])
}