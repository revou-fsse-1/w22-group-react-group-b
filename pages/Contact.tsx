import React from "react";
import { Element } from "react-scroll";
import SlidingImage from "./components/slidingImage";

const Contact = () => {
	return (
		<div className="p-10 bg-white text-black">
			<Element name="contact" className="bg-[#1E1E1E] h-auto py-14">
				<p className="text-white w-fit mx-auto mb-9 text-3xl">
					Our Recipes Gallery
				</p>
				<SlidingImage />
				<div className="bg-white rounded-xl mt-20 mx-20 px-14 py-8">
					<div className="flex flex-row text-xl justify-around">
						<div className="w-1/5">
							<p className="mb-5">Contact Us:</p>
							<p>ask@recipes.id</p>
							<p>+62 361 123 4567</p>
							<p>13 Gajahmada Street, Denpasar</p>
							<p>80112</p>
						</div>
						<div className="w-1/5">
							<p className="mb-5">Or, send us a message:</p>
							<div className="flex flex-col gap-4">
								<input
									type="text"
									placeholder="Name"
									className="border-b-2 border-black focus:outline-0 w-full"
								/>
								<input
									type="text"
									placeholder="Email"
									className="border-b-2 border-black focus:outline-0 w-full"
								/>
								<input
									type="text"
									placeholder="Message"
									className="border-b-2 border-black focus:outline-0 w-full"
								/>
								<button
									className="cursor-pointer contact"
									style={{
										color: "#181823",
										backgroundColor: "#F5F5F5",
										display: "block",
										padding: "8px",
										border: "3px solid black",
										boxShadow: "5px -5px 0 0px black",
										position: "relative",
										top: "0",
										left: "0",
										transition: "box-shadow 1s, left 1s, top 1s",
										width: "fit-content",
										marginTop: "16px",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.boxShadow = "0 0 0 -3px white";
										e.currentTarget.style.top = "-10px";
										e.currentTarget.style.left = "10px";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.boxShadow = "5px -5px 0 0px black";
										e.currentTarget.style.top = "0";
										e.currentTarget.style.left = "0";
									}}
								>
									Send
								</button>
							</div>
						</div>
					</div>
				</div>
			</Element>
		</div>
	);
};

export default Contact;
