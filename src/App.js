import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import UserHome from "./components/UserHome/UserHome";

function App() {
	return (
		<Router>
			<Menu />
			<div className="App">
				<Switch>
					<Route path="/" exact component={UserHome} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
