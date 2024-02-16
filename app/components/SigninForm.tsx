"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const SigninForm = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const loginUser = async (e: any) => {
		try {
			e.preventDefault();
			console.log("Form submitted");
			// signIn returns a promise, so use await
			const response = await signIn("credentials", {
				...data,
				redirect: false,
			});

			// Check if the response contains an error
			if (response?.error) {
				console.error(response.error);
			} else {
				// Use await here to wait for the sign-in process to complete
				await router.push("/dashboard");
			}
		} catch (error) {
			console.error("Error during login:", error);
			// Handle error as needed
		}
	};

	useEffect(() => {
		if (session) {
			router.push("/dashboard");
		}
	}, [session, router]);

	return (
		<>
			<form
				className="space-y-4 md:space-y-6"
				onSubmit={loginUser}
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
						value={data.email}
						onChange={(e: any) => setData({ ...data, email: e.target.value })}
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
						onChange={(e: any) =>
							setData({ ...data, password: e.target.value })
						}
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>

				<button
					type="submit"
					className="w-full text-white bg-[#287DF9] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					Sign in
				</button>
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
