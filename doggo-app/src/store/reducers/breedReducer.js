const initialState = {
  img: '',
  isFetching: false,
  error: ''
};

export const breedReducer = ( state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_CHARACTERS_START':
          return {
              ...state,
              isFetching: true
          };
      case 'FETCH_CHARACTERS_SUCCESS':
          // console.log(action.payload)
          return {
              ...state,
              isFetching: false,
              img: action.payload,
              error: ''
          };
      case 'FETCH_CHARACTERS_FAILURE':
          return {
              ...state,
              isFetching: false,
              error: action.payload
          };
      default:
          return state;
  }
};