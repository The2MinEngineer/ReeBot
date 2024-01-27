import React from "react";

const AuthToggle = () => {
	return (
		<div>
			<div className="flex p-1 rounded-xl gap-1 bg-[#181818] bg-opacity-5 max-w-[360px]">
				<button className="bg-white py-3 w-1/2 rounded-lg text-[#181818] text-base font-semibold">
					Signin
				</button>

				<button className="bg-white py-3 w-1/2 rounded-lg text-[#181818] text-base font-semibold">
					Signup
				</button>
			</div>
		</div>
	);
};

export default AuthToggle;
