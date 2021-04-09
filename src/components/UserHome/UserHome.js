import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import "../UserHome/UserHome.css";

export default function UserHome() {
	const [options, setOptions] = useState(false);
	const showOptions = () => setOptions(!options);

	return (
		<div className="user-home-container">
			<nav className="recipe-header">
				<h1 className="recipes-header-text">Recipes</h1>
				<Link to="#" className="options-toggle">
					<a onClick={showOptions}>
						{!options ? <FaChevronDown /> : <FaChevronUp />}
					</a>
				</Link>
			</nav>

			<nav className={!options ? "options-hidden" : "options-showing"}>
				<ul className="recipe-options-list">
					<Link to="/chicken">
						<li>Chicken</li>
					</Link>
					<Link path="/beef">
						<li>Beef</li>
					</Link>
					<Link to="/pork">
						<li>Pork</li>
					</Link>
					<Link to="/fish">
						<li>Fish</li>
					</Link>
					<Link to="/pasta">
						<li>Pasta</li>
					</Link>
					<Link to="/favourites">
						<li>Favourites</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}
