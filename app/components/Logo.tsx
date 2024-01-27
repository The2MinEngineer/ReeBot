import ReebotLogo from "@/public/assets/ReeBot.svg";
import MainReebotLogo from "@/public/assets/MainReeBot.svg";
import Image from "next/image";

const Logo = ({ main }: { main?: boolean }) => {
	const src = main ? MainReebotLogo : ReebotLogo;
	const alt = "Reebot Logo";

	return (
		<div>
			<Image
				src={src}
				alt={alt}
				width="100"
				height="100"
			/>
		</div>
	);
};

export default Logo;
