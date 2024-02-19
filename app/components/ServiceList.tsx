"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import AddServiceButton from "./AddServiceButton";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

import { RiEditBoxFill } from "react-icons/ri";
import Table from "./Table";

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
			<Table
				platform="Platform"
				type="Type"
				payment="Payment"
				startDate="Start"
				dueDate="Due"
				edit="Edit"
				del="Delete"
				activity="Activity"
				className="w-full mb-5 bg-[#181818] text-white rounded-[5px] py-[18px] px-5 flex items-center justify-between text-left text-lg font-semibold"
			/>
			{services.map((service: any) => (
				<div key={service._id}>
					<Table
						platform={service.platform}
						type={service.type}
						payment={`N${service.payment}`}
						startDate={new Date(service.startDate).toLocaleDateString()}
						dueDate={new Date(service.dueDate).toLocaleDateString()}
						edit={
							<Link href={`/editService/${service._id}`}>
								<RiEditBoxFill className="text-lg text-[#181818] text-opacity-70" />
							</Link>
						}
						del={<RemoveBtn id={service._id} />}
						activity={<ToggleButton />}
						className="w-full mb-[10px] bg-white text-[#181818] rounded-[5px] py-[18px] px-5 flex items-center justify-between text-left text-lg font-medium"
					/>
				</div>
			))}
			<div className="w-full mt-5 space-y-2">
				<div>
					<AddServiceButton />
				</div>
			</div>
		</>
	);
};

export default ServiceList;
