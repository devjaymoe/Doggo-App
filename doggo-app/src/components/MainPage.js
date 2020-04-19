import React from 'react';
import {connect} from 'react-redux';
import {imgRequest} from '../store/actions'


const MainPage = props => {
  return (
    <div>
        <button onClick={()=>{props.imgRequest()}}>Click me for Doggo</button>
        <img src={props.img} alt='img of doggo' width='300'/>
    </div>
  )
};

const mapStateToProps = state => {
    return {
      img: state.dogImg.img,
    }
}

export default connect(mapStateToProps, { imgRequest })( MainPage );