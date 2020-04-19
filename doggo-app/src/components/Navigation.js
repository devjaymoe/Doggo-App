import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/">
                Home
            </NavLink>
			<NavLink to="/breed_List">
				Breed List
			</NavLink>
            <NavLink to='/breed_profile'>
                BreedProfile
            </NavLink>
		</div>
	);
};

export default Navigation;
