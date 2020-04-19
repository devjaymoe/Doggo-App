import { combineReducers } from 'redux';
import { dogImgReducer as dogImg } from './dogImgReducer';
import { breedListReducer as breedList} from './breedListReducer'

export default combineReducers({ dogImg, breedList });