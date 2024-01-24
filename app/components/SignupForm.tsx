"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface FormData {
	fullname: string;
	email: string;
	phone: string;
	password: string;
}

const SignupForm = () => {
	const router = useRouter();
	const [formData, setFormData] = useState<FormData>({
		fullname: "",
		email: "",
		phone: "",
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
		const res = await fetch("./api/users", {
			method: "POST",
			body: JSON.stringify({ formData }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			const response = await res.json();
			setErrorMessage(response.message);
		} else {
			await signIn("credentials", {
				email: formData.email,
				password: formData.password,
				callbackUrl: "/newpage", // Redirect to this page after successful authentication
			});
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				method="post"
			>
				<div>
					<label>
						Full Name:
						<input
							id="fullname"
							type="text"
							name="fullname"
							onChange={handleChange}
							required={true}
							value={formData.fullname}
						/>
					</label>
				</div>
				<div>
					<label>
						Email:
						<input
							id="email"
							type="email"
							name="email"
							onChange={handleChange}
							required={true}
							value={formData.email}
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							id="password"
							type="password"
							name="password"
							onChange={handleChange}
							required={true}
							value={formData.password}
						/>
					</label>
				</div>
				<div>
					<button
						type="submit"
						value="Create User"
					>
						Submit
					</button>
				</div>
			</form>
			{errorMessage && <div>{errorMessage}</div>}
		</>
	);
};

export default SignupForm;
