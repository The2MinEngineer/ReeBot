import { NextResponse } from "next/server";
import connectDB from "../../../../../utils/connect";
import Service from "@/app/(models)/Service";

export async function GET(request, { params }) {
	try {
		await connectDB();
		console.log("connected");

		const services = await Service.find({ creator: params.id }).populate(
			"creator"
		);

		console.log(services);
		return NextResponse.json({ data: services });
	} catch (error) {
		console.error("Error in GET function:", error);
		return NextResponse.json(
			{ error: "Failed to fetch services." },
			{ status: 500 }
		);
	}
}
