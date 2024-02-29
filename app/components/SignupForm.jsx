"use client";

import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
	const router = useRouter();
	const [data, setData] = useState({
		fullname: "",
		email: "",
		telephone: "",
		password: "",
	});

	const registerUser = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ data }),
			});

			const userInfo = await response.json();
			console.log(userInfo);
			router.push("/signin");
		} catch (error) {
			console.error("Error during registration:", error);
		}
	};

	return (
		<>
			<form
				className="space-y-4 md:space-y-6"
				onSubmit={registerUser}
			>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Full Name
					</label>
					<input
						type="text"
						name="fullname"
						id="fullname"
						placeholder="Enter your fullname"
						value={data.fullname}
						onChange={(e) => setData({ ...data, fullname: e.target.value })}
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>

				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email"
						value={data.email}
						onChange={(e) => setData({ ...data, email: e.target.value })}
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>

				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Telephone
					</label>
					<input
						type="number"
						name="telephone"
						id="telephone"
						placeholder="Enter your phone number"
						value={data.telephone}
						onChange={(e) => setData({ ...data, telephone: e.target.value })}
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
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.target.value })}
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full text-white bg-[#287DF9] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					Sign up
				</button>

				<p className="text-[#181811] text-opacity-40 text-sm mt-2">
					Already have an account?{" "}
					<span className="text-[#287DF9] text-opacity-100 hover:cursor-pointer hover:underline">
						<Link href="/signin">Signin</Link>
					</span>
				</p>
			</form>
		</>
	);
};

export default SignupForm;
