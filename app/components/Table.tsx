import React from "react";

interface TableProps {
	platform: string;
	type: string;
	payment: number;
	startDate: string;
	dueDate: string;
	className: string;
	edit: React.ReactNode;
	del: React.ReactNode;
	activity: React.ReactNode;
}

const Table: React.FC<TableProps> = ({
	platform,
	type,
	payment,
	startDate,
	dueDate,
	className,
	edit,
	del,
	activity,
}) => {
	return (
		<div className={className}>
			<div className="mr-5">
				<input
					id=""
					type="checkbox"
					value=""
					name="bordered-checkbox"
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
				/>
			</div>
			<div style={{ flex: 1 }}>
				<p>{platform}</p>
			</div>
			<div style={{ flex: 1 }}>
				<p>{type}</p>
			</div>
			<div style={{ flex: 1 }}>
				<p>{payment}</p>
			</div>
			<div style={{ flex: 1 }}>
				<p>{startDate}</p>
			</div>
			<div style={{ flex: 1 }}>
				<p>{dueDate}</p>
			</div>
			<div style={{ flex: 1 }}>
				<p>{edit}</p>
			</div>
			<div style={{ flex: 1 }}>
				<p>{del}</p>
			</div>
			<div style={{ flex: 1 }}>
				<p>{activity}</p>
			</div>
		</div>
	);
};

export default Table;
