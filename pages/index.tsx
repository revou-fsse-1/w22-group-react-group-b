import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import logo from "../public/recipeslogo.png";

const Index = () => {
	return (
		<div>
			<Home logo={logo} />
			<Contact />
		</div>
	);
};

export default Index;
