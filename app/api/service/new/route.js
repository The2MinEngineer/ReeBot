import { NextResponse } from "next/server";
import connectDB from "../../../../utils/connect";
import Service from "@/app/(models)/Service";
import { calculateNextDueDate } from "../../../../utils/calculateNextDueDate";

export async function POST(request) {
	try {
		const requestData = await request.json();
		const { platform, type, payment, startDate, dueDate, userId } = requestData;

		// Convert the date strings to a standard date format
		const formattedStartDate = new Date(startDate).toJSON().split("T")[0];
		const formattedDueDate = new Date(dueDate).toJSON().split("T")[0];

		// Calculate the next due date using the utility function
		const { nextDueDate, repeatInterval: calculatedRepeatInterval } =
			calculateNextDueDate(formattedStartDate, formattedDueDate);

		await connectDB();
		const newService = new Service({
			creator: userId,
			platform,
			type,
			payment,
			startDate: formattedStartDate,
			dueDate: nextDueDate,
			repeatInterval: calculatedRepeatInterval,
		});

		console.log({
			"start date": formattedStartDate,
			"due date": formattedDueDate,
			"repeat interval": calculatedRepeatInterval,
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
