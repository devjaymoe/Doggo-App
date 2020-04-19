import React from 'react';
import { connect } from 'react-redux';
import { breedListRequest } from '../store/actions'


const BreedList = props => {
    console.log(props.breeds)
  return (
    <div>
        <button onClick={()=>{props.breedListRequest()}}>Breeds Request</button>
        <p>{(props.breeds.length > 0) ? props.breeds.length : 0}</p>
        {(props.breeds.length > 0) ? props.breeds.map( breed => (
            <div className='breed' key={breed.id}>
                <p>{breed.name}</p>
                <p>{breed.id}</p>
            </div>
        )): null}
    </div>
  )
};

const mapStateToProps = state => {
    return {
      breeds: state.breedList.breeds,
    }
}

export default connect(mapStateToProps, { breedListRequest })( BreedList );