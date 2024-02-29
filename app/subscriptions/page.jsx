import MainAppTemplate from "../MainAppTemplete";
import ToggleButton from "@/app/components/ToggleButton";
import ServiceList from "@/app/components/ServiceList";

import { MdCancel } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const Subscriptions = () => {
	return (
		<MainAppTemplate>
			<div className="my-10 mx-5">
				<div className="flex items-center justify-between w-full mb-10">
					<div className="flex-1">
						<h1 className="text-[#181818] font-bold text-2xl">Subscriptions</h1>
					</div>
					<div className="flex items-center justify-end gap-5">
						<MdCancel className="text-lg text-[#181818] cursor-pointer" />
						<FaTrash className="text-lg text-[#181818] cursor-pointer" />
						<ToggleButton value={false} />
					</div>
				</div>

				<div>
					<ServiceList />
				</div>
			</div>
		</MainAppTemplate>
	);
};

export default Subscriptions;
