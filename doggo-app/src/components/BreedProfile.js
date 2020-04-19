import React from 'react';
import { connect } from 'react-redux';

const BreedProfile = props => {
    console.log(props)
    return (
        <div>
            { props.breedImg ? 
            <div>
            <h2>Breed Profile</h2>
            <h3>{props.breedInfo.name}</h3>
            <img src={props.breedImg} alt='doggo' width='300'/>
            <p>Weight: {props.breedInfo.weight.imperial} lbs</p>
            <p>Height: {props.breedInfo.height.imperial} ft</p>
            <p>Bred for: {props.breedInfo.bred_for}</p>
            <p>Breed group: {props.breedInfo.breed_group}</p>
            <p>Life Span: {props.breedInfo.life_span}</p>
            <p>Temperament: {props.breedInfo.temperament}</p>
            <p>Origin: { props.breedInfo.origin ? props.breedInfo.origin: 'unknown'}</p> 
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