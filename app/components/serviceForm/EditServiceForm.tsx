"use client";

import React, { useState } from "react";

interface EditServiceFormProps {
	service: {
		_id: string;
		platform: string;
		type: string;
		payment: number;
		startDate: string;
		dueDate: string;
	} | null;
	onClose: () => void;
	onUpdate: () => void;
}

const EditServiceForm: React.FC<EditServiceFormProps> = ({
	service,
	onClose,
	onUpdate,
}) => {
	const [newPlatform, setNewPlatform] = useState(service?.platform || "");
	const [newType, setNewType] = useState(service?.type || "");
	const [newPayment, setNewPayment] = useState(service?.payment || 0);
	const [newStartDate, setNewStartDate] = useState(() => {
		return service?.startDate
			? new Date(service.startDate).toISOString().split("T")[0]
			: "";
	});
	const [newDueDate, setNewDueDate] = useState(() => {
		return service?.dueDate
			? new Date(service.dueDate).toISOString().split("T")[0]
			: "";
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!service) {
			console.error("Service data is undefined or null.");
			return;
		}

		const requestBody = {
			newPlatform: newPlatform,
			newType: newType,
			newPayment: newPayment,
			newStartDate: newStartDate,
			newDueDate: newDueDate,
		};

		try {
			const response = await fetch(`/api/service/${service?._id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			});

			if (response.ok) {
				console.log("successful", requestBody);
				onClose();
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
				onChange={(e) => setNewPayment(Number(e.target.value))}
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
