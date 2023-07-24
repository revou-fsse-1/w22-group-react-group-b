import { useState, useEffect } from "react";
import UploadPhoto from "../components/uploadPhoto";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NewRecipe() {
	const router = useRouter();
	const token = getCookie("token");
	const id = router.query.id;
	const [recipe, setRecipe] = useState({
		name: "",
		category: "Western",
		imageURL: "",
		ingredients: ["", ""],
		step: ["", ""],
	});
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
					setRecipe(data.response);
				}
			} catch (err) {
				console.error(err);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, [id]);
	const addItem = (e: React.SyntheticEvent, arrayName: string) => {
		e.preventDefault();
		setRecipe((prevRecipe) => {
			const newIngredient = [
				...prevRecipe[arrayName as keyof typeof prevRecipe],
				"",
			];
			return {
				...prevRecipe,
				[arrayName]: newIngredient,
			};
		});
	};
	const handleStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRecipe((prevRecipe) => ({
			...prevRecipe,
			[e.target.name]: e.target.value,
		}));
	};

	const postButton = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const response = await fetch(
			`https://expressjs-server-production-934e.up.railway.app/recipe/${id}`,
			{
				method: "PATCH",
				headers: {
					authorization: `Bearer ${getCookie("token")}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(recipe),
			}
		);
		const data = await response.json();
		if (data) {
			router.push("/home");
		}
	};
	console.log(recipe);
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const arrayName = e.target.name;
		const index = +e.target.id;
		setRecipe((prevRecipe) => {
			if (e.target.name === "category") {
				const newValue = Array.isArray(e.target.value)
					? e.target.value
					: e.target.value;
				return { ...prevRecipe, [arrayName]: newValue };
			}
			if (Array.isArray(prevRecipe[arrayName as keyof typeof prevRecipe])) {
				const newArray = [...prevRecipe[arrayName as keyof typeof prevRecipe]];
				const newValue = Array.isArray(e.target.value)
					? e.target.value
					: e.target.value;
				newArray[index] = newValue;
				return { ...prevRecipe, [arrayName]: newArray };
			} else {
				const newValue = Array.isArray(e.target.value)
					? e.target.value
					: e.target.value;
				return { ...prevRecipe, [arrayName]: newValue };
			}
		});
	};

	return (
		<div className="flex items-center justify-center">
			<div className="p-3 bg-yellow-200 rounded-md w-[100%]">
				<div className="flex justify-center flex-col items-center">
					<Image
						src="https://i.imgur.com/bF7pZ4u.png"
						alt="Logo"
						width={200}
						height={200}
					/>
					<div className="p-3 font-Lato font-bold text-lg">
						Please Submit Your Recipe!
					</div>
				</div>

				<form className="text-black space-y-4 font-Lato">
					<div className="border-solid border-black border-2 p-2 bg-white rounded-md">
						<input
							type="text"
							name="name"
							value={recipe?.name}
							onChange={handleStringChange}
							placeholder="Dishes Name"
							className="w-full focus:outline-none"
						/>
					</div>
					<div className="border-solid border-black border-2 p-2 rounded-md bg-white">
						<select
							name="category"
							onChange={handleChange}
							className="w-full focus:outline-none"
						>
							<option value="Western">Western</option>
							<option value="Asian">Asian</option>
							<option value="Indonesian">Indonesian</option>
							<option value="Vegetarian">Vegetarian</option>
							<option value="Sweets">Sweets</option>
						</select>
					</div>

					{/* Ingredients */}
					{recipe?.ingredients?.map((ing, index) => (
						<div
							key={index}
							className="border-solid border-black border-2 p-2 rounded-md bg-white"
						>
							<input
								type="text"
								name="ingredients"
								placeholder="Ingredients"
								value={ing}
								onChange={handleChange}
								id={index.toString()}
								className="w-full focus:outline-none"
							/>
						</div>
					))}
					<button
						onClick={(e: React.SyntheticEvent) => addItem(e, "ingredients")}
						className="cursor-pointer font-Lato"
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
						id="ingredients"
					>
						Adding New Ingredients
					</button>

					{/* Steps */}
					{recipe?.step?.map((step, index) => (
						<div
							key={index}
							className="border-solid border-black border-2 p-2 rounded-md bg-white"
						>
							<input
								type="text"
								name="step"
								placeholder={`Steps ${index + 1}`}
								value={step}
								onChange={handleChange}
								id={index.toString()}
								className="w-full focus:outline-none"
							/>
						</div>
					))}
					<button
						onClick={(e: React.SyntheticEvent) => addItem(e, "step")}
						className="cursor-pointer font-Lato"
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
						id="steps"
					>
						Adding New Steps
					</button>

					{/* Submit button */}
					<div>
						<button
							onClick={postButton}
							className="cursor-pointer font-Lato"
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
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
