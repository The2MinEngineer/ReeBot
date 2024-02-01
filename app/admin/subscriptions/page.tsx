import React from "react";
import Navbar from "@/app/components/Navbar";
import { MdCancel } from "react-icons/md";
import { RiDeleteBin2Fill, RiEditBoxFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
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
				<div className="flex justify-end items-center gap-12 mr-5 text-lg text-[#181818] font-medium">
					{subData.map((item, index) => (
						<p
							key={index}
							className=""
						>
							{item}
						</p>
					))}
				</div>
			</div>

			<div className="mx-5">
				<div className="w-full py-[18px] px-5 mb-5 rounded-[5px] bg-white mt-10 flex items-center">
					<input
						type="checkbox"
						className="w-4 h-4 rounded-[3px] border border-[#181818] bg-white mr-[10px]"
					/>
					<input
						type="text"
						className="rounded-[5px] mr-10 p-[10px] text-lg font-medium text-[#181818] border border-[#181818] max-w-[151px] focus:outline-none bg-white"
					/>
					<input
						type="text"
						className="rounded-[5px] mr-10 p-[10px] text-lg font-medium text-[#181818] max-w-[180px] focus:outline-none bg-[#F3F4F3]"
					/>
					<input
						type="text"
						placeholder="₦ Amount/month"
						className="placeholder:text-[#181818] rounded-[5px] mr-10 p-[10px] text-lg max-w-[180px] font-medium text-[#181818] focus:outline-none bg-[#F3F4F3]"
					/>
					<input
						type="text"
						placeholder="DD/YY"
						className="placeholder:text-[#181818] rounded-[5px] mr-10 py-[10px] px-[18px] text-lg font-medium text-[#181818] focus:outline-none bg-[#F3F4F3]"
					/>
					<input
						type="text"
						placeholder="DD/YY"
						className="placeholder:text-[#181818] rounded-[5px] mr-10 py-[10px] px-[18px] text-lg font-medium text-[#181818] focus:outline-none bg-[#F3F4F3]"
					/>
					<RiEditBoxFill className="text-lg text-[#181818] text-opacity-70" />
					<MdDeleteForever className="text-lg text-[#181818] text-opacity-70" />
					<FaToggleOn className="text-lg text-[#181818] text-opacity-70" />
				</div>
			</div>
		</div>
	);
};

export default Subscriptions;
