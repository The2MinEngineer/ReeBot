import SignupForm from "@/app/components/SignupForm";
import React from "react";
import Logo from "@/app/components/Logo";
import AuthHeader from "@/app/components/AuthHeader";
import Link from "next/link";

const Page = () => {
	return (
		<div className="flex justify-between">
			<div className="flex justify-between mx-auto flex-col w-3/7 py-10 h-screen">
				<div>
					<div className="flex justify-center items-center">
						<Logo />
					</div>

					<div className="mt-10">
						<AuthHeader
							header="Welcome!"
							desc="Welcome! Please enter your information"
						/>
					</div>
					<div>{/* TODO: Toggle switch to both signup and signin */}</div>
				</div>

				<div className="mt-10 flex flex-col justify-between flex-1">
					<div>
						<SignupForm />
						<p className="text-[#181811] text-opacity-40 text-sm mt-2">
							Already have an account?{" "}
							<span className="text-[#287DF9] text-opacity-100 hover:cursor-pointer hover:underline">
								<Link href="/auth/signin">Signin</Link>
							</span>
						</p>
					</div>
					<div>
						<p className="text-[#181818] text-opacity-40 text-center text-sm font-normal max-w-[360px]">
							Join the hundreds of Nigerians that trust us to manage their
							subscriptions.
						</p>
					</div>
				</div>
			</div>
			<div className="w-4/7"></div>
		</div>
	);
};

export default Page;
