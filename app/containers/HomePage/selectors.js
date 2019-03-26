/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeTokenname = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

export { selectHome, makeTokenname };
