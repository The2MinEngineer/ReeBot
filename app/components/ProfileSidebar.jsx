import React from "react";

const ProfileSidebar = () => {
	const navItems = [
		"Profile",
		"Pause/Resume All",
		"Delete all messages",
		"Mark all as read",
		"Change Plan",
	];

	return (
		<>
			<div>
				{navItems.map((nav, index) => (
					<p
						key={index}
						className="text-[#181818] text-opacity-70 text-sm font-medium mb-6 cursor-pointer"
					>
						{nav}
					</p>
				))}
			</div>
			<p className="text-sm font-medium mt-10 text-[#FB275D] cursor-pointer">
				Delete Account
			</p>
		</>
	);
};

export default ProfileSidebar;
