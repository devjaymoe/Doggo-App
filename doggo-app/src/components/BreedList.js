import React from 'react';
import { connect } from 'react-redux';
import { breedListRequest, breedInfoRequest } from '../store/actions'
import { NavLink } from 'react-router-dom';

const BreedList = props => {
    // console.log(props)

    return (
        <div className='breed-list-container'>
            <div className='breed-list-number'>
                <h2>There are {(props.breeds.length > 0) ? props.breeds.length : 0} doggo breeds to select from</h2>
            </div>
            <div className='breeds'>
                {(props.breeds.length > 0) ? props.breeds.map( breed => (
                    <div 
                        className='breed' 
                        key={breed.id} 
                        >
                        <p>{breed.name}</p> 
                        <NavLink to='/breed_profile'>
                            <button onClick={()=>{props.breedInfoRequest(breed.id)}}>Breed Profile</button>
                        </NavLink>
                    </div>
                )): null}
            </div>
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