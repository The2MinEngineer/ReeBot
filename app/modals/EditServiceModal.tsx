"use client";

import React, { useEffect, useRef, useState } from "react";
import EditServiceForm from "../components/serviceForm/EditServiceForm";

const EditServiceModal = ({ onClose, serviceId, onUpdate }: any) => {
	const modalRef = useRef(null);
	const [service, setService] = useState(null);

	const handleClickOutside = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	const fetchServiceData = async () => {
		try {
			const response = await fetch(`/api/services/${serviceId}`);
			const result = await response.json();
			const data = result.data || null;
			console.log("data:", data);

			setService(data);
		} catch (error) {
			console.error("Error fetching service data:", error);
		}
	};

	useEffect(() => {
		if (serviceId) {
			fetchServiceData();
		}
	}, [serviceId]);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 z-50 overflow-y-auto">
			<div
				ref={modalRef}
				className="mx-auto max-w-4xl p-8 bg-white rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<div className="my-10 mx-5">
					<h1 className="text-[#181818] font-bold text-2xl mb-10">
						Edit Service
					</h1>

					{service && (
						<EditServiceForm
							service={service}
							onUpdate={onUpdate}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default EditServiceModal;
