import logo from "../../public/recipeslogo.png";
import Image from "next/image";
import CategoryRecipe from "../components/Category";
export default function Home() {
	return (
		<div className="bg-[#1E1E1E] top-0 p-20">
			<div className="bg-[#FFF59D] px-8 pb-20">
				<div className="w-full h-full flex flex-row justify-between items-center ">
					<Image src={logo} width={160} height={160} alt="logo" />
					<a
						// onClick={openLoginModal}
						className="cursor-pointer font-Lato w-fit h-fit items-center"
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
						Login
					</a>
				</div>
				<div className="w-fit mt-16">
					<a
						// onClick={openLoginModal}
						className="cursor-pointer font-Lato h-fit"
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
						Add New Recipe
					</a>
				</div>

				<CategoryRecipe />
			</div>
		</div>
	);
}
