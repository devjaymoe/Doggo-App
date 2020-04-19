import { 
    FETCH_IMG_START, 
    FETCH_IMG_SUCCESS,
    FETCH_IMG_FAILURE
} from '../actions'

const initialState = {
  img: 'https://cdn2.thedogapi.com/images/BJWc57iNQ.gif',
  isFetching: false,
  error: ''
};

export const dogImgReducer = ( state = initialState, action) => {
  switch (action.type) {
      case FETCH_IMG_START:
          return {
              ...state,
              isFetching: true
          };
      case FETCH_IMG_SUCCESS:
          // console.log(action.payload)
          return {
              ...state,
              isFetching: false,
              img: action.payload,
              error: ''
          };
      case FETCH_IMG_FAILURE:
          return {
              ...state,
              isFetching: false,
              error: action.payload
          };
      default:
          return state;
  }
};