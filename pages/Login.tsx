import React, { useEffect } from "react";
import Image from "next/image";

const Login = () => {
	const handleLogin = () => {
		// Handle login logic here
	};

	const handleRegister = () => {
		// Handle register logic here
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-yellow-200 text-black">
			<div className="flex bg-white rounded-xl shadow items-center justify-center">
				<div className="w-1/2 px-8 py-12">
					<Image
						src="/recipeslogo.png"
						alt="Logo-login"
						width={350}
						height={350}
						className="h-full object-cover rounded-tr-xl rounded-br-xl m-auto"
					/>
					<h1 className="text-2xl font-bold mb-4 text-center">
						Welcome to Recipes!
					</h1>
					<form>
						<div className="mb-4">
							<label className="block mb-2">Email</label>
							<input
								className="w-full border border-gray-300 p-2 rounded-xl"
								type="email"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2">Password</label>
							<input
								className="w-full border border-gray-300 p-2 rounded-xl"
								type="password"
							/>
						</div>
						<button
							className="bg-yellow-200 hover:bg-yellow-300 text-black py-2 px-4 rounded-xl w-full shadow-xl font-bold"
							type="button"
							onClick={handleLogin}
						>
							Login
						</button>
					</form>
					<p className="mt-4 text-sm">
						Don&apos;t have an account?{" "}
						<a
							href="#"
							onClick={handleRegister}
							className="text-blue-500 hover:underline"
						>
							Register here
						</a>
					</p>
				</div>
				<div className="w-1/2 border-l">
					<Image
						src="/loginpage-img.jpg"
						alt="Login"
						width={500}
						height={500}
						objectFit="fill"
						className="w-full h-full object-cover rounded-tr-xl rounded-br-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
