"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const SigninForm = () => {
	const router = useRouter();
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	// const [pending, setPending] = useState(false);
	const handleChange = (e: any) => {
		setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!info.email || !info.password) {
			setError("Please fill in all fields");
		}

		signIn("credentials", {
			...info,
			redirect: false,
		});
		router.push("/dashboard");

		// try {
		// 	setPending(true);
		// 	const res: any = await signIn("credentials", {
		// 		email: info.email,
		// 		password: info.password,
		// 		redirect: false,
		// 	});

		// 	if (res.error) {
		// 		setError("Invalid Credentials.");
		// 		setPending(false);
		// 		return;
		// 	}
		// 	setPending(false);
		// 	const form = e.target;
		// 	form.reset();
		// 	router.replace("/dashboard");
		// } catch (err) {
		// 	setPending(false);
		// 	setError("something went wrong");
		// }
	};

	return (
		<>
			<form
				className="space-y-4 md:space-y-6"
				onSubmit={handleSubmit}
			>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
						value={info.email}
						onChange={(e: any) => handleChange(e)}
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>

				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						value={info.password}
						onChange={(e: any) => handleChange(e)}
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				{error && <span className="text-[red]">{error}</span>}
				<div className="bg-[#287DF9] rounded-[10px] text-white text-sm text-center p-5 w-full max-w-[360px] cursor-pointer font-normal">
					<button type="submit">Sign in</button>
				</div>

				<p className="text-[#181811] text-opacity-40 text-sm mt-2">
					Don't have an account?{" "}
					<span className="text-[#287DF9] text-opacity-100 hover:cursor-pointer hover:underline">
						<Link href="/signup">Signup</Link>
					</span>
				</p>
			</form>
		</>
	);
};

export default SigninForm;
