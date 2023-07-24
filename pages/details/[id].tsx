import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Link from "next/link";

interface RecipeData {
	id: number;
	userId: number;
	name: string;
	imageURL: string;
	category: string;
	step: string[];
	ingredients: string[];
}
export default function Details() {
	const [details, setDetails] = useState<RecipeData>();
	const token = getCookie("token");
	const router = useRouter();
	const id = router.query.id;
	const fetchData = async () => {
		if (id) {
			try {
				const response = await fetch(
					`https://expressjs-server-production-934e.up.railway.app/recipe/${id}`,
					{
						headers: {
							authorization: `Bearer ${token}`,
						},
					}
				);
				const data = await response.json();
				if (data) {
					setDetails(data.response);
				}
			} catch (err) {
				console.error(err);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, [id]);
	console.log(details);

	return (
		<div className="bg-yellow-200 top-0 px-20 py-5  text-lg">
			<div className="bg-[#F5F5F5] text-black flex flex-col gap-9 p-10 rounded-lg border-solid border-black border-4">
				<div className="flex flex-row justify-between">
					<p className="italic underline text-2xl font-bold">{details?.name}</p>
					<div className="flex flex-row gap-5">
						{Number(getCookie("id")) === details?.userId ? (
							<Link
								className="cursor-pointer  w-fit h-fit items-center"
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
								href={`/edit/${details.id}`}
							>
								Edit
							</Link>
						) : (
							""
						)}
						<Link
							className="cursor-pointer  w-fit h-fit items-center"
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
							href="/home"
						>
							Back to Recipes
						</Link>
					</div>
				</div>

				<div className="flex flex-row flex-wrap gap-7">
					<img
						className="rounded-xl"
						src={details?.imageURL}
						width={400}
						height={500}
						alt="Details"
					/>
					<ul className="list-disc px-20 leading-9">
						<span className="font-bold">Ingredients:</span>
						{details?.ingredients.map((ing, index) => {
							return <li key={index}>{ing}</li>;
						})}
					</ul>
				</div>
				<ul className="list-decimal px-5 leading-7 text-justify">
					<span className="font-bold">Steps:</span>
					{details?.step.map((step, index) => {
						return <li key={index}>{step}</li>;
					})}
				</ul>
			</div>
			<footer className="text-[#181823] ">
				<p>© 2023 Recipes. All rights reserved.</p>
			</footer>
		</div>
	);
}
