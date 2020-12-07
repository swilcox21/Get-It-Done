import "../../styles/home.scss";
import React from "react";
import Clock from "../component/clock";
import { Context } from "../store/appContext";
import { WorkNavbar } from "../component/worknavbar";
import PropTypes from "prop-types";
import { Spring, Transition, animated } from "react-spring/renderprops";

export class WorkYearly extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: "",
			workyearly: [],
			showWorkNavbar: false
		};
	}

	toggle = () => this.setState({ showWorkNavbar: !this.state.showWorkNavbar });

	componentDidMount() {
		// let value = this.context;
		// console.log(value);
		this.context.store.workyearly && this.setState({ workyearly: this.context.store.workyearly });
	}

	componentDidUpdate() {
		this.context.store.workyearly &&
			this.context.store.workyearly != this.state.workyearly &&
			this.setState({ workyearly: this.context.store.workyearly });
	}

	// handleSetDone = (t, i) => {
	//     this.setState({
	//         workyearly: this.state.workyearly.map((t, ind) => {
	// 					if (ind === i) {
	//                         if (this.state.color === "black") {
	// 		                    this.setState({ color: "grey" });
	// 					} else {
	//                         this.setState({ color: "black" });
	//                     }
	// 				})
	//         }
	// 		});

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => (
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
						<h5 className="text-center mt-3">YEARLY WORK LIST</h5>
						<div className="text-center mt-2 mb-5">
							<button
								className="addNew py-1"
								onClick={() => {
									actions.addWorkYearly(this.state.todo);
								}}>
								ADD
							</button>
						</div>
						{store.workyearly &&
							store.workyearly.map((todo, index) => (
								<div key={index} className="d-flex">
									<div className="d-flex justify-content-around mx-auto col-lg-6">
										<textarea
											className="pl-2 col-10 mt-1 activeTodo"
											type="text"
											value={todo}
											placeholder="dont leave me blank!"
											onChange={e => actions.handleChangeWorkYearly(e, index)}
										/>
										<span
											onClick={() => actions.deleteWorkYearly(index)}
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
				)}
			</Context.Consumer>
		);
	}
}

WorkYearly.propTypes = {
	store: PropTypes.object,
	context: PropTypes.object
};

WorkYearly.contextType = Context;
