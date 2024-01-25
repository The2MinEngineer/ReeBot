"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";

interface FormData {
	fullname: string;
	email: string;
	telephone: string;
	password: string;
}

const SignupForm = () => {
	const router = useRouter();
	const [formData, setFormData] = useState<FormData>({
		fullname: "",
		email: "",
		telephone: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage("");

		try {
			const res = await fetch("/api/users", {
				method: "POST",
				body: JSON.stringify({ formData }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (res.ok) {
				// Redirect to /newpage
				router.push("/newpage");
			} else {
				const response = await res.json();
				setErrorMessage(response.message);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			setErrorMessage("An error occurred during sign-up.");
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				method="post"
			>
				<FormInput
					label="Full Name"
					type="text"
					name="fullname"
					value={formData.fullname}
					placeholder="Enter your name"
					onChange={handleChange}
				/>
				<FormInput
					label="Email"
					type="email"
					name="email"
					value={formData.email}
					placeholder="Enter your email"
					onChange={handleChange}
				/>
				<FormInput
					label="Telephone"
					type="text"
					name="telephone"
					value={formData.telephone}
					placeholder="e.g. 08179179519"
					onChange={handleChange}
				/>
				<FormInput
					label="Password"
					type="password"
					name="password"
					value={formData.password}
					placeholder="Enter your password"
					onChange={handleChange}
				/>
				{errorMessage && <div>{errorMessage}</div>}
				<div className="bg-[#287DF9] rounded-[10px] text-white text-sm text-center p-5 w-full max-w-[360px] cursor-pointer font-normal">
					<button type="submit">Sign up</button>
				</div>
			</form>
		</>
	);
};

export default SignupForm;
