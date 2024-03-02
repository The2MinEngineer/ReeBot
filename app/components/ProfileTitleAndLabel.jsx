import React from "react";

const ProfileTitleAndLabel = ({ title, label }) => {
	return (
		<div>
			<p className="font-medium text-sm text-[#181818] text-opacity-70 mb-1">
				{title}
			</p>
			<p className="font-semibold text-sm text-[#181818]">{label}</p>
		</div>
	);
};

export default ProfileTitleAndLabel;
