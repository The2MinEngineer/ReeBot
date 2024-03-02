import React from "react";
import ProfileTitleAndLabel from "./ProfileTitleAndLabel";
import EditButton from "./EditButton";

const PersonalInformation = () => {
	const info1 = [
		{ title: "First Name", label: "Isaac" },
		{ title: "Email Address", label: "theisaaceze@gmail.com" },
		{ title: "Gender", label: "Male" },
	];

	const info2 = [
		{ title: "Last Name", label: "Eze" },
		{ title: "Telephone", label: "+234 (0) 817 9179 519" },
		{ title: "Plan", label: "Free Trial" },
	];

	return (
		<div>
			<div className="mt-10 flex justify-between">
				<h2 className="font-bold text-lg text-[#181818] mb-6">
					Personal Information
				</h2>
				<div>
					<EditButton />
				</div>
			</div>
			<div className="flex">
				<div className="w-1/3">
					{info1.map((info, index) => (
						<div
							key={index}
							className="mb-6"
						>
							<ProfileTitleAndLabel
								title={info.title}
								label={info.label}
							/>
						</div>
					))}
				</div>

				<div className="w-2/3">
					{info2.map((info, index) => (
						<div
							key={index}
							className="mb-6"
						>
							<ProfileTitleAndLabel
								title={info.title}
								label={info.label}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PersonalInformation;
