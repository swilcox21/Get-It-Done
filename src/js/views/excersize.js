import "../../styles/home.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Clock from "../component/clock";
import { Context } from "../store/appContext";

export class Excersize extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: ""
		};
	}

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
					<div className="container text-center">
						<div className="text-center mt-3 mb-5">New Task</div>
						<textarea
							className="pt-4 pl-2 col-md-6 text-center"
							placeholder="Stop being lazy and JUST DO IT!"
							type="text"
							value={this.state.todo}
							onChange={e => this.handleChange(e)}
						/>
						<div className="mb-3 mt-2">
							<button
								onClick={() => {
									actions.addExcersize(this.state.todo);
									this.resetTextArea();
								}}>
								SUBMIT
							</button>
						</div>
						{store.excersize &&
							store.excersize.map((todo, index) => (
								<div key={index} className="d-flex">
									<div className="d-flex justify-content-around mx-auto col-lg-6">
										<textarea
											className="pl-2 col-10 mt-1 activeTodo"
											type="text"
											value={todo}
											placeholder="dont leave me blank!"
											onChange={e => actions.handleChangeExcersize(e, index)}
										/>
										<span
											onClick={() => actions.deleteExcersize(index)}
											className="deleteX mt-2 col-1">
											<i className="fab fa-xing" />
										</span>
									</div>
								</div>
							))}
						<div className="container text-center mt-5 clock">
							<Clock />
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}
