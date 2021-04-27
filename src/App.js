import "./App.css";
import React, {BrowserRouter as Router} from "react-router-dom";
import Topnav from "./components/Topnav/Topnav.js.js";
import UserHome from "./components/UserHome/UserHome";
import RecipeItem from "./components/RecipeCard/RecipeCard";
function App() {
	return (
		<Router>
			<Topnav />
			<div className="App">
				<UserHome />
				<RecipeItem />
			</div>
		</Router>
	);
}

export default App;
