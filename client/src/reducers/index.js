import { combineReducers } from 'redux';
//turns an object whose values are different reducing functions into a single reducing function you can pass to createStore->The resulting reducer calls every child reducer, and gathers their results into a single state object.
import recipes from './recipes';
import auth from './auth';

export const reducers = combineReducers({ recipes, auth });