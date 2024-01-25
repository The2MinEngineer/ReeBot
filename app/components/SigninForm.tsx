"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";
import { signIn } from "next-auth/react";

interface FormData {
	fullname: string;
	email: string;
	telephone: string;
	password: string;
}

const SigninForm = () => {
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
				// Successfully created user, now sign them in
				await signIn("credentials", {
					email: formData.email,
					password: formData.password,
					callbackUrl: "/newpage",
				});

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
					label="Email"
					type="email"
					name="email"
					value={formData.email}
					placeholder="Enter your email"
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
					<button type="submit">Sign in</button>
				</div>
			</form>
		</>
	);
};

export default SigninForm;
