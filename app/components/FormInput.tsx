const FormInput = ({
	label,
	type,
	placeholder,
	value,
	name,
	onChange,
}: {
	label: string;
	type: string;
	placeholder: string;
	value: any;
	name: string;
	onChange?: any;
}) => {
	return (
		<div className="flex flex-col bg-white px-5 py-3 border border-black border-opacity-20 rounded-[10px] w-full max-w-[360px] mb-[10px]">
			<label className="text-[#181818]/40 text-xs font-normal">{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				required={true}
				placeholder={placeholder}
				onChange={onChange}
				className="text-[#181818] text-base font-semibold placeholder:text-[#181818]/20 placeholder:text-[10px] placeholder:font-normal border-none outline-none focus:border-none focus:outline-none"
			/>
		</div>
	);
};

export default FormInput;
