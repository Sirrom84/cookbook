import "./App.css";
import React, {BrowserRouter as Router} from "react-router-dom";
import Topnav from "./components/Topnav/Topnav.js.js";
import UserHome from "./components/UserHome/UserHome";
import RecipeBox from "./components/RecipeBox/RecipeBox";
function App() {
	return (
		<Router>
			<Topnav />
			<div className="App">
				<UserHome />
				<RecipeBox />
			</div>
		</Router>
	);
}

export default App;
