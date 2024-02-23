import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddServiceModal from "../modals/AddServiceModal";

const AddServiceButton = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div className="flex justify-end">
			<div
				className="text-right bg-[#181818] p-5 rounded-[5px] cursor-pointer transition duration-300 hover:bg-opacity-40"
				onClick={openModal}
			>
				<FaPlus className="text-white text-lg" />
			</div>

			{/* Render the modal conditionally */}
			{isModalOpen && <AddServiceModal onClose={closeModal} />}
		</div>
	);
};

export default AddServiceButton;
