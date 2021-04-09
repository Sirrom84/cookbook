import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topnav from "./components/Topnav/Topnav.js.js";
import UserHome from "./components/UserHome/UserHome";

function App() {
	return (
		<Router>
			<Topnav />
			<div className="App">
				<UserHome />
			</div>
		</Router>
	);
}

export default App;
