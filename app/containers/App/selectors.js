import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => {
    globalState.get('loading');
  });

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => {
    globalState.get('error');
  });

const makeToken = () =>
  createSelector(selectGlobal, globalState => {
    globalState.getIn('token');
  });

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => {
    globalState.get('currentUser');
  });

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState => {
    globalState.getIn('userData');
  });

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeToken,
  makeSelectLocation,
  makeSelectCurrentUser,
  makeSelectRepos,
};
