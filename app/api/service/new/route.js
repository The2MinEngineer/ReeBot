import { NextResponse } from "next/server";
import connectDB from "../../../../utils/connect";
import Service from "@/app/(models)/Service";

export async function POST(request) {
	try {
		const requestData = await request.json();
		const { platform, type, payment, startDate, dueDate, userId } = requestData;

		await connectDB();
		const newService = new Service({
			creator: userId,
			platform,
			type,
			payment,
			startDate,
			dueDate,
		});

		await newService.save();
		return NextResponse.json({ success: true }, { status: 201 });
	} catch (error) {
		console.error("Error in POST function:", error);
		return NextResponse.json(
			{ error: "Failed to create service." },
			{ status: 500 }
		);
	}
}
