import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";
import connectDB from "./connect";

export const authOptions = {
	pages: {
		signIn: "/signin",
		error: "/signin",
		signOut: "/signout",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				fullname: { label: "Fullname", type: "text", placeholder: "Fullname" },
				email: { label: "Email", type: "email" },
				telephone: { label: "telephone", type: "number" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				try {
					connectDB();
					console.log("connected");
					// check to see if email and password are valid
					if (!credentials.email || !credentials.password) {
						console.log("Invalid credentials:", credentials);
						return null;
					}

					// check to see if the user exists
					const user = await User.findOne({
						email: credentials.email,
					}).select("+password");

					if (!user) {
						console.log("User not found:", credentials.email);
						return null;
					}

					// check to see if the password matches
					const passwordMatch = await bcrypt.compare(
						credentials.password,
						user.password // Updated: Changed from user.hashedpassword to user.password
					);

					if (!passwordMatch) {
						console.log("Password does not match:", credentials.email);
						return null;
					}

					// return user object if everything is valid
					return {
						id: user._id,
						email: user.email,
						fullname: user.fullname,
						telephone: user.telephone,
					};
				} catch (error) {
					console.error("Error during authorization:", error);
					throw new Error("Failed to log in");
				}
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.uid = user;
			}
			return token;
		},
		session: async ({ session, token }) => {
			if (token && token.uid) {
				session.user = {
					...token.uid,
					name: token.uid.fullname,
					provider: "credentials",
				};
			} else {
				console.error("User data not found in the token.");
				return {};
			}
			return session;
		},
	},
	strategy: "jwt",
	secret: process.env.NEXTAUTH_SECRET,
	debug: process.env.NODE_ENV === "development",
};
