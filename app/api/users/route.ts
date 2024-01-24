import { NextResponse } from "next/server";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";
import { getSession, signIn } from "next-auth/react";

export async function POST(req: any) {
	try {
		const body = await req.json();
		const userData = body.formData;

		// confirm data exists
		if (!userData?.email || !userData.password) {
			return NextResponse.json(
				{ message: "All fields are required." },
				{ status: 400 }
			);
		}

		// check for duplicate emails
		const duplicate = await User.findOne({ email: userData.email })
			.lean()
			.exec();

		// TODO: Check for emails casing - make sure to lowercase everything before sending and before retrieving from the database.

		if (duplicate) {
			return NextResponse.json(
				{ message: "Duplicate Email." },
				{ status: 400 }
			);
		}

		const hashPassword = await bcrypt.hash(userData.password, 14);
		userData.password = hashPassword;

		await User.create(userData);

		// Trigger authentication here to obtain session and token
		const session = await getSession({ req });

		// Sign in the user immediately after signing up
		await signIn("credentials", {
			email: userData.email,
			password: userData.password,
			callbackUrl: "/newpage",
		});

		// Return session information in the response
		return NextResponse.json({ session }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "You have an error here." },
			{ status: 500 }
		);
	}
}
