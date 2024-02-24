"use client";

import React, { useEffect, useState } from "react";

const EditServiceForm = ({ service, onUpdate }: any) => {
	const [newPlatform, setNewPlatform] = useState("");
	const [newType, setNewType] = useState("");
	const [newPayment, setNewPayment] = useState("");
	const [newStartDate, setNewStartDate] = useState("");
	const [newDueDate, setNewDueDate] = useState("");

	useEffect(() => {
		if (service) {
			setNewPlatform(service.platform || "");
			setNewType(service.type || "");
			setNewPayment(service.payment || "");
			setNewStartDate(service.startDate || "");
			setNewDueDate(service.dueDate || "");
		}
	}, [service]);
	console.log(service);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/services/${service._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					platform: newPlatform,
					type: newType,
					payment: newPayment,
					startDate: newStartDate,
					dueDate: newDueDate,
				}),
			});

			if (response.ok) {
				const resultText = await response.text();
				console.log("Raw Response:", resultText);
				onUpdate();
			} else {
				console.error("Failed to update service");
			}
		} catch (error) {
			console.error("Error updating service:", error);
		}
	};

	return (
		<form
			className="flex flex-col gap-3"
			onSubmit={handleSubmit}
		>
			<input
				onChange={(e) => setNewPlatform(e.target.value)}
				value={newPlatform}
				type="text"
				className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				placeholder="Platform"
			/>

			<input
				onChange={(e) => setNewType(e.target.value)}
				value={newType}
				type="text"
				className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				placeholder="Type"
			/>

			<input
				onChange={(e) => setNewPayment(e.target.value)}
				value={newPayment}
				type="number"
				className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				placeholder="Payment"
			/>

			<input
				onChange={(e) => setNewStartDate(e.target.value)}
				value={newStartDate}
				type="date"
				className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				placeholder="Start Date"
			/>

			<input
				onChange={(e) => setNewDueDate(e.target.value)}
				value={newDueDate}
				type="date"
				className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				placeholder="Due Date"
			/>

			<button
				type="submit"
				className="w-full max-w-xs bg-[#287DF9] text-white rounded-lg py-3"
			>
				Update Service
			</button>
		</form>
	);
};

export default EditServiceForm;
