import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const TodoInfoModal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { actions, store } = useContext(Context);
	const handleDoIt = () => {
		actions.deleteContact(props.index);
		props.onClose();
	};

	return (
		<div
			className="modal"
			tabIndex="-1"
			role="dialog"
			style={{ display: props.show !== false ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					{store.hobby &&
						store.hobby.filter((todo, index) => index == props.show).map((todo, index) => (
							<>
								<div className="modal-header">
									<h3 className="modal-title">
										Todo number: &nbsp;
										{props.show + 1}
									</h3>
									{props.onClose ? (
										<button
											onClick={() => props.onClose()}
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									) : (
										""
									)}
								</div>
								<div className="modal-body">
									<h5>
										<strong>{todo.name}</strong>
									</h5>
									<p>created on: {todo.date}</p>
								</div>
							</>
						))}
					{/* <div className="modal-footer mx-auto">
							 	<a
									type="button"
									href="https://www.catf.us/donate-form/"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-success"
									onClick={() => props.onClose()}
									data-dismiss="modal">
									PROCEED
								</a>
								<button type="button" className="btn btn-secondary" onClick={() => props.onClose()}>
									STAY PUT
								</button>
							</div> */}
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
TodoInfoModal.propTypes = {
	key: PropTypes.number,
	index: PropTypes.number,
	todo: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
TodoInfoModal.defaultProps = {
	show: false,
	onClose: null,
	id: null
};
