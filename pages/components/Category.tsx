export default function CategoryRecipe() {
	const urls = [
		"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/03140502/hero3-1587x900.jpg",
		"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/03113421/274736630_758930461734311_4153899114601341907_n-448x560.jpg?tr=w-1000",
		"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/03114128/43560101_263085774392230_9024305128529224908_n-448x560.jpg?tr=w-1000",
		"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/03114541/240725828_1449890452050815_1043390765394799824_n-559x560.jpg?tr=w-1000",
		"https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/03/03115612/210184297_491345631946798_281160842865910469_n-562x560.jpg?tr=w-1000",
	];

	return (
		<div>
			<div className="mt-24 flex flex-row items-center font-lato text-lg">
				<ul className="w-fit">
					<li className="w-4 h-4 bg-black rounded-full"></li>
				</ul>
				<span className="text-black ml-2">Western</span>
			</div>
			<div className="flex flex-col gap-4">
				{urls.map((url) => {
					const imgURL = `linear-gradient(rgba(236, 236, 236, 0.6), rgba(236, 236, 236, 0.6)), url('${url}');`;
					return (
						<div
							className="rounded-xl text-black flex font-bold text-2xl"
							key={url}
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
							<p className="w-fit m-auto">ABCD</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
