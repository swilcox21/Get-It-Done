import "../../styles/home.scss";
import React from "react";
import Clock from "../component/clock";
import { Context } from "../store/appContext";
import { GoalsNavBar } from "../component/goalsnavbar";
import { Spring, Transition, animated } from "react-spring/renderprops";

export class Goals5Year extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: "",
			showGoalsNavBar: false
		};
	}

	toggle = () => this.setState({ showGoalsNavBar: !this.state.showGoalsNavBar });

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => (
					<>
						<div className="container">
							<Transition
								native
								items={this.state.showGoalsNavBar}
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
							<h5 className="text-center mt-3">5 YEAR PLAN</h5>
							<div className="text-center mt-2 mb-5">
								<button
									className="addNew py-1"
									onClick={() => {
										actions.addGoals5Year(this.state.todo);
									}}>
									ADD
								</button>
							</div>
							{store.goals5year &&
								store.goals5year.map((todo, index) => (
									<div key={index} className="d-flex">
										<div className="d-flex justify-content-around mx-auto col-lg-6">
											<textarea
												className="pl-2 col-10 mt-1 activeTodo"
												type="text"
												value={todo}
												placeholder="dont leave me blank!"
												onChange={e => actions.handleChangeGoals5Year(e, index)}
											/>
											<span
												onClick={() => actions.deleteGoals5Year(index)}
												className="deleteX mt-2 col-1">
												<i className="fab fa-xing" />
											</span>
										</div>
									</div>
								))}
							<div className="text-center mt-3 mb-5">
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
