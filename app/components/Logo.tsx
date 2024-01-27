import ReebotLogo from "@/public/assets/ReeBot.svg";
import Image from "next/image";

const Logo = () => {
	return (
		<div>
			<Image
				src={ReebotLogo}
				alt="Reebot Logo"
				width="100"
				height="100"
			/>
		</div>
	);
};

export default Logo;
