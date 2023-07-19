import { useState } from "react";
import UploadPhoto from "../components/uploadPhoto";
export default function NewRecipe() {
	const [recipe, setRecipe] = useState({
		name: "",
		category: "",
		url: "",
		ingredients: ["", ""],
		steps: ["", ""],
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const arrayName = e.target.name;
		const index = e.target.id;
		setRecipe((prevRecipe) => {
			const newItem = [...prevRecipe[arrayName as keyof typeof prevRecipe]];
			newItem[+index] = e.target.value;
			return { ...prevRecipe, newItem };
		});
	};
	return (
		<form className="text-black">
			<UploadPhoto setRecipe={setRecipe} />
			{recipe.ingredients.map((ing, index) => {
				return (
					<div key={index} className="border-solid border-black border-2">
						<input
							type="text"
							name="ingredient"
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
			{recipe.steps.map((step, index) => {
				return (
					<div key={index} className="border-solid border-black border-2">
						<input
							type="text"
							name="steps"
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
			<button>Simpan</button>
		</form>
	);
}
