import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Contentimage from "../../public/home-img.png";

interface NavbarProps {
	logo: StaticImageData;
}

const Navbar = ({ logo }: NavbarProps) => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="bg-white p-10">
			<nav className="bg-yellow-200 h-screen rounded-xl">
				<div className="flex items-center justify-between">
					<div>
						<Image src={logo} alt="Logo" width={200} height={200} />
					</div>
					<ul className="flex px-10 gap-10">
						<li>
							<ScrollLink
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={scrollToTop}
								className="cursor-pointer"
							>
								About
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={scrollToTop}
								className="cursor-pointer"
							>
								Contact
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								to="login"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={scrollToTop}
							>
								Login
							</ScrollLink>
						</li>
					</ul>
				</div>
				<div className="flex items-center justify-between">
					<div>
						<h1>
							Access to a lot of recipes, it &apos; s not just an ordinary.
							It&apos;s sophisticated
						</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy
							text ever since the 1500s, when an unknown printer took a galley
							of type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<div>
						<Image src={Contentimage} alt="Home" width={500} height={500} />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
