"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditServiceForm = ({
	id,
	platform,
	type,
	payment,
	startDate,
	dueDate,
}: any) => {
	const router = useRouter();

	const formatDate = (dateString: any) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = `0${date.getMonth() + 1}`.slice(-2);
		const day = `0${date.getDate()}`.slice(-2);
		return `${year}-${month}-${day}`;
	};

	const [newPlatform, setNewPlatform] = useState(platform);
	const [newType, setNewType] = useState(type);
	const [newPayment, setNewPayment] = useState(payment);
	const [newStartDate, setNewStartDate] = useState(formatDate(startDate));
	const [newDueDate, setNewDueDate] = useState(formatDate(dueDate));

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const res = await fetch(`http://localhost:3000/api/service/${id}`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					newPlatform,
					newType,
					newPayment,
					newStartDate,
					newDueDate,
				}),
			});

			if (!res.ok) {
				throw new Error("Failed to update service.");
			}
			router.refresh();
			router.push("/admin/subscriptions");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<form
				className="flex flex-col gap-3"
				onSubmit={handleSubmit}
			>
				<input
					onChange={(e) => setNewPlatform(e.target.value)}
					value={newPlatform}
					type="text"
					className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				/>

				<input
					onChange={(e) => setNewType(e.target.value)}
					value={newType}
					type="text"
					className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				/>

				<input
					onChange={(e) => setNewPayment(e.target.value)}
					value={newPayment}
					type="number"
					className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				/>

				<input
					onChange={(e) => setNewStartDate(e.target.value)}
					value={newStartDate}
					type="date"
					className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				/>

				<input
					onChange={(e) => setNewDueDate(e.target.value)}
					value={newDueDate}
					type="date"
					className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
				/>

				<button
					type="submit"
					className="w-full max-w-xs bg-[#287DF9] text-white rounded-lg py-3"
				>
					Update Service
				</button>
			</form>
		</>
	);
};

export default EditServiceForm;
