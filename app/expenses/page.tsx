"use client";

import MainAppTemplate from "../MainAppTemplete";
import { useSession } from "next-auth/react";

const Expenses = () => {
	const { data: session, status } = useSession();
	console.log(session);

	return (
		<MainAppTemplate>
			<p>Expenses</p>
			<p>Hi {session?.user.email}</p>
		</MainAppTemplate>
	);
};

export default Expenses;
