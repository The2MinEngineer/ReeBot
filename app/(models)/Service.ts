import mongoose from "mongoose";
import User from "./User";

const { Schema } = mongoose;

const serviceSchema = new Schema(
	{
		platform: {
			type: String,
			required: [true, "Platform is required!"],
			minlength: [2, "Platform should be at least 2 characters long"],
			maxlength: [30, "Platform should be less than 30 characters"],
		},
		platformType: {
			type: String,
			required: [true, "Type is required!"],
			minlength: [2, "PlatformType should be at least 2 characters long"],
			maxlength: [30, "PlatformType should be less than 30 characters"],
		},
		payment: {
			type: Number,
			required: [true, "Payment is required!"],
		},
		startDate: {
			type: Date,
			required: [true, "Start date is required!"],
		},
		dueDate: {
			type: Date,
			required: [true, "Due date is required!"],
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Service =
	mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
