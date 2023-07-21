import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface RecipeData {
	id: number;
	userId: number;
	name: string;
	imageURL: string;
	category: string;
	step: string[];
	ingredients: string[];
}
export default function CategoryRecipe() {
	const [western, setWestern] = useState<RecipeData[]>([]);
	const [asian, setAsian] = useState<RecipeData[]>([]);
	const [sweet, setSweet] = useState<RecipeData[]>([]);
	const [vegetarian, setVegetarian] = useState<RecipeData[]>([]);
	const [indonesian, setIndonesian] = useState<RecipeData[]>([]);

	const fetchData = async () => {
		const response = await fetch(
			"https://expressjs-server-production-934e.up.railway.app/recipe",
			{
				headers: {
					authorization: `Bearer ${getCookie("token")}`,
				},
			}
		);
		const data = await response.json();
		const westernData = new Set();
		const asianData = new Set();
		const sweetData = new Set();
		const indonesianData = new Set();
		const vegetarianData = new Set();
		data.response.forEach((d: any) => {
			if (d.category === "Western") {
				westernData.add(JSON.stringify(d));
			} else if (d.category === "Asian") {
				asianData.add(JSON.stringify(d));
			} else if (d.category === "Sweets") {
				sweetData.add(JSON.stringify(d));
			} else if (d.category === "Indonesian") {
				indonesianData.add(JSON.stringify(d));
			} else if (d.category === "Vegetarian") {
				vegetarianData.add(JSON.stringify(d));
			}
		});
		setWestern(
			Array.from(westernData).map((item) => JSON.parse(item as string))
		);
		setAsian(Array.from(asianData).map((item) => JSON.parse(item as string)));
		setSweet(Array.from(sweetData).map((item) => JSON.parse(item as string)));
		setIndonesian(
			Array.from(indonesianData).map((item) => JSON.parse(item as string))
		);
		setVegetarian(
			Array.from(vegetarianData).map((item) => JSON.parse(item as string))
		);
	};
	const token = getCookie("token");

	useEffect(() => {
		fetchData();
	}, [token]);
	return (
		<div className="flex flex-row flex-wrap gap-12">
			<div>
				<div className="mt-24 flex flex-row items-center font-lato text-lg">
					<ul className="w-fit">
						<li className="w-4 h-4 bg-black rounded-full"></li>
					</ul>
					<span className="text-black ml-2">Western</span>
				</div>
				<div className="flex flex-col gap-4">
					{western.map((data) => {
						const imgURL = `linear-gradient(rgba(236, 236, 236, 0.6), rgba(236, 236, 236, 0.6)), url('${data.imageURL}')`;
						return (
							<Link
								href={`/details/${data.id}`}
								className="rounded-xl text-black flex font-bold text-2xl text-center"
								key={data.id}
								style={{
									background: imgURL,
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									height: "100px",
									width: "320px",
									backgroundColor: "rgba(236,236,236,0.5)",
								}}
							>
								<p className="w-fit m-auto">{data.name}</p>
							</Link>
						);
					})}
				</div>
			</div>
			<div>
				<div className="mt-24 flex flex-row items-center font-lato text-lg">
					<ul className="w-fit">
						<li className="w-4 h-4 bg-black rounded-full"></li>
					</ul>
					<span className="text-black ml-2">Asian</span>
				</div>
				<div className="flex flex-col gap-4">
					{asian.map((data) => {
						const imgURL = `linear-gradient(rgba(236, 236, 236, 0.6), rgba(236, 236, 236, 0.6)), url('${data.imageURL}')`;
						return (
							<Link
								href={`/details/${data.id}`}
								className="rounded-xl text-black flex font-bold text-2xl text-center"
								key={data.id}
								style={{
									background: imgURL,
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									height: "100px",
									width: "320px",
									backgroundColor: "rgba(236,236,236,0.5)",
								}}
							>
								<p className="w-fit m-auto">{data.name}</p>
							</Link>
						);
					})}
				</div>
			</div>
			<div>
				<div className="mt-24 flex flex-row items-center font-lato text-lg">
					<ul className="w-fit">
						<li className="w-4 h-4 bg-black rounded-full"></li>
					</ul>
					<span className="text-black ml-2">Indonesian</span>
				</div>
				<div className="flex flex-col gap-4">
					{indonesian.map((data) => {
						const imgURL = `linear-gradient(rgba(236, 236, 236, 0.6), rgba(236, 236, 236, 0.6)), url('${data.imageURL}')`;
						return (
							<Link
								href={`/details/${data.id}`}
								className="rounded-xl text-black flex font-bold text-2xl text-center"
								key={data.id}
								style={{
									background: imgURL,
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									height: "100px",
									width: "320px",
									backgroundColor: "rgba(236,236,236,0.5)",
								}}
							>
								<p className="w-fit m-auto">{data.name}</p>
							</Link>
						);
					})}
				</div>
			</div>
			<div>
				<div className="mt-24 flex flex-row items-center font-lato text-lg">
					<ul className="w-fit">
						<li className="w-4 h-4 bg-black rounded-full"></li>
					</ul>
					<span className="text-black ml-2">Sweet</span>
				</div>
				<div className="flex flex-col gap-4">
					{sweet.map((data) => {
						const imgURL = `linear-gradient(rgba(236, 236, 236, 0.6), rgba(236, 236, 236, 0.6)), url('${data.imageURL}')`;
						return (
							<Link
								href={`/details/${data.id}`}
								className="rounded-xl text-black flex font-bold text-2xl text-center"
								key={data.id}
								style={{
									background: imgURL,
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									height: "100px",
									width: "320px",
									backgroundColor: "rgba(236,236,236,0.5)",
								}}
							>
								<p className="w-fit m-auto">{data.name}</p>
							</Link>
						);
					})}
				</div>
			</div>
			<div>
				<div className="mt-24 flex flex-row items-center font-lato text-lg">
					<ul className="w-fit">
						<li className="w-4 h-4 bg-black rounded-full"></li>
					</ul>
					<span className="text-black ml-2">Vegetarian</span>
				</div>
				<div className="flex flex-col gap-4">
					{vegetarian.map((data) => {
						const imgURL = `linear-gradient(rgba(236, 236, 236, 0.6), rgba(236, 236, 236, 0.6)), url('${data.imageURL}')`;
						return (
							<Link
								href={`/details/${data.id}`}
								className="rounded-xl text-black flex font-bold text-2xl text-center"
								key={data.id}
								style={{
									background: imgURL,
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									height: "100px",
									width: "320px",
									backgroundColor: "rgba(236,236,236,0.5)",
								}}
							>
								<p className="w-fit m-auto">{data.name}</p>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
