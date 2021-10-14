import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/">
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
