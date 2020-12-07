import "../../styles/home.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoalsNavBar } from "../component/goalsnavbar";
import Clock from "../component/clock";
import { Context } from "../store/appContext";
import { Spring, Transition, animated } from "react-spring/renderprops";

export class Goals extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: "",
			showGoalsNavbar: false
		};
	}

	toggle = () => this.setState({ showGoalsNavbar: !this.state.showGoalsNavbar });

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
					<>
						<div className="container">
							<Transition
								native
								items={this.state.showGoalsNavbar}
								from={{ marginLeft: -900 }}
								enter={{ marginLeft: -15 }}
								leave={{ marginLeft: -900 }}>
								{show =>
									show &&
									(props => (
										<animated.div style={props}>
											<GoalsNavBar toggle={this.toggle} />
										</animated.div>
									))
								}
							</Transition>
							<button className="toggleButton mt-3" onClick={() => this.toggle()}>
								<i className="fas fa-list" />
							</button>
							<h4 className="text-center mt-3 mb-5">GOALS</h4>
							<div className="text-center">
								<textarea
									className="pt-4 pl-2 col-lg-6 text-center"
									placeholder="Stop being lazy and JUST DO IT!"
									type="text"
									value={this.state.todo}
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="mt-2 text-center">** click below to add **</div>
							<div className="d-flex justify-content-between col-9 col-md-6 text-center mx-auto mt-2">
								<button
									className=""
									onClick={() => {
										actions.addGoalsYearly(this.state.todo);
										this.resetTextArea();
									}}>
									2020
								</button>
								<button
									className=""
									onClick={() => {
										actions.addGoals5Year(this.state.todo);
										this.resetTextArea();
									}}>
									5 YEAR
								</button>
							</div>
							<div className="container text-center mt-5 clock">
								{new Date().toLocaleString("en-us", { weekday: "long" })}
								<Clock />
							</div>
						</div>
					</>
				)}
			</Context.Consumer>
		);
	}
}
