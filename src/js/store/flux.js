const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			workdaily: [],
			workweekly: [],
			workquarterly: [],
			workyearly: [],
			hobby: [{ complete: false, date: "12/7/2020", name: "hardcoded todo" }],
			excersize: [],
			goalsyearly: [],
			goals5year: []
		},
		actions: {
			todaysDate: () => {
				var d = new Date();
				let month = "" + (d.getMonth() + 1);
				let day = "" + d.getDate();
				let year = d.getFullYear();
				if (month.length < 2) month = "0" + month;
				if (day.length < 2) day = "0" + day;
				return [month, day, year].join("-");
			},

			addWorkDaily: todo => {
				let tempStore = getStore();
				tempStore.workdaily.push(todo);
				setStore({ tempStore });
			},

			addWorkWeekly: todo => {
				let tempStore = getStore();
				tempStore.workweekly.push(todo);
				setStore({ tempStore });
			},

			addWorkQuarterly: todo => {
				let tempStore = getStore();
				tempStore.workquarterly.push(todo);
				setStore({ tempStore });
			},

			addWorkYearly: todo => {
				let tempStore = getStore();
				tempStore.workyearly.push(todo);
				setStore({ tempStore });
			},

			addHobby: todo => {
				let tempStore = getStore();
				tempStore.hobby.push(todo);
				setStore({ tempStore });
			},

			addExcersize: todo => {
				let tempStore = getStore();
				tempStore.excersize.push(todo);
				setStore({ tempStore });
			},

			addGoalsYearly: todo => {
				let tempStore = getStore();
				tempStore.goalsyearly.push(todo);
				setStore({ tempStore });
			},

			addGoals5Year: todo => {
				let tempStore = getStore();
				tempStore.goals5year.push(todo);
				setStore({ tempStore });
			},

			handleChangeWorkDaily: (e, i) => {
				let tempStore = getStore();
				setStore({
					workdaily: tempStore.workdaily.map((t, ind) => {
						if (ind === i) {
							return e.target.value;
						} else {
							return t;
						}
					})
				});
			},

			handleChangeWorkWeekly: (e, i) => {
				let tempStore = getStore();
				setStore({
					workweekly: tempStore.workweekly.map((t, ind) => {
						if (ind === i) {
							return e.target.value;
						} else {
							return t;
						}
					})
				});
			},

			handleChangeWorkQuarterly: (e, i) => {
				let tempStore = getStore();
				setStore({
					workquarterly: tempStore.workquarterly.map((t, ind) => {
						if (ind === i) {
							return e.target.value;
						} else {
							return t;
						}
					})
				});
			},

			handleChangeWorkYearly: (e, i) => {
				let tempStore = getStore();
				setStore({
					workyearly: tempStore.workyearly.map((t, ind) => {
						if (ind === i) {
							return e.target.value;
						} else {
							return t;
						}
					})
				});
			},

			handleChangeHobby: (e, i) => {
				let tempStore = getStore();
				tempStore.hobby.map((t, ind) => {
					if (ind === i) {
						setStore((t.name = e.target.value));
					}
				});
			},

			hobbySetComplete: (hobby, i) => {
				let tempStore = getStore();
				tempStore.hobby.map((hobby, ind) => {
					if (ind === i) {
						setStore((hobby.complete = !hobby.complete));
					}
				});
			},
			handleChangeExcersize: (e, i) => {
				let tempStore = getStore();
				setStore({
					excersize: tempStore.excersize.map((t, ind) => {
						if (ind === i) {
							return e.target.value;
						} else {
							return t;
						}
					})
				});
			},

			handleChangeGoalsYearly: (e, i) => {
				let tempStore = getStore();
				setStore({
					goalsyearly: tempStore.goalsyearly.map((t, ind) => {
						if (ind === i) {
							return e.target.value;
						} else {
							return t;
						}
					})
				});
			},

			handleChange5Year: (e, i) => {
				let tempStore = getStore();
				setStore({
					goals5year: tempStore.goals5year.map((t, ind) => {
						if (ind === i) {
							return e.target.value;
						} else {
							return t;
						}
					})
				});
			},

			deleteWorkDaily: i => {
				let tempStore = getStore();
				setStore({ workdaily: tempStore.workdaily.filter((value, ind) => ind !== i) });
			},

			deleteWorkWeekly: i => {
				let tempStore = getStore();
				setStore({ workweekly: tempStore.workweekly.filter((value, ind) => ind !== i) });
			},

			deleteWorkQuarterly: i => {
				let tempStore = getStore();
				setStore({ workquarterly: tempStore.workquarterly.filter((value, ind) => ind !== i) });
			},

			deleteWorkYearly: i => {
				let tempStore = getStore();
				setStore({ workyearly: tempStore.workyearly.filter((value, ind) => ind !== i) });
			},

			deleteHobby: i => {
				let tempStore = getStore();
				setStore({ hobby: tempStore.hobby.filter((value, ind) => ind !== i) });
			},

			deleteExcersize: i => {
				let tempStore = getStore();
				setStore({ excersize: tempStore.excersize.filter((value, ind) => ind !== i) });
			},

			deleteGoalsYearly: i => {
				let tempStore = getStore();
				setStore({ goalsyearly: tempStore.goalsyearly.filter((value, ind) => ind !== i) });
			},

			deleteGoals5Year: i => {
				let tempStore = getStore();
				setStore({ goals5year: tempStore.excersize.filter((value, ind) => ind !== i) });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
