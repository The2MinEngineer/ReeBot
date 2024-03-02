import React from "react";
import EditButton from "./EditButton";
import ProfileTitleAndLabel from "./ProfileTitleAndLabel";

const AddressInformation = () => {
	const info1 = [
		{ title: "Country", label: "Nigeria" },
		{ title: "City", label: "Ikoyi" },
	];

	const info2 = [
		{ title: "State", label: "Lagos" },
		{ title: "House", label: "Block 17A, Osbourne Estate" },
	];

	return (
		<div>
			<div className="mt-10 flex justify-between">
				<h2 className="font-bold text-lg text-[#181818] mb-6">Address</h2>
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

export default AddressInformation;
