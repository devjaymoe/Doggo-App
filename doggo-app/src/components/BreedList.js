import React from 'react';
import { connect } from 'react-redux';
import { breedListRequest, breedImgRequest } from '../store/actions'


const BreedList = props => {
    // console.log(props)

    return (
        <div>
            <button onClick={()=>{props.breedListRequest()}}>Breeds Request</button>
            <p>{(props.breeds.length > 0) ? props.breeds.length : 0}</p>
            {(props.breeds.length > 0) ? props.breeds.map( breed => (
                <div 
                    className='breed' 
                    key={breed.id} 
                    >
                    <p>{breed.name}</p>
                    <p>{breed.id}</p>
                    <button onClick={()=>{props.breedImgRequest(breed.id)}}>Breed Img</button>
                </div>
            )): null}
        </div>
    )
};

const mapStateToProps = state => {
    return {
      breeds: state.breedList.breeds,
      breedImg: state.breedImg.breedImg
    }
}

export default connect(mapStateToProps, { breedListRequest, breedImgRequest })( BreedList );