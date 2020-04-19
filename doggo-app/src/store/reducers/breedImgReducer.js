import { 
    FETCH_BREED_IMG_START,
    FETCH_BREED_IMG_SUCCESS,
    FETCH_BREED_IMG_FAILURE
} from '../actions'

const initialState = {
    breedImg: '',
    isFetching: false,
    error: ''
};
  
export const breedImgReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_BREED_IMG_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_BREED_IMG_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                breedImg: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_BREED_IMG_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};