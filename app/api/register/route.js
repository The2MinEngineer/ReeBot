import connectDB from "../../../utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";

export const POST = async (request) => {
	try {
		await connectDB();
		const body = await request.json();
		const { fullname, email, telephone, password } = body.data;
		console.log(body.data);

		if (!fullname || !email || !telephone || !password) {
			return new NextResponse("Missing name, email, telephone, or password", {
				status: 400,
			});
		}

		const exist = await User.findOne({ email });
		if (exist) {
			return NextResponse.json(
				{ message: "User already exists" },
				{ status: 400 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			fullname,
			email,
			telephone,
			password: hashedPassword,
		});
		return NextResponse.json(user);
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
