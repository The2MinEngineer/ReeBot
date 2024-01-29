import ReebotLogo from "@/public/assets/ReeBot.svg";
import MainReebotLogo from "@/public/assets/MainReeBot.svg";
import IconReebotLogo from "@/public/assets/IconReebot.svg";
import Image from "next/image";

const Logo = ({ main, icon }: { main?: boolean; icon?: boolean }) => {
	const src = () => {
		if (main) {
			return MainReebotLogo;
		} else if (icon) {
			return IconReebotLogo;
		} else {
			return ReebotLogo;
		}
	};

	const alt = "Reebot Logo";

	return (
		<div>
			<Image
				src={src()}
				alt={alt}
				width="100"
				height="100"
			/>
		</div>
	);
};

export default Logo;
