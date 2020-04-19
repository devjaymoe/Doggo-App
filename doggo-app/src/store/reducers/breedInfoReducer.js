import { 
    FETCH_BREED_IMG_START,
    FETCH_BREED_IMG_SUCCESS,
    FETCH_BREED_IMG_FAILURE
} from '../actions'

const initialState = {
    breedInfo: {},
    breedImg: '',
    isFetching: false,
    error: ''
};
  
export const breedInfoReducer = ( state = initialState, action) => {
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
                breedInfo: action.payload.breedInfo,
                breedImg: action.payload.breedImg,
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