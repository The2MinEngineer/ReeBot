import React from "react";

const TableHeader = ({ data }: { data: any }) => {
	return (
		<div className="w-full py-[18px] px-5 mb-5 rounded-[5px] bg-[#181818] mt-10 flex items-center">
			{data.map((column: any, index: any) => (
				<p
					key={index}
					className="text-white text-lg font-semibold"
				>
					{column.checkbox && (
						<span>
							<input
								type="checkbox"
								value=""
								className="mr-5 rounded text-[#287DF9] border border-white w-4 h-4 bg-[#181818] focus:ring-[#287DF9] outline-none focus:outline-none"
							/>
						</span>
					)}
					{column.label}
					{index !== data.length - 1 && (
						<span className="ml-48">
							{" "}
							{/* Adjust the margin as needed */}
							{/* Add additional spacing between labels if needed */}
						</span>
					)}
				</p>
			))}
		</div>
	);
};

export default TableHeader;
