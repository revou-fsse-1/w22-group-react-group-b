import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import logo from "../public/recipeslogo.png";

const Index = () => {
  return (
    <div>
      <Home logo={logo} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
