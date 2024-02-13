import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const AddServiceButton = () => {
	return (
		<div className="flex justify-end">
			<div className="text-right bg-[#181818] p-5 rounded-[5px] cursor-pointer transition duration-300 hover:bg-opacity-40">
				<Link
					className="  "
					href={"/admin/addService"}
				>
					<FaPlus className="text-white text-lg" />
				</Link>
			</div>
		</div>
	);
};

export default AddServiceButton;
