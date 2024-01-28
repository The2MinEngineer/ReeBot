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
			<div>{children}</div>
		</section>
	);
}
