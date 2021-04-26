import React, {useState} from "react";
import {Link} from "react-router-dom";
import {MenuData} from "./TopnavData";
import "./Topnav.css";

function Menu() {
	const [menu, setMenu] = useState(false);

	const showMenu = () => setMenu(!menu);

	return (
		<>
			{/* <IconContext.Provider value={{color: "#fff"}}> */}
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<img
						className="menu-open-bars"
						src="/images/menu.svg"
						onClick={showMenu}
						alt="open-bars"
					/>
				</Link>
				<img className="menu-logo" src="/images/main_logo.svg" alt="logo" />
				<h3 className="login">Login</h3>
			</div>
			<nav className={menu ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showMenu}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<img className="menu-close" src="/images/X.svg" alt="closemenu" />
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
					{/* <img
						className="active-apple-logo"
						alt="apple-image"
						src="/images/menu_back_icon.svg"
					/> */}
				</ul>
			</nav>
			{/* </IconContext.Provider> */}
		</>
	);
}

export default Menu;
