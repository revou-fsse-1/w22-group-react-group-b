import React, { useState, useEffect } from "react";
import Image from "next/image";
const SlidingImage = () => {
	const [transitionArray, setTransitionArray] = useState([
		-200, -100, 0, 100, 200, 300, 400,
	]);
	const [opacity, setOpacity] = useState([0, 0, 1, 1, 1, 0, 0]);

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
			console.log(transitionArray);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [images.length, transitionArray]);

	return (
		<div
			className={`sliding-image w-3/5 h-full items-center overflow-x-hidden relative`}
		>
			{images.map((image, index) => {
				return (
					<div key={image} className="absolute w-1/3">
						<Image
							src={image}
							alt={`Image  ${index}`}
							width={1000}
							height={1000}
							style={{
								transform: `translateX(${transitionArray[index]}%)`,
								transition: `all 1000ms ease`,
								opacity: `${opacity[index]}`,
							}}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default SlidingImage;
