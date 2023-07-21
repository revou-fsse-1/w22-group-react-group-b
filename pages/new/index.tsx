import { useState } from "react";
import UploadPhoto from "../components/uploadPhoto";
import stateStore from "../components/stateStore";
import { getCookie } from "cookies-next";
export default function NewRecipe() {
	const { token } = stateStore();
	console.log(token);
	const [recipe, setRecipe] = useState({
		name: "",
		category: "",
		url: "",
		ingredients: ["", ""],
		step: ["", ""],
	});

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

	const handleStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRecipe((prevRecipe) => ({
			...prevRecipe,
			[e.target.name]: e.target.value,
		}));
	};

	const postButton = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(token);
		const response = await fetch(
			"https://expressjs-server-production-934e.up.railway.app/recipe",
			{
				method: "POST",
				headers: {
					authorization: `Bearer ${getCookie("token")}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(recipe),
			}
		);
		await response.json();
	};

	return (
		<form className="text-black">
			<div className="border-solid border-black border-2">
				<input
					type="text"
					name="name"
					value={recipe.name}
					onChange={handleStringChange}
					placeholder="Nama Masakan"
				/>
			</div>
			<div className="border-solid border-black border-2">
				<select name="category" onChange={handleChange}>
					<option value="Western">Western</option>
					<option value="Asian">Asian</option>
					<option value="Indonesian">Indonesian</option>
					<option value="Vegetarian">Vegetarian</option>
					<option value="Sweets">Sweets</option>
				</select>
			</div>

			<UploadPhoto setRecipe={setRecipe} />
			{recipe.ingredients.map((ing, index) => {
				return (
					<div key={index} className="border-solid border-black border-2">
						<input
							type="text"
							name="ingredients"
							placeholder="1/2 ekor kuda"
							value={ing}
							onChange={handleChange}
							id={index.toString()}
						/>
					</div>
				);
			})}
			<button
				onClick={(e: React.SyntheticEvent) => addItem(e, "ingredients")}
				className="bg-white"
				id="ingredients"
			>
				Tambah Bahan
			</button>
			{recipe.step.map((step, index) => {
				return (
					<div key={index} className="border-solid border-black border-2">
						<input
							type="text"
							name="step"
							placeholder={`Step ${index + 1}`}
							value={step}
							onChange={handleChange}
							id={index.toString()}
						/>
					</div>
				);
			})}
			<button
				onClick={(e: React.SyntheticEvent) => addItem(e, "steps")}
				className="bg-white"
				id="steps"
			>
				Tambah Langkah
			</button>
			<div>
				<button onClick={postButton} className="bg-white text-black">
					Simpan
				</button>
			</div>
		</form>
	);
}
