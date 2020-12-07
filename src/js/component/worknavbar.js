import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const WorkNavbar = props => {
	return (
		<nav className="container col-6 col-md-4 col-lg-2 bg-dark py-3 sideBar">
			<button className="toggleOffButton text-primary deleteX" onClick={props.toggle}>
				<i className="fab fa-xing" />
			</button>
			{/* <Link onClick={props.toggle} to="/work">
				<h5 className="py-4 ml-5 mt-5">NEW</h5>
			</Link> */}
			<Link onClick={props.toggle} to="/workdaily">
				<h5 className="py-4 ml-5 mt-5">DAILY</h5>
			</Link>
			<Link onClick={props.toggle} to="/workweekly">
				<h5 className="py-4 ml-5">WEEKLY</h5>
			</Link>
			<Link onClick={props.toggle} to="/workquarterly">
				<h5 className="py-4 ml-5">1 / 4</h5>
			</Link>
			<Link onClick={props.toggle} to="/workyearly">
				<h5 className="py-4 ml-5">YEARLY</h5>
			</Link>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</nav>
	);
};

WorkNavbar.propTypes = {
	toggle: PropTypes.func
};
