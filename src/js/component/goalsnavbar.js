import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const GoalsNavBar = props => {
	return (
		<nav className="container col-6 col-md-4 col-lg-2 bg-dark py-3 sideBar">
			<button className="toggleOffButton mb-4 text-primary deleteX" onClick={props.toggle}>
				<i className="fab fa-xing" />
			</button>
			<Link onClick={props.toggle} to="/goalsyearly">
				<h5 className="py-4 ml-5 mt-5">2020</h5>
			</Link>
			<Link onClick={props.toggle} to="/goals5year">
				<h5 className="py-4 ml-5">5 YEAR</h5>
			</Link>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
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

GoalsNavBar.propTypes = {
	toggle: PropTypes.func
};
