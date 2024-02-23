"use client";

import { RiSearchLine } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { BiSolidNotification } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { useSession } from "next-auth/react";

const Navbar = () => {
	const { data: session, status } = useSession();

	return (
		<div className="w-full flex justify-between items-center p-5 bg-white">
			<div>
				<div className="bg-[#f3f4f3] items-center mr-[15px] flex gap-[10px] px-5 py-[18px] rounded-[10px] max-w-[300px]">
					<RiSearchLine className="text-sm text-[#181818] text-opacity-30" />
					<input
						type="text"
						placeholder="Search..."
						className="text-sm placeholder:text-xs text-[#181818] placeholder:text-opacity-30 placeholder:text-[#181818] text-opacity-30 font-medium bg-[#f3f4f3] focus:outline-none focus:border-none "
					/>
				</div>
			</div>
			<div>
				<div className="flex items-center justify-end gap-5">
					<div className="rounded-[10px] bg-[#f3f4f3] p-4 cursor-pointer">
						<BiSolidNotification className="text-[#181818] text-opacity-70 text-[18px]" />
					</div>
					<div className="rounded-[10px] bg-[#f3f4f3] p-4 cursor-pointer">
						<MdSettings className="text-[#181818] text-opacity-70 text-[18px]" />
					</div>
					<div className="rounded-[10px] bg-[#f3f4f3] py-[5px] pl-[5px] pr-[10px] flex items-center gap-3 cursor-pointer">
						<div className="p-[11px] bg-[#181818] rounded-[9px]">
							<BsPersonFill className="text-white text-[18px]" />
						</div>
						<div>
							<p className="text-[#181818] text-sm font-bold">
								Hello, {session?.user?.fullname}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
