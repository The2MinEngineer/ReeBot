import React from "react";
import Navbar from "@/app/components/Navbar";
import { MdCancel } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaToggleOn } from "react-icons/fa";
import TableHeader from "@/app/components/TableHeader";

const Subscriptions = () => {
	const tableData = [
		{ checkbox: true, label: "Platform" },
		{ label: "Type" },
		{ label: "Payment" },
		{ label: "Date" },
		{ label: "Manage" },
	];
	const subData = ["Start", "Due", "Edit", "Delete", "Activity"];

	return (
		<div>
			<Navbar />

			<div className="px-5 pt-10">
				<div className="flex justify-between items-center">
					<h2 className="text-[#181818] text-2xl font-bold">Subscriptions</h2>
					<div className="flex justify-end items-center gap-5 mr-5">
						<MdCancel className="text-[#181818] text-lg" />
						<RiDeleteBin2Fill className="text-[#181818] text-opacity-70 text-lg" />
						<FaToggleOn className="text-[#181818] text-opacity-70 text-lg" />
					</div>
				</div>
				<TableHeader data={tableData} />
				<div className="flex justify-end items-center text-lg text-[#181818] font-medium">
					{subData.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Subscriptions;
