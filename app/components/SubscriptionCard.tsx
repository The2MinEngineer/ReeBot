const SubscriptionCard = ({
	icon,
	text,
	className,
}: {
	icon: any;
	text: string;
	className: string;
}) => {
	return (
		<div className={className}>
			<div className="flex text-white text-2xl font-semibold mb-[45px] justify-between items-center mt-[10px]">
				<p>amount/m</p>
				<p>Toggle</p> {/* TODO: TOGGLE BUTTON */}
			</div>
			<div>
				{icon && <>{icon}</>}
				<p className="text-lg font-semibold text-white">{text}</p>
			</div>
		</div>
	);
};

export default SubscriptionCard;
