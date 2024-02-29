import React, { useEffect, useState } from "react";
import EditServiceModal from "../modals/EditServiceModal";
import { RiEditBoxFill } from "react-icons/ri";

const EditServiceButton = ({ id, onUpdate }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [service, setService] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/service/${id}`);
				const result = await response.json();
				setService(result);
			} catch (error) {
				console.error("Error fetching service by id:", error);
			}
		};

		fetchData();
	}, [id]);

	const openModal = () => {
		console.log(service?.service?.platform);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div
				className="cursor-pointer"
				onClick={openModal}
			>
				<RiEditBoxFill className="text-lg text-[#181818] text-opacity-70" />
			</div>

			{isModalOpen && (
				<EditServiceModal
					onClose={closeModal}
					service={service?.service}
					onUpdate={onUpdate}
				/>
			)}
		</>
	);
};

export default EditServiceButton;
