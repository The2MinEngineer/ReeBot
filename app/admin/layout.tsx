import Sidebar from "../components/Sidebar";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex">
			<div>
				<Sidebar />
			</div>
			<div className="bg-[#F3F4F3] w-full">{children}</div>
		</section>
	);
}
