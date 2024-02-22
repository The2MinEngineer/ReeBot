import React, { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddServiceForm from "../components/serviceForm/AddServiceForm";

const ServiceModal = ({ onClose, onSubmit }: any) => {
	const { data: session } = useSession();
	const router = useRouter();
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
	}, []);

	const handleFormSubmit = async (formData: any) => {
		try {
			const requestBody = {
				...formData,
				userId: session?.user?.id,
			};

			const res = await fetch("/api/service/new", {
				method: "POST",
				body: JSON.stringify(requestBody),
			});

			if (res.ok) {
				onClose();
				router.push("/subscriptions");
			} else {
				throw new Error("Failed to create a service.");
			}
		} catch (error) {
			console.log(error);
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

					<AddServiceForm onSubmit={handleFormSubmit} />
				</div>
			</div>
		</div>
	);
};

export default ServiceModal;
