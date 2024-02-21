import React from "react";

const ToggleButton = ({
	value,
	onChange,
}: {
	value?: boolean;
	onChange?: () => void;
}) => {
	return (
		<div className="form-control">
			<label className="cursor-pointer label">
				<input
					type="checkbox"
					className="toggle toggle-primary bg-{#287DF9}"
					onChange={() => {}}
					// checked
				/>
			</label>
		</div>
	);
};

export default ToggleButton;
