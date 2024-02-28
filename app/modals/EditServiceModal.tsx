"use client";

import React, { useEffect, useRef } from "react";
import EditServiceForm from "../components/serviceForm/EditServiceForm";

interface ServiceData {
	_id: string;
	platform: string;
	type: string;
	payment: number;
	startDate: string;
	dueDate: string;
}

interface EditServiceModalProps {
	onClose: () => void;
	service: ServiceData | null;
	onUpdate: () => void;
}

const EditServiceModal: React.FC<EditServiceModalProps> = ({
	onClose,
	service,
	onUpdate,
}: EditServiceModalProps) => {
	const modalRef = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClose, handleClickOutside]);

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
							onClose={onClose}
							onUpdate={onUpdate}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default EditServiceModal;
