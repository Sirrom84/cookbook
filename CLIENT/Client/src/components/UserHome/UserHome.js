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
					<span onClick={showOptions}>
						{!options ? <FaChevronDown /> : <FaChevronUp />}
					</span>
				</Link>
			</nav>

			<nav className={!options ? "options-hidden" : "options-showing"}>
				<ul className="recipe-options-list">
					<Link to="/breakfast">
						<li>Breakfast</li>
					</Link>
					<Link to="/lunch">
						<li>Lunch</li>
					</Link>
					<Link to="/dinner">
						<li>Dinner</li>
					</Link>
					<Link to="/appetizers">
						<li>Appetizers</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}
