import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const breedRequest = breed => dispatch => {
    // console.log(name)
    dispatch({ type: FETCH_CHARACTERS_START });
    axios
        .get(`https://api.thedogapi.com/v1/images/search?pug?mime_types=gif`, { headers: {"x-api-key" : "5c3d9d02-1c2d-4355-bba8-54fb2aa4fb3f"} })
        .then( res => {
            // console.log(res.data.results)
            const resGif = res.data[0].url
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: resGif })
        })
        .catch( error => {
            // console.log('error: ', error)
            dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: error})
        })
}