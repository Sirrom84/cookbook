import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const MenuData = [
	{
		title: "Home",
		path: "/",
		icon: <AiIcons.AiFillHome />,
		cName: "nav-text",
	},
	{
		title: "Recipes",
		path: "/recipes",
		icon: <IoIcons.IoIosPaper />,
		cName: "nav-text",
	},
	{
		title: "Groceries",
		path: "/groceries",
		icon: <FaIcons.FaCartPlus />,
		cName: "nav-text",
	},
	{
		title: "Share",
		path: "/share",
		icon: <IoIcons.IoMdPeople />,
		cName: "nav-text",
	},
	{
		title: "Messages",
		path: "/messages",
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: "nav-text",
	},
	{
		title: "Info",
		path: "/info",
		icon: <IoIcons.IoMdHelpCircle />,
		cName: "nav-text",
	},
];
