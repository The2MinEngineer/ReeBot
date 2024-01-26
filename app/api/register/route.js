import connectDB from "../../../utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";

export const POST = async (request) => {
	try {
		await connectDB();
		const { fullname, email, password } = await request.json();

		const exists = await User.findOne({ email });
		if (exists) {
			return NextResponse.json(
				{ message: "User already exists" },
				{ status: 500 }
			);
		}
		console.log("user exists");
		const hashedPassword = await bcrypt.hash(password, 10);

		await User.create({ fullname, email, password: hashedPassword });
		return NextResponse.json(
			{ message: "User registered successfully" },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error during user registration:", error);
		return NextResponse.json(
			{
				message: "Error occurred while registering the user",
				error: error.message,
			},
			{ status: 500 }
		);
	}
};
