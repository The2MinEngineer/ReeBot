import Link from "next/link";

import Logo from "@/app/components/Logo";
import Navbar from "@/app/components/Navbar";
import SubscriptionCard from "@/app/components/SubscriptionCard";

import { GoArrowRight } from "react-icons/go";
import { FiArrowDownRight } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic, SiNetflix } from "react-icons/si";

const Dashboard = () => {
	return (
		<div>
			<Navbar />
			<div className="p-5 flex justify-between gap-5">
				<div className="bg-white rounded-[20px] w-1/4 p-5">
					<div className="mt-5">
						<Logo icon />
						<p className="text-[#181818] text-2xl font-bold mt-[14px]">
							ReeBot
						</p>
					</div>
					<div className="text-[#181818] text-sm font-medium mt-5">
						<p className="mb-5">
							Maximize, track and manage all your subscriptions across several
							platforms with us.
						</p>
						<p>
							With ReeBot, you will get updates on active subscriptions,
							renewals and even track your expenses.
						</p>
					</div>
				</div>

				<div className="w-2/4 flex flex-col gap-5">
					<div className="rounded-[20px] bg-white p-10">
						<div className="flex justify-between mb-[46px]">
							<h2 className="text-[#181818] text-lg font-bold">EXPENSES</h2>
						</div>
						<div className="flex items-center mb-10">
							<p className="text-[#181818] text-[64px] font-bold tracking-tight">
								<span>₦</span>
								0.<span className="text-5xl">00</span>
							</p>
						</div>
						<div className="text-[#181818] text-lg font-medium">
							<p>Active Subscriptions: 0 of 0</p>
						</div>
					</div>
					<div className="flex gap-[10px]">
						<div className="flex-1 rounded-[10px] bg-white p-10">
							<div className="flex items-center justify-between gap-9">
								<div className="flex-1 h-2 bg-[#181818] rounded-full" />
								<div className="text-right">
									<h3 className="text-[#181818] text-opacity-70 text-xs font-semibold">
										Total Expenses
									</h3>
									<p className="text-[#181818] text-2xl font-semibold">
										<span>₦</span>0
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center rounded-[10px] bg-white p-8">
							<FiArrowDownRight className="text-[40px] text-[#181818]" />
						</div>
					</div>
				</div>

				<div className="bg-white p-5 rounded-[20px] w-1/4">
					<h2 className="text-[#181818] text-[18px] font-bold my-5">
						Welcome, Isaac
					</h2>
					<div className="text-[#181818] text-sm font-medium mb-8">
						<p className="mb-5">
							You can now proceed to add subscriptions to your account dashboard
							by navigating to the subscriptions menu.
						</p>
						<p>
							You can add subscriptions from music and movie streaming platforms
							like Spotify and Netflix, as well as from learning platforms like
							Coursera and Udemy.
						</p>
					</div>
					<div className="flex justify-end">
						<Link
							href="/"
							className="text-[#287DF9] flex items-center gap-[5px] text-sm font-bold underline"
						>
							Get Started
							<span className="text-[10px]">
								<GoArrowRight />
							</span>
						</Link>
					</div>
				</div>
			</div>

			<div className="p-5">
				<div className="flex justify-between mb-5">
					<h2 className="text-[#181818] text-lg font-bold">Subscriptions</h2>
					<Link
						href="/admin/subscriptions"
						className="text-[#287DF9] text-base font-medium underline"
					>
						View all
					</Link>
				</div>
				<div className="flex items-center gap-5">
					<SubscriptionCard
						icon={<FaSpotify className="text-white text-[40px] mb-2" />}
						text="Spotify"
						className="p-5 rounded-[20px] w-[300px] bg-[#EE4466]"
					/>
					<SubscriptionCard
						icon={<SiApplemusic className="text-white text-[40px] mb-2" />}
						text="Apple Music"
						className="p-5 rounded-[20px] w-[300px] bg-[#5D82B7]"
					/>
					<SubscriptionCard
						icon={<SiNetflix className="text-white text-[40px] mb-2" />}
						text="Netflix "
						className="p-5 rounded-[20px] w-[300px] bg-[#181818]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
