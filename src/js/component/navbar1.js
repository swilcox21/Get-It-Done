import React from "react";
import { Link } from "react-router-dom";

export const Navbar1 = () => {
	return (
		<nav className="container navbar navbar-dark bg-dark py-4">
			<Link to="/">
				<span className="">
					<i className="fas fa-home" />
				</span>
			</Link>
			<Link to="/work">
				<span className="">
					<i className="far fa-calendar-alt" />
				</span>
			</Link>
			<Link to="/hobby">
				<span className="">Hobby</span>
			</Link>
			<Link to="/excersize">
				<span className="">Excersize</span>
			</Link>
			<Link to="/goals">
				<span className="">Goals</span>
			</Link>
		</nav>
	);
};
