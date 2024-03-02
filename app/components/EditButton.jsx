import Link from "next/link";
import { RiEditBoxFill } from "react-icons/ri";

const EditButton = () => {
	return (
		<>
			<Link
				href="/"
				className="flex items-center gap-[10px] px-3 py-[10px] rounded-[20px] w-[70px] border border-[#181818] border-opacity-10"
			>
				<span className="text-xs font-medium text-[#181818] text-opacity-50">
					Edit
				</span>
				<RiEditBoxFill className="text-lg text-[#181818] text-opacity-50" />
			</Link>
		</>
	);
};

export default EditButton;
