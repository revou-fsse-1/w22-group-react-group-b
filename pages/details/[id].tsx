import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Image from "next/image";

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

	return (
		<div className="bg-[#1E1E1E] top-0 p-20 font-Lato text-lg">
			<div className="bg-white text-black flex flex-col gap-9 pt-8 pl-7">
				<p className="italic underline text-2xl">{details?.name}</p>
				<div className="flex flex-row flex-wrap gap-7">
					<img src={details?.imageURL} width={300} height={500} alt="Details" />
					<ul className="list-disc">
						<span>Ingredients:</span>
						{details?.ingredients.map((ing, index) => {
							return <li key={index}>{ing}</li>;
						})}
					</ul>
				</div>
				<ul className="list-decimal">
					<span>Steps:</span>
					{details?.step.map((step, index) => {
						return <li key={index}>{step}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
