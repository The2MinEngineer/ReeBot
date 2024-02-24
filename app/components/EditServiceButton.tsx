import React, { useState } from "react";
import EditServiceModal from "../modals/EditServiceModal";
import { RiEditBoxFill } from "react-icons/ri";

const EditServiceButton = ({ fetchServices }: any) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
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
					onUpdate={fetchServices}
				/>
			)}
		</>
	);
};

export default EditServiceButton;
