import AddServiceButton from "./AddServiceButton";

import { RiEditBoxFill, RiDeleteBin7Fill } from "react-icons/ri";
import ToggleButton from "./ToggleButton";

const getServices = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/service", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch services.");
		}

		return res.json();
	} catch (error) {
		console.log("Error loading services: ", error);
	}
};

const ServiceList = async () => {
	const { services } = await getServices();

	return (
		<>
			<table className="table">
				<thead className="text-lg text-[#181818] font-semibold">
					<tr>
						<th>
							<label>
								<input
									type="checkbox"
									className="checkbox"
								/>
							</label>
						</th>
						<th>Platform</th>
						<th>Type</th>
						<th>Payment</th>
						<th>Date</th>
						<th>Manage</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th></th>
						<td></td>
						<td></td>
						<td></td>
						<div className="flex items-center gap-3">
							<td>Start</td>
							<td>Due</td>
						</div>
						<td>Edit</td>
						<td>Delete</td>
						<td>Activity</td>
					</tr>
					{services.map((rs: any) => (
						<tr
							className="hover"
							key={rs._id}
						>
							<th>
								<label>
									<input
										type="checkbox"
										className="checkbox"
									/>
								</label>
							</th>
							<td>{rs.platform}</td>
							<td>{rs.type}</td>
							<td>N{rs.payment}</td>
							<div className="flex items-center gap-3">
								<td>{rs.startDate}</td>
								<td>{rs.dueDate}</td>
							</div>
							<td>
								<RiEditBoxFill />
							</td>
							<td>
								<RiDeleteBin7Fill />
							</td>
							<td>
								<ToggleButton />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="w-full">
				<div>
					<AddServiceButton />
				</div>
			</div>
		</>
	);
};

export default ServiceList;
