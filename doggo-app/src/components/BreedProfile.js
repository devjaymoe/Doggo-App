import React from 'react';
import { connect } from 'react-redux';

const BreedProfile = props => {
    // console.log(props)
    return (
        <div className='breed-profile-container'>
            { props.breedImg ? 
            <div className='card'>
                <h2 className='breed-name'>{props.breedInfo.name}</h2>
                <img src={props.breedImg} alt='doggo' width='450'/>
                <div className='basics'>
                    <p>Weight: {props.breedInfo.weight.imperial} lbs</p>
                    <p>Height: {props.breedInfo.height.imperial} inches</p>
                    <p>Life Span: {props.breedInfo.life_span}</p>
                </div>
                <div className='additional-info'>
                {props.breedInfo.bred_for ? <p>Bred for: {props.breedInfo.bred_for}</p> : null}
                {props.breedInfo.breed_group ? <p>Breed group: {props.breedInfo.breed_group}</p> : null }
                {props.breedInfo.temperament? <p>Temperament: {props.breedInfo.temperament}</p> : null }
                { props.breedInfo.origin ? <p>Origin: {props.breedInfo.origin}</p> : null}
                </div>
            </div>
            : null }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        breedInfo: state.breedInfo.breedInfo,
        breedImg:  state.breedInfo.breedImg
    };
}

export default connect( mapStateToProps, {} )( BreedProfile );