import axios from 'axios';

export const FETCH_IMG_START = 'FETCH_IMG_START';
export const FETCH_IMG_SUCCESS = 'FETCH_IMG_SUCCESS';
export const FETCH_IMG_FAILURE = 'FETCH_IMG_FAILURE';

export const imgRequest = img => dispatch => {
    // console.log(name)
    dispatch({ type: FETCH_IMG_START });
    axios
        .get(`https://api.thedogapi.com/v1/images/search?pug?mime_types=gif`, { headers: {"x-api-key" : "5c3d9d02-1c2d-4355-bba8-54fb2aa4fb3f"} })
        .then( res => {
            // console.log(res.data.results)
            const resGif = res.data[0].url
            dispatch({ type: FETCH_IMG_SUCCESS, payload: resGif })
        })
        .catch( error => {
            // console.log('error: ', error)
            dispatch({ type: FETCH_IMG_FAILURE, payload: error })
        })
}

export const FETCH_BREEDS_START = 'FETCH_BREEDS_START';
export const FETCH_BREEDS_SUCCESS = 'FETCH_BREEDS_SUCCESS';
export const FETCH_BREEDS_FAILURE = 'FETCH_BREEDS_FAILURE';

export const breedListRequest = breeds => dispatch => {
    dispatch({ type: FETCH_BREEDS_START });
    axios
        .get('https://api.thedogapi.com/v1/breeds', { headers: {"x-api-key" : "5c3d9d02-1c2d-4355-bba8-54fb2aa4fb3f"} })
        .then( res => {
            // console.log(res.data)
            const breedListArray = res.data
            dispatch({ type: FETCH_BREEDS_SUCCESS, payload: breedListArray})
        })
        .catch( error => {
            dispatch({ type: FETCH_IMG_FAILURE, payload: error })
        })
}

export const FETCH_BREED_IMG_START = 'FETCH_BREED_IMG_START';
export const FETCH_BREED_IMG_SUCCESS = 'FETCH_BREED_IMG_SUCCESS';
export const FETCH_BREED_IMG_FAILURE = 'FETCH_BREED_IMG_FAILURE';

export const breedImgRequest = breedID => dispatch => {
    dispatch({ type: FETCH_BREED_IMG_START });
    axios
        .get(`https://api.thedogapi.com/v1/images/search?breed_id=${breedID}`, { headers: {"x-api-key" : "5c3d9d02-1c2d-4355-bba8-54fb2aa4fb3f"} })
        .then( res => {
            console.log(res.data[0].url)
            const breedImg = res.data[0].url;
            dispatch({ type: FETCH_BREED_IMG_SUCCESS, payload: breedImg})
        })
        .catch( error => {
            dispatch({ type: FETCH_BREED_IMG_FAILURE, payload: error })
        })
}