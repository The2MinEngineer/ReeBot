"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import FormInput from "./FormInput";

const SigninForm = () => {
	const router = useRouter();
	const [info, setInfo] = useState({
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
		if (!info.email || !info.password) {
			setError("Please fill in all fields");
		}
		try {
			setPending(true);
			const res: any = await signIn("credentials", {
				email: info.email,
				password: info.password,
				redirect: false,
			});

			if (res.error) {
				setError("Invalid Credentials.");
				setPending(false);
				return;
			}
			setPending(false);
			const form = e.target;
			form.reset();
			router.replace("/dashboard");
		} catch (err) {
			setPending(false);
			setError("something went wrong");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
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
					<button type="submit">Sign in</button>
				</div>
			</form>
		</>
	);
};

export default SigninForm;
