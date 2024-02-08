import React from "react";

const ToggleButton = ({
	value,
	onChange,
}: {
	value: boolean;
	onChange?: () => void;
}) => {
	const toggleClass = "transform translate-x-6";
	return (
		<div
			className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
				value === true ? "bg-blue-200" : "bg-gray-300"
			} rounded-full p-1 cursor-pointer`}
			onClick={onChange}
		>
			{/* switch options */}
			<div
				className={`
            ${value === true ? "bg-blue-600" : "bg-white"}
            md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transition transform${
							value ? toggleClass : null
						}
            `}
			></div>
		</div>
	);
};

export default ToggleButton;
