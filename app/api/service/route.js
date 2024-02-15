import { NextResponse } from "next/server";
import connectDB from "../../../utils/connect";
import Service from "@/app/(models)/Service";

export async function GET() {
	await connectDB();
	const services = await Service.find();
	return NextResponse.json({ services });
}

export async function POST(request) {
	try {
		const requestData = await request.json();
		console.log("Request Data:", requestData);

		const { platform, type, payment, startDate, dueDate, user } = requestData;

		const userId = user && user._id;

		if (!userId) {
			console.error("User ID not found in the request payload.");
			return NextResponse.json(
				{ error: "User ID not found in the request payload." },
				{ status: 400 }
			);
		}

		await connectDB();

		await Service.create({
			platform,
			type,
			payment,
			startDate,
			dueDate,
			user: userId,
		});

		return NextResponse.json({ message: "Service created." }, { status: 201 });
	} catch (error) {
		console.error("Error in POST function:", error);
		return NextResponse.json(
			{ error: "Failed to create service." },
			{ status: 500 }
		);
	}
}
