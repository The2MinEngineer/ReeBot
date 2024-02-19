"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import AddServiceButton from "./AddServiceButton";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

import { RiEditBoxFill } from "react-icons/ri";

const ServiceList = () => {
	const { data: session } = useSession();
	const [services, setServices] = useState([]);

	const fetchServices = async () => {
		try {
			const response = await fetch(`/api/users/${session?.user?.id}/services`);
			const result = await response.json();

			// Access the 'data' property
			const data = result.data || [];

			setServices(data);
		} catch (error) {
			console.error("Error fetching services:", error);
		}
	};

	useEffect(() => {
		if (session?.user?.id) {
			fetchServices();
		}
	}, [session?.user?.id]);

	console.log(services);

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
						{services.map((service: any) => (
							<tr
								className="hover space-x-4"
								key={service._id}
							>
								<td className="p-4 text-left">
									<label>
										<input
											type="checkbox"
											className="checkbox"
										/>
									</label>
								</td>
								<td className="py-5 text-left">{service.platform}</td>
								<td className="py-5 text-left">{service.type}</td>
								<td className="py-5 text-left">N{service.payment}</td>
								<td className="py-5 text-left">
									{new Date(service.startDate).toLocaleDateString()}
								</td>
								<td className="py-5 text-left">
									{new Date(service.dueDate).toLocaleDateString()}
								</td>
								<td className="py-5 text-center">
									<Link href={`/editService/${service._id}`}>
										<RiEditBoxFill className="text-lg text-[#181818] text-opacity-70" />
									</Link>
								</td>
								<td className="py-5 text-center">
									<RemoveBtn id={service._id} />
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
