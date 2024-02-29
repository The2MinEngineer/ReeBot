const AuthHeader = ({ header, desc }) => {
	return (
		<div>
			<h1 className="text-[#181818] text-center text-[28px] font-bold mb-[5px]">
				{header}
			</h1>
			<p className="text-[#181818] text-opacity-40 text-center text-sm font-normal">
				{desc}
			</p>
		</div>
	);
};

export default AuthHeader;
