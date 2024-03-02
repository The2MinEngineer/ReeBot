import { BsPersonFill } from "react-icons/bs";
import EditButton from "./EditButton";

const ProfileDisplayWithImage = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-6">
				<div className="bg-[#181818] rounded-full p-[26px] flex items-center justify-center">
					<BsPersonFill className="text-white text-[48px]" />
				</div>
				<div className="">
					<h3 className="font-semibold text-[#181818] text-lg mb-[5px]">
						Isaac Eze
					</h3>
					<p className="font-medium text-sm text-[#181818] text-opacity-70 mb-[5px]">
						Subscriber
					</p>
					<p className="font-medium text-xs text-[#181818] text-opacity-70">
						Lagos, Nigeria
					</p>
				</div>
			</div>

			<EditButton />
		</div>
	);
};

export default ProfileDisplayWithImage;
