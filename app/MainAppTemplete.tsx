import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function MainAppTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<Sidebar />
			<div className="bg-[#F3F4F3] w-full">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
