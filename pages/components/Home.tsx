import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface NavbarProps {
	logo: StaticImageData;
}

const Navbar = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="bg-white p-10">
			<nav className="bg-yellow-200 h-screen rounded-xl">
				<div className="flex items-center justify-between">
					<div>
						<Image
							src="https://i.imgur.com/bF7pZ4u.png"
							alt="Logo"
							width={200}
							height={200}
						/>
					</div>
					<ul className="flex px-10 gap-10">
						<li>
							<ScrollLink
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={scrollToTop}
								href="#"
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
								Contact
							</ScrollLink>
						</li>

						<li>
							<Link
								href="/login"
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
								Login
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center justify-between p-10">
					<div className="w-1/2">
						<h1
							className="py-2 font-Lato"
							style={{
								color: "#F5F5F5",
								fontWeight: 900,
								textTransform: "uppercase",
								fontSize: "clamp(2rem, 6vw, 4rem)",
								lineHeight: "0.85em",
								textAlign: "center",
								textShadow:
									"3px 1px 1px #181823, 2px 2px 1px #165bfb, 4px 2px 1px #181823, 3px 3px 1px #165bfb, 5px 3px 1px #181823, 4px 4px 1px #165bfb, 6px 4px 1px #181823, 5px 5px 1px #165bfb, 7px 5px 1px #181823, 6px 6px 1px #165bfb, 8px 6px 1px #181823, 7px 7px 1px #165bfb, 9px 7px 1px #181823",
							}}
						>
							<span data-text="give an access to a lot of">
								give an access to a lot of recipes
							</span>
							<span data-text=". it 's not just an ordinary">
								. it &apos;s not just an ordinary recipe
							</span>
							<span data-text=". it's sophisticated">
								. it&apos;s sophisticated
							</span>
						</h1>

						<p className="py-5 text-justify font-Lato font-bold italic">
							&quot;Welcome to our Recipes Blog! Discover a world of culinary
							excellence with our collection of professional-grade recipes. Join
							us to explore a diverse range of dishes, from appetizers to
							desserts, meticulously crafted by industry experts. Sign up today
							to unlock exclusive content and personalized recommendations
							tailored to your taste. Connect with a community of passionate
							food enthusiasts, share your own recipes, and learn from
							others.&quot;
						</p>
						<Link
							href="/register"
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
								width: "fit-content",
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
							Register Here!
						</Link>
					</div>
					<div className="flex items-center w-1/2">
						<div className="justify-center">
							<Image
								src="https://i.imgur.com/1s5dbPv.png"
								alt="Home"
								width={1000}
								height={1000}
							/>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
