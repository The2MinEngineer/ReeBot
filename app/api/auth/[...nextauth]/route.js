import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../../utils/connect";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";

// const signin = async (credentials) => {
// 	try {
// 		connectDB();
// 		const user = await User.findOne({ email: credentials.email }).select(
// 			"+password"
// 		);

// 		if (!user) {
// 			console.log("User not found");
// 			return null; // Return null when the user is not found
// 		}

// 		credentials.password = String(credentials.password);
// 		const isCorrect = await bcrypt.compare(credentials.password, user.password);

// 		if (!isCorrect) {
// 			console.log("Password is incorrect");
// 			return null; // Return null when the password is incorrect
// 		}

// 		delete user._doc.password;
// 		return user._doc;
// 	} catch (err) {
// 		console.error("Error in signin function:", err);
// 		throw new Error("Something went wrong");
// 	}
// };

export const authOptions = {
	pages: {
		signIn: "/signin",
		error: "/signin",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				fullname: { label: "Fullname", type: "text", placeholder: "Fullname" },
				password: { label: "Password", type: "password" },
				email: { label: "Email", type: "email" },
			},
			async authorize(credentials) {
				try {
					connectDB();
					// check to see if email and password is valid
					if (!credentials.fullname || !credentials.password) {
						return null;
					}

					// check to see if the user exists
					const user = await User.findOne({ email: credentials.email }).select(
						"+password"
					);

					if (!user) return null;

					// check to see if password match
					const passwordMatch = await bcrypt.compare(
						credentials.password,
						user.hashedpassword
					);

					if (!passwordMatch) return null;

					// return user object if everything is valid
					return user;
				} catch (error) {
					console.error("Error during authorization:", err);
					throw new Error("Failed to log in");
				}

				// try {
				// 	const user = await signin(credentials);
				// 	if (!user) {
				// 		throw new Error("User not found or wrong credentials");
				// 	}
				// 	return user;
				// } catch (err) {
				// 	console.error("Error during authorization:", err);
				// 	throw new Error("Failed to log in");
				// }
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
