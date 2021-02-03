import "../../styles/home.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Clock from "../component/clock";
import { Context } from "../store/appContext";
import { Hobby } from "./hobby";
import { Excersize } from "./excersize";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="container text-center">
				<div className="text-center mt-3 mb-5">Hello Sam</div>
				<Excersize />
				<div className="container text-center mt-5 clock">
					{new Date().toLocaleString("en-us", { weekday: "long" })}
					<Clock />
				</div>
			</div>
		);
	}
}
// export default Home;
