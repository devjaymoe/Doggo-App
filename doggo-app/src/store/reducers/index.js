import { combineReducers } from 'redux';
import { breedReducer as breeds } from './breedReducer';

export default combineReducers({ breeds });