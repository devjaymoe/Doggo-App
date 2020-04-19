import { combineReducers } from 'redux';
import { dogImgReducer as dogImg } from './dogImgReducer';
import { breedListReducer as breedList } from './breedListReducer';
import { breedImgReducer as breedImg } from './breedImgReducer';

export default combineReducers({ dogImg, breedList, breedImg });