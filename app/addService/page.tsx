"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "@/app/components/Navbar";

const AddService = () => {
	const [platform, setPlatform] = useState("");
	const [type, setType] = useState("");
	const [payment, setPayment] = useState("");
	const [startDate, setStartDate] = useState("");
	const [dueDate, setDueDate] = useState("");

	const {data: session, status} = useSession()
	const isAuthenticated = status === "authenticated";

	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!platform || !type || !payment) {
			alert("Please input all fields.");
			return;
		}

		// Log the request body
		const requestBody = {
			platform,
			type,
			startDate,
			dueDate,
			payment,
			userId: isAuthenticated ? session?.user?.id : undefined,
		};

		try {
			const res = await fetch("/api/service/new", {
				method: "POST",
				body: JSON.stringify(requestBody),
			});

			if (res.ok) {
				router.push("/subscriptions");
			} else {
				throw new Error("Failed to create a service.");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="my-10 mx-5">
				<h1 className="text-[#181818] font-bold text-2xl mb-10">
					Add New Service
				</h1>

				<form
					className="flex flex-col gap-3"
					onSubmit={handleSubmit}
				>
					<input
						onChange={(e) => setPlatform(e.target.value)}
						value={platform}
						type="text"
						className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
						placeholder="Platform"
					/>

					<input
						onChange={(e) => setType(e.target.value)}
						value={type}
						type="text"
						className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
						placeholder="Type"
					/>

					<input
						onChange={(e) => setPayment(e.target.value)}
						value={payment}
						type="number"
						className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
						placeholder="Payment"
					/>

					<input
						onChange={(e) => setStartDate(e.target.value)}
						value={startDate}
						type="date"
						className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
						placeholder="Start Date"
					/>

					<input
						onChange={(e) => setDueDate(e.target.value)}
						value={dueDate}
						type="date"
						className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
						placeholder="Due Date"
					/>

					<button
						type="submit"
						className="w-full max-w-xs bg-[#287DF9] text-white rounded-lg py-3"
					>
						Add Service
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddService;
