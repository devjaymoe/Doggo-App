import { 
    FETCH_BREEDS_START,
    FETCH_BREEDS_SUCCESS,
    FETCH_BREEDS_FAILURE
} from '../actions'

const initialState = {
    breeds: [],
    isFetching: false,
    error: ''
};
  
  export const breedListReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_BREEDS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_BREEDS_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                breeds: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_BREEDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
  };