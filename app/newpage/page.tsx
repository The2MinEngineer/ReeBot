import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const NewPage = () => {
	const { data: session } = useSession();

	if (!session) {
		// Redirect to sign-in page if not authenticated
		redirect("/signIn");
	}

	// Render your page content
	return <div>New Page Content</div>;
};

export default NewPage;
