import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../../utils/connect";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";

const signin = async (credentials) => {
	try {
		connectDB();
		const user = await User.findOne({ email: credentials.email }).select(
			"+password"
		);

		if (!user) {
			console.log("User not found");
			throw new Error("Wrong credentials");
		}
		credentials.password = String(credentials.password);
		const isCorrect = await bcrypt.compare(credentials.password, user.password);

		if (!isCorrect) {
			console.log("Password is incorrect");
			throw new Error("Wrong credentials");
		}
		delete user._doc.password;
		return user._doc;
	} catch (err) {
		console.error("Error in signin function:", err);
		throw new Error("Something went wrong");
	}
};

export const authOptions = {
	pages: {
		signIn: "/auth/signin",
		error: "/auth/signin",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				try {
					const user = await signin(credentials);
					return user;
				} catch (err) {
					throw new Error("Failed to login ");
				}
			},
		}),
	],
	callbacks: {
		async jwt(token, user) {
			if (user) {
				token.username = user.username;
				token.email = user.email;
				token.id = user.id;
			}
			return token;
		},
		async session(session, token) {
			if (token) {
				session.user.username = token.username;
				session.user.email = token.email;
				session.user.id = token.id;
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
