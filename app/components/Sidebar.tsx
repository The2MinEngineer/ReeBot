import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";

const Sidebar = async () => {
	const session = await getServerSession(options);
	if (session) {
		console.log("session: ", session);
	} else {
		console.log("No session.");
	}
	return (
		<div>
			<h1 className="font-bold text-2xl">sidebar</h1>

			{/* logout logic */}
			{session ? (
				<Link href="/api/auth/signout?callbackUrl=/">Sign out</Link>
			) : (
				<Link href="/api/auth/signin">Signin</Link>
			)}
		</div>
	);
};

export default Sidebar;
