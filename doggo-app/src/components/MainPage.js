import React from 'react';
import {connect} from 'react-redux';
import {breedRequest} from '../store/actions'


const MainPage = props => {
    console.log(props)
  return (
    <div>
        <button onClick={()=>{props.breedRequest()}}>Click me for Doggo</button>
        <img src={props.img} alt='img of doggo'/>
    </div>
  )
};

const mapStateToProps = state => {
    return {
      img: state.breeds.img,
    }
}

export default connect(mapStateToProps, {breedRequest})(MainPage);