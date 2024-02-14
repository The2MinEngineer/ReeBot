import AddServiceButton from "./AddServiceButton";

import { RiEditBoxFill } from "react-icons/ri";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

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
			<div className="relative overflow-x-auto sm:rounded-lg">
				<table className="w-full">
					<thead className="text-lg text-white bg-[#181818] font-semibold">
						<tr className="space-x-4">
							<th
								scope="col"
								className="p-4 text-left"
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-none border-white rounded focus:ring-white focus:ring-1"
									/>
									<label className="sr-only">checkbox</label>
								</div>
							</th>
							<th className="py-5 text-left">Platform</th>
							<th className="py-5 text-left">Type</th>
							<th className="py-5 text-left">Payment</th>
							<th className="py-5 text-left">Start</th>
							<th className="py-5 text-left">Due</th>
							<th className="py-5 text-left">Edit</th>
							<th className="py-5 text-left">Delete</th>
							<th className="py-5 text-left">Activity</th>
						</tr>
					</thead>

					<tbody className="space-y-2 bg-white mt-[10px] sm:rounded-[5px]">
						{services.map((rs: any) => (
							<tr
								className="hover space-x-4"
								key={rs._id}
							>
								<td className="p-4 text-left">
									<label>
										<input
											type="checkbox"
											className="checkbox"
										/>
									</label>
								</td>
								<td className="py-5 text-left">{rs.platform}</td>
								<td className="py-5 text-left">{rs.type}</td>
								<td className="py-5 text-left">N{rs.payment}</td>
								<td className="py-5 text-left">{rs.startDate}</td>
								<td className="py-5 text-left">{rs.dueDate}</td>
								<td className="py-5 text-center">
									<Link href={`/admin/editService/${rs._id}`}>
										<RiEditBoxFill className="text-lg text-[#181818] text-opacity-70" />
									</Link>
								</td>
								<td className="py-5 text-center">
									<RemoveBtn id={rs._id} />
								</td>
								<td className="py-5 text-center">
									<ToggleButton />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="w-full mt-5 space-y-2">
				<div>
					<AddServiceButton />
				</div>
			</div>
		</>
	);
};

export default ServiceList;
