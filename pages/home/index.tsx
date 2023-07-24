import Image from "next/image";
import CategoryRecipe from "../components/Category";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const logOutButton = () => {
		deleteCookie("token");
		deleteCookie("id");
		router.push("/");
	};
	return (
		<div className="bg-[#1E1E1E] top-0 p-20">
			<div className="bg-[#FFF59D] px-8 pb-20 rounded-xl">
				<div className="w-full h-full flex flex-row justify-between items-center ">
					<Image
						src="https://i.imgur.com/bF7pZ4u.png"
						width={160}
						height={160}
						alt="logo"
					/>
					<a
						onClick={logOutButton}
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
					>
						Logout
					</a>
				</div>
				<div className="w-fit mt-16">
					<Link
						href="/new"
						className="cursor-pointer  h-fit"
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
					</Link>
				</div>

				<CategoryRecipe />
			</div>
			<footer className="text-[#F5F5F5] ">
				<p>© 2023 Recipes. All rights reserved.</p>
			</footer>
		</div>
	);
}
