import { call, put, select, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
import { USER_LOGIN } from '../App/constants';
import { userLoaded, userLoadingError } from '../App/actions';

import { makeTokenname, makeSelectPassword } from './selectors';

import API from './loginApi';

const api = API.create();

export function* tokenData() {
  const username = yield select(makeTokenname());
  const password = yield select(makeSelectPassword());
  try {
    const token = yield call(api.userLogin, { username, password });
    yield put(userLoaded(token.data));
  } catch (err) {
    yield put(userLoadingError(err));
  }
}

export default function* userLogin() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(USER_LOGIN, tokenData);
}
