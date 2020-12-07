import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Work } from "./views/work";
import { Hobby } from "./views/hobby";
import { Excersize } from "./views/excersize";
import { Goals } from "./views/goals";
import { WorkDaily } from "./views/workdaily";
import { WorkWeekly } from "./views/workweekly";
import { WorkQuarterly } from "./views/workquarterly";
import { WorkYearly } from "./views/workyearly";
import { GoalsYearly } from "./views/goalsyearly";
import { Goals5Year } from "./views/goals5year";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar1 } from "./component/navbar1";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar1 />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/work" component={Work} />
						<Route exact path="/workdaily" component={WorkDaily} />
						<Route exact path="/workweekly" component={WorkWeekly} />
						<Route exact path="/workquarterly" component={WorkQuarterly} />
						<Route exact path="/workyearly" component={WorkYearly} />
						<Route exact path="/hobby" component={Hobby} />
						<Route exact path="/excersize" component={Excersize} />
						<Route exact path="/goals" component={Goals} />
						<Route exact path="/goalsyearly" component={GoalsYearly} />
						<Route exact path="/goals5year" component={Goals5Year} />
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
