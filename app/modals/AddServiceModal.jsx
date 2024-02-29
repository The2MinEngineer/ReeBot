import React, { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";

const AddServiceModal = ({ onClose, onUpdate }) => {
	const { data: session } = useSession();
	const modalRef = useRef(null);

	const handleClickOutside = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);

	const handleFormSubmit = async (formData) => {
		try {
			const userId = session?.user?.id || null;
			const requestBody = {
				...formData,
				userId: userId,
			};

			const res = await fetch("/api/service/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestBody),
			});

			if (res.ok) {
				onClose();
				onUpdate();
			} else {
				throw new Error("Failed to create a service.");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 z-50 overflow-y-auto">
			<div
				ref={modalRef}
				className="mx-auto max-w-4xl p-8 bg-white rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<div className="my-10 mx-5">
					<h1 className="text-[#181818] font-bold text-2xl mb-10">
						Add New Service
					</h1>

					<form
						className="flex flex-col gap-3"
						onSubmit={(e) => {
							e.preventDefault();
							const formData = {
								platform: e.currentTarget.platform.value,
								type: e.currentTarget.type.value,
								payment: e.currentTarget.payment.value,
								startDate: e.currentTarget.startDate.value,
								dueDate: e.currentTarget.dueDate.value,
							};
							handleFormSubmit(formData);
						}}
					>
						<input
							type="text"
							name="platform"
							className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
							placeholder="Platform"
						/>

						<input
							type="text"
							name="type"
							className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
							placeholder="Type"
						/>

						<input
							type="number"
							name="payment"
							className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
							placeholder="Payment"
						/>

						<input
							type="date"
							name="startDate"
							className="input border-[#181818] focus:border-[#181818] focus-within:border-[#181818] outline:border-[#181818] w-full max-w-xs"
							placeholder="Start Date"
						/>

						<input
							type="date"
							name="dueDate"
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
		</div>
	);
};

export default AddServiceModal;
