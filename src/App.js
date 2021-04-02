import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<>
			<Router>
				<Menu />
				{/* <Switch>
					<Route path="/" />
				</Switch> */}
			</Router>
		</>
	);
}

export default App;
