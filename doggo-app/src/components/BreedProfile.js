import React from 'react';
import { connect } from 'react-redux';

const BreedProfile = props => {
    // console.log(props)
    return (
        <div className='breed-profile-container'>
            { props.breedImg ? 
            <div className='card'>
                <h2 className='breed-name'>{props.breedInfo.name}</h2>
                <img src={props.breedImg} alt='doggo' width='300'/>
                <div className='basics'>
                    <p>Weight: {props.breedInfo.weight.imperial} lbs</p>
                    <p>Height: {props.breedInfo.height.imperial} inches</p>
                </div>
                <div className='additional-info'>
                    <div>
                        <p>Life Span: </p><span>{props.breedInfo.life_span}</span>
                    </div>
                    {props.breedInfo.bred_for ? 
                        <div>
                            <p>Bred for: </p><span>{props.breedInfo.bred_for}</span>
                        </div> : null}
                    {props.breedInfo.breed_group ?
                        <div> 
                            <p>Breed group: </p> <span>{props.breedInfo.breed_group}</span> 
                        </div> : null }
                    {props.breedInfo.temperament ? 
                        <div>
                            <p>Temperament: </p><span>{props.breedInfo.temperament}</span> 
                        </div> : null }
                    { props.breedInfo.origin ?
                        <div>
                            <p>Origin: </p><span>{props.breedInfo.origin}</span> 
                        </div> : null}
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