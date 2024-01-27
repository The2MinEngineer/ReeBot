"use client";
import SigninForm from "../components/SigninForm";
import { useSession } from "next-auth/react";

interface User {
	email?: string;
	fullname?: string;
	// Add any other properties you have in your user object
}

const Dashboard = () => {
	const { data: session } = useSession();

	return (
		<div>
			This is the dashboard
			{session && session.user ? (
				<>
					<p>Email: {session.user.email}</p>
					{/* {session.user.fullname && <p>Fullname: {session.user.fullname}</p>} */}
				</>
			) : (
				<SigninForm />
			)}
		</div>
	);
};

export default Dashboard;
