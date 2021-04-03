import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {MenuData} from "./MenuData";
import "./Menu.css";

function Menu() {
	const [menu, setMenu] = useState(false);

	const showMenu = () => setMenu(!menu);

	return (
		<>
			{/* <IconContext.Provider value={{color: "#fff"}}> */}
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<img src="/images/menu.svg" onClick={showMenu} />
				</Link>
				<img className="menu-logo" src="/images/main_logo.svg" />
			</div>
			<nav className={menu ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showMenu}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<img src="/images/X.svg" />
						</Link>
					</li>
					{MenuData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			{/* </IconContext.Provider> */}
		</>
	);
}

export default Menu;
