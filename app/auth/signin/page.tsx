import AuthHeader from "@/app/components/AuthHeader";
import Logo from "@/app/components/Logo";
import SigninForm from "@/app/components/SigninForm";
import Link from "next/link";

const page = () => {
	return (
		<div className="flex justify-between">
			<div className="flex justify-between mx-auto flex-col w-3/7 py-10 h-screen">
				<div>
					<div className="flex justify-center items-center">
						<Logo />
					</div>

					<div className="mt-10">
						<AuthHeader
							header="Welcome back!"
							desc="Welcome back! Please enter your details"
						/>
					</div>
				</div>

				<div className="mt-10 flex flex-col justify-between flex-1">
					<div>
						<SigninForm />
						<p className="text-[#181811] text-opacity-40 text-sm mt-2">
							Don't have an account?{" "}
							<span className="text-[#287DF9] text-opacity-100 hover:cursor-pointer hover:underline">
								<Link href="/auth/signup">Signup</Link>
							</span>
						</p>
					</div>
					<div>
						<p className="text-[#181818] text-opacity-40 text-center text-sm font-normal max-w-[360px]">
							Thank you for continuing to trust us to manage your subscriptions.
						</p>
					</div>
				</div>
			</div>
			<div className="w-4/7"></div>
		</div>
	);
};

export default page;
