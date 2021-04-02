import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<Router>
			<Menu />
			<div className="App">
				<Switch>
					<Route path="/" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
