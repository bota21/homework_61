import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<div className='menu'>
			<NavLink to='/about' className='menu_link' activeClassName='menu_active'>
				About
			</NavLink>
			<NavLink
				to='/friends'
				className='menu_link'
				activeClassName='menu_active'>
				Friends
			</NavLink>
			<NavLink
				to='/faculty'
				className='menu_link'
				activeClassName='menu_active'>
				Faculty
			</NavLink>
			<NavLink
				to='/gallery'
				className='menu_link'
				activeClassName='menu_active'>
				Gallery
			</NavLink>
			<NavLink to='/books' className='menu_link' activeClassName='menu_active'>
				Books
			</NavLink>
		</div>
	);
};

export default Menu;
