import { NextResponse } from "next/server";
import connectDB from "../../../utils/connect";
import Service from "@/app/(models)/Service";

export async function GET() {
	await connectDB();
	const services = await Service.find();
	return NextResponse.json({ services });
}

export async function POST(request) {
	const { platform, type, payment, startDate, dueDate } = await request.json();
	await connectDB();

	await Service.create({
		platform,
		type,
		payment,
		startDate,
		dueDate,
	});

	return NextResponse.json({ message: "Service created." }, { status: 201 });
}
