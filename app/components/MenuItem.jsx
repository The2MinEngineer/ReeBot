import { FiChevronRight } from "react-icons/fi";

const MenuItem = ({ icon, text }) => {
	return (
		<div className="bg-[#287DF9] p-4 rounded-[5px] w-full flex justify-between items-center text-white text-sm font-medium">
			<div className="flex items-center gap-5">
				<div>{icon}</div>
				<p>{text}</p>
			</div>
			<div>
				<FiChevronRight className="text-xs" />
			</div>
		</div>
	);
};

export default MenuItem;
