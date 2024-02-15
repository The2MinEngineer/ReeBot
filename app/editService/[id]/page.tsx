import MainAppTemplate from "@/app/MainAppTemplete";
import EditServiceForm from "@/app/components/EditServiceForm";

const getServiceById = async (id: any) => {
	try {
		const res = await fetch(`http://localhost:3000/api/service/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch service.");
		}
		return res.json();
	} catch (error) {
		console.log(error);
	}
};

const EditService = async ({ params }: any) => {
	const { id } = params;
	const { service } = await getServiceById(id);
	const { platform, type, payment, startDate, dueDate } = service;
	return (
		<MainAppTemplate>
			<div className="my-10 mx-5">
				<h1 className="text-[#181818] font-bold text-2xl">Update Service</h1>

				<EditServiceForm
					id={id}
					platform={platform}
					type={type}
					payment={payment}
					startDate={startDate}
					dueDate={dueDate}
				/>
			</div>
		</MainAppTemplate>
	);
};

export default EditService;
