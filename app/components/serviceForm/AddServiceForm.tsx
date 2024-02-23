import React, { useState } from "react";

const AddServiceForm = ({ onSubmit }: any) => {
	const [platform, setPlatform] = useState("");
	const [type, setType] = useState("");
	const [payment, setPayment] = useState("");
	const [startDate, setStartDate] = useState("");
	const [dueDate, setDueDate] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ platform, type, payment, startDate, dueDate });
	};

	return (
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
	);
};

export default AddServiceForm;
