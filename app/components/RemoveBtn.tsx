"use client";

import { useRouter } from "next/navigation";
import { RiDeleteBin7Fill } from "react-icons/ri";

const RemoveBtn = ({ id }: any) => {
	const router = useRouter();

	const removeService = async () => {
		const confirmed = confirm("Are you sure?");

		if (confirmed) {
			const res = await fetch(`http://localhost:3000/api/service/${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				router.refresh();
			}
		}
	};

	return (
		<button onClick={removeService}>
			<RiDeleteBin7Fill className="text-lg text-[#181818] text-opacity-70" />
		</button>
	);
};

export default RemoveBtn;
