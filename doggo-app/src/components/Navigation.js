import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { breedListRequest } from '../store/actions'

const Navigation = props => {
	return (
		<div className="navigation">
			<NavLink to="/">
                Home
            </NavLink>
			<NavLink to="/breed_List" onClick={()=>{props.breedListRequest()}}>
				Breed List
			</NavLink>
		</div>
	);
};

export default connect( null, { breedListRequest } )(Navigation);
