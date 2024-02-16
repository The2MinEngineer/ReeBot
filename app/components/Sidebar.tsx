"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import Logo from "@/app/components/Logo";
import { BiSolidDashboard, BiSolidNotification } from "react-icons/bi";
import { MdSubscriptions, MdContactSupport } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { LuArrowDownUp } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
	const router = useRouter();
	const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");

	const handleMenuItemClick = (text: string) => {
		if (text === "Logout") {
			signOut().then(() => router.push("/signin"));
		} else {
			setActiveMenuItem(text);
			router.push(`/${text.toLowerCase()}`);
		}
	};

	const menuItems = [
		{ icon: <BiSolidDashboard className="text-lg" />, text: "Dashboard" },
		{ icon: <MdSubscriptions className="text-lg" />, text: "Subscriptions" },
		{ icon: <LuArrowDownUp className="text-lg" />, text: "Expenses" },
		{ icon: <BiSolidNotification className="text-lg" />, text: "Messages" },
	];

	const accountItems = [
		{ icon: <BsPersonFill className="text-lg" />, text: "Profile" },
		{ icon: <MdContactSupport className="text-lg" />, text: "Help & Support" },
	];

	const logoutItems = [
		{ icon: <TbLogout2 className="text-lg" />, text: "Logout" },
	];

	return (
		<div className="bg-[#181818] w-[280px] px-5 py-10 overflow-y-auto">
			<div className="flex justify-self-center px-[10px] mb-40">
				<Logo main />
			</div>

			<div>
				{/* Menu */}
				<h2 className="text-white mx-[10px] text-sm font-semibold mb-6">
					MENU
				</h2>
				<div>
					{menuItems.map((menuItem, index) => (
						<div
							key={index}
							className={`${
								activeMenuItem === menuItem.text
									? "bg-[#287DF9]"
									: "bg-transparent"
							} p-4 rounded-[5px] w-full flex justify-between text-white hover:bg-[#287DF9]/40 transition duration-300 items-center text-sm font-medium cursor-pointer`}
							onClick={() => handleMenuItemClick(menuItem.text)}
						>
							<div className="flex items-center gap-5">
								<div
									style={{
										opacity: activeMenuItem === menuItem.text ? 1 : 0.7,
									}}
								>
									{menuItem.icon}
								</div>
								<p
									style={{
										opacity: activeMenuItem === menuItem.text ? 1 : 0.7,
									}}
								>
									{menuItem.text}
								</p>
							</div>
							{activeMenuItem === menuItem.text && (
								<div>
									<FiChevronRight className="text-xs" />
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="mt-32">
				{/* Account */}
				<h2 className="text-white mx-[10px] text-sm font-semibold mb-6">
					ACCOUNT
				</h2>
				<div>
					{accountItems.map((accountItem, index) => (
						<div
							key={index}
							className={`${
								activeMenuItem === accountItem.text ? "bg-[#287DF9]" : ""
							} p-4 rounded-[5px] w-full flex justify-between text-white items-center hover:bg-[#287DF9]/40 transition duration-300 text-sm font-medium cursor-pointer`}
							onClick={() => handleMenuItemClick(accountItem.text)}
						>
							<div className="flex items-center gap-5">
								<div
									style={{
										opacity: activeMenuItem === accountItem.text ? 1 : 0.7,
									}}
								>
									{accountItem.icon}
								</div>
								<p
									style={{
										opacity: activeMenuItem === accountItem.text ? 1 : 0.7,
									}}
								>
									{accountItem.text}
								</p>
							</div>
							{activeMenuItem === accountItem.text && (
								<div>
									<FiChevronRight className="text-xs" />
								</div>
							)}
						</div>
					))}
				</div>
				<div className="mt-32">
					<div>
						{logoutItems.map((logoutItem, index) => (
							<div
								key={index}
								className={`${
									activeMenuItem === logoutItem.text ? "bg-[#287DF9]" : ""
								} p-4 rounded-[5px] w-full flex justify-between text-white items-center hover:bg-[#287DF9]/40 transition duration-300 text-sm font-medium cursor-pointer`}
								onClick={() => handleMenuItemClick(logoutItem.text)}
							>
								<div className="flex items-center gap-5">
									<div
										style={{
											opacity: activeMenuItem === logoutItem.text ? 1 : 0.7,
										}}
									>
										{logoutItem.icon}
									</div>
									<p
										style={{
											opacity: activeMenuItem === logoutItem.text ? 1 : 0.7,
										}}
									>
										{logoutItem.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
