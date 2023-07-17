import React, { useState, useEffect } from "react";
import Image from "next/image";
const SlidingImage = () => {
	const [transitionArray, setTransitionArray] = useState([
		-100, 0, 100, 200, 300, 400, 500,
	]);
	const [opacity, setOpacity] = useState([0, 1, 1, 1, 1, 1, 0]);

	const images = [
		"https://i.imgur.com/N6xgNhV.jpeg",
		"https://i.imgur.com/pAdq4xj_d.webp?maxwidth=760&fidelity=grand",
		"https://i.imgur.com/dhdl81n_d.webp?maxwidth=760&fidelity=grand",
		"https://i.imgur.com/9LsA8AK.jpeg",
		"https://i.imgur.com/XsqgwXX_d.webp?maxwidth=760&fidelity=grand",
		"https://i.imgur.com/STsd4A0_d.webp?maxwidth=760&fidelity=grand",
		"https://i.imgur.com/XMALO7H_d.webp?maxwidth=760&fidelity=grand",
		// Add more image URLs as needed
	];

	useEffect(() => {
		// Automatic sliding effect
		const interval = setInterval(() => {
			setTransitionArray((prevArray) => [
				...prevArray.slice(1, transitionArray.length),
				prevArray[0],
			]);
			setOpacity((prevArray) => [
				...prevArray.slice(1, transitionArray.length),
				prevArray[0],
			]);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [images.length, transitionArray]);

	return (
		<div className="relative h-[400px] mx-20 overflow-hidden">
			{images.map((image, index) => {
				return (
					<div key={image}>
						<Image
							src={image}
							alt={`Image  ${index}`}
							className="rounded-[40px]"
							width={332}
							height={332}
							style={{
								transform: `translateX(${transitionArray[index]}%)`,
								transition: `all 1000ms ease`,
								opacity: `${opacity[index]}`,
								position: "absolute",
								width: "300px",
								top: "0",
								bottom: "0",
								padding: "16px",
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default SlidingImage;
