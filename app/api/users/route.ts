import { NextRequest, NextResponse } from "next/server";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

// Define the POST handler
export async function POST(req: NextRequest) {
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

		return NextResponse.json({ message: "User created successfully." });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "An error occurred during user creation." },
			{ status: 500 }
		);
	}
}
