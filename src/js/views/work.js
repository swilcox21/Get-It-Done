import "../../styles/home.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WorkNavbar } from "../component/worknavbar";
import Clock from "../component/clock";
import { Context } from "../store/appContext";
import { Spring, Transition, animated } from "react-spring/renderprops";
import ReactCalendar from "../component/calender";

export class Work extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: "",
			showWorkNavbar: false
		};
	}

	toggle = () => this.setState({ showWorkNavbar: !this.state.showWorkNavbar });

	handleChange = e => {
		this.setState({
			todo: e.target.value
		});
	};

	resetTextArea = () => {
		this.setState({ todo: "" });
	};

	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="container col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 calender">
						<ReactCalendar />
					</div>
				)}
			</Context.Consumer>
		);
	}
}
