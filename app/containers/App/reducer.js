import { fromJS } from 'immutable';
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';
import { setCookie } from '../../utils/commonFunction';
import { USER_LOGIN_TOKEN } from '../../utils/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  token: false,
  userData: false,
  currentUser: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('token', false);
    case USER_LOGIN_SUCCESS:
      setCookie(USER_LOGIN_TOKEN, action.token.token);
      return state.set('loading', false).setIn('token', action.token);
    case USER_LOGIN_ERROR:
      return state.set('error', action.error).set('loading', false);
    // ////////////////////////////////////////
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('userData', false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn('userData', action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    // ////////////////////////////////////////
    default:
      return state;
  }
}

export default appReducer;
