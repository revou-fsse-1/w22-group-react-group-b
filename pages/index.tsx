import React from "react";
import Home from "./components/Home";
import About from "./About";
import logo from "../public/recipeslogo.png";
const Index = () => {
	return (
		<div>
			<Home logo={logo} />
			<About />
		</div>
	);
};

export default Index;
