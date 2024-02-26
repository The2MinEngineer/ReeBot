import { NextResponse } from "next/server";
import Service from "@/app/(models)/Service";
import connectDB from "../../../../utils/connect";

export async function GET(request, { params }) {
	const { id } = params;
	await connectDB();
	const service = await Service.findOne({ _id: id });
	return NextResponse.json({ service }, { status: 200 });
}

export async function PATCH(request, { params }) {
	const { id } = params;

	if (!id) {
		return NextResponse.json(
			{ error: "Missing 'id' parameter." },
			{ status: 400 }
		);
	}

	try {
		// Connect to the database
		await connectDB();

		// Extract data from the request body
		const {
			newPlatform: platform,
			newType: type,
			newPayment: payment,
			newStartDate: startDate,
			newDueDate: dueDate,
		} = await request.json();

		// Update the service
		const updatedService = await Service.findByIdAndUpdate(id, {
			platform,
			type,
			payment,
			startDate,
			dueDate,
		});

		// Check if the service was successfully updated
		if (!updatedService) {
			return NextResponse.json(
				{ error: "Service not found or not updated." },
				{ status: 404 }
			);
		}

		// Respond with success message
		return NextResponse.json({ message: "Service updated" }, { status: 200 });
	} catch (error) {
		// Log any errors for debugging
		console.error("Error updating service:", error);
		return NextResponse.json(
			{ error: "Failed to update service." },
			{ status: 500 }
		);
	}
}

export async function DELETE(request, { params }) {
	const { id } = params;

	// Check if 'id' is not defined
	if (!id) {
		return NextResponse.json(
			{ error: "Missing 'id' parameter." },
			{ status: 400 }
		);
	}

	// Connect to the database
	await connectDB();

	// Attempt to delete the service
	try {
		const deletedService = await Service.findByIdAndDelete(id);

		// If service not found
		if (!deletedService) {
			return NextResponse.json(
				{ error: "Service not found." },
				{ status: 404 }
			);
		}
		return NextResponse.json({ message: "Service deleted." }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to delete service." },
			{ status: 500 }
		);
	}
}
