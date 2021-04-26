import React from "react";
import "./RecipeCard.css";
import pic from "./boloex.jpeg";

export default function RecipeItem() {
	return (
		<div className="recipe-card">
			<img src={pic} alt="testimage" />
			<div className="card-info">
				<h3 className="card-title">Bolognese </h3>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
					dicta?
				</p>
			</div>
		</div>
	);
}
