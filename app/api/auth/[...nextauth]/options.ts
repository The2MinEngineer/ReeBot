import User from "@/app/(models)/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

interface IUser {
	_id: string;
	email: string;
	password?: any;
	role: string;
}

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					if (credentials) {
						const foundUser = (await User.findOne({ email: credentials.email })
							.lean()
							.exec()) as IUser;

						if (foundUser) {
							console.log("User Exists");

							const match = await bcrypt.compare(
								credentials.password,
								foundUser.password
							);

							if (match) {
								console.log("Good pass");
								// Check if foundUser.password is defined before deleting
								if (foundUser.password) {
									delete foundUser.password;
								}
								return foundUser as any; // Adjust the return type here
							}
						}
					}
				} catch (error) {
					console.log(error);
				}
				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user && "role" in user) token.role = user.role;
			console.log("this is the token: ", token);
			return token;
		},
		async session({ session, token }) {
			if (session?.user && "role" in session.user)
				session.user.role = token.role;
			console.log("this is the session: ", session);
			return session;
		},
	},
};
