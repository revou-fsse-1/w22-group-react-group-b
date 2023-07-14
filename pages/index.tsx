import React from "react";
import Home from "./components/Home";
import Contact from "./Contact";
import logo from "../public/recipeslogo.png";
import { UploadPhoto } from "./components/uploadPhoto";
const Index = () => {
	return (
		<div>
			<Home logo={logo} />
			<Contact />
			{/* <UploadPhoto /> */}
		</div>
	);
};

export default Index;
