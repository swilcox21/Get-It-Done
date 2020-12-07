import "../../styles/home.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WorkNavbar } from "../component/worknavbar";
import Clock from "../component/clock";
import { Context } from "../store/appContext";
import { Spring, Transition, animated } from "react-spring/renderprops";

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
					<>
						<div className="container">
							<Transition
								native
								items={this.state.showWorkNavbar}
								from={{ marginLeft: -900 }}
								enter={{ marginLeft: -15 }}
								leave={{ marginLeft: -900 }}>
								{show =>
									show &&
									(props => (
										<animated.div style={props}>
											<WorkNavbar toggle={this.toggle} />
										</animated.div>
									))
								}
							</Transition>
							<button className="toggleButton mt-3" onClick={() => this.toggle()}>
								<i className="fas fa-list" />
							</button>
							<h4 className="text-center mt-3 mb-5">WORK</h4>
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
							<div className="d-flex justify-content-between col-md-6 mx-md-auto mt-2">
								<button
									className=""
									onClick={() => {
										actions.addWorkDaily(this.state.todo);
										this.resetTextArea();
									}}>
									DAY
								</button>
								<button
									className=""
									onClick={() => {
										actions.addWorkWeekly(this.state.todo);
										this.resetTextArea();
									}}>
									WEEK
								</button>
								<button
									className=""
									onClick={() => {
										actions.addWorkQuarterly(this.state.todo);
										this.resetTextArea();
									}}>
									1 / 4
								</button>
								<button
									className=""
									onClick={() => {
										actions.addWorkYearly(this.state.todo);
										this.resetTextArea();
									}}>
									YEAR
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
