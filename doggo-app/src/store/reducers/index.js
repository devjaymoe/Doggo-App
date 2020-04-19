import { combineReducers } from 'redux';
import { dogImgReducer as dogImg } from './dogImgReducer';
import { breedListReducer as breedList } from './breedListReducer';
import { breedInfoReducer as breedInfo } from './breedInfoReducer';

export default combineReducers({ dogImg, breedList, breedInfo });