import React from 'react';
import { connect } from 'react-redux';
import { breedListRequest, breedInfoRequest } from '../store/actions'


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
                    <button onClick={()=>{props.breedInfoRequest(breed.id)}}>Breed Img</button>
                </div>
            )): null}
        </div>
    )
};

const mapStateToProps = state => {
    return {
      breeds: state.breedList.breeds,
      breedInfo: state.breedInfo.breedInfo,
      breedImg: state.breedInfo.breedImg
    }
}

export default connect(mapStateToProps, { breedListRequest, breedInfoRequest })( BreedList );