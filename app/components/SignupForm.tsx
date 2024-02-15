"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupForm = () => {
	const router = useRouter();
	const [info, setInfo] = useState({
		fullname: "",
		email: "",
		telephone: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [pending, setPending] = useState(false);
	const handleChange = (e: any) => {
		setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!info.fullname || !info.email || !info.telephone || !info.password) {
			setError("Please fill in all fields");
		}
		try {
			setPending(true);
			const res = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(info),
			});
			if (res.ok) {
				setPending(false);
				const form = e.target;
				form.reset();
				router.push("/signin");
			} else {
				const errorData = await res.json();
				setError(errorData.message);
				setPending(false);
			}
		} catch (err) {
			setPending(false);
			setError("something went wrong");
		}
	};

	return (
		<>
			<form
				className="space-y-4 md:space-y-6"
				onSubmit={handleSubmit}
				method="post"
			>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Full Name
					</label>
					<input
						type="text"
						name="fullname"
						id="fullname"
						placeholder="Enter your name"
						value={info.fullname}
						onChange={(e: any) => handleChange(e)}
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
						value={info.email}
						onChange={(e: any) => handleChange(e)}
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
						value={info.telephone}
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
					<button type="submit">Sign up</button>
				</div>

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
