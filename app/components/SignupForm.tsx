"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";

const SignupForm = () => {
	const router = useRouter();
	const [info, setInfo] = useState({
		fullname: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [pending, setPending] = useState(false);
	const handleChange = (e: any) => {
		setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!info.fullname || !info.email || !info.password) {
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
				router.push("/auth/signin");
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
				onSubmit={handleSubmit}
				method="post"
			>
				<FormInput
					label="Full Name"
					type="text"
					name="fullname"
					value={info.fullname}
					placeholder="Enter your name"
					onChange={(e: any) => handleChange(e)}
				/>
				<FormInput
					label="Email"
					type="email"
					name="email"
					value={info.email}
					placeholder="Enter your email"
					onChange={(e: any) => handleChange(e)}
				/>
				<FormInput
					label="Password"
					type="password"
					name="password"
					value={info.password}
					placeholder="Enter your password"
					onChange={(e: any) => handleChange(e)}
				/>
				{error && <span className="text-[red]">{error}</span>}
				<div className="bg-[#287DF9] rounded-[10px] text-white text-sm text-center p-5 w-full max-w-[360px] cursor-pointer font-normal">
					<button type="submit">Sign up</button>
				</div>
			</form>
		</>
	);
};

export default SignupForm;
