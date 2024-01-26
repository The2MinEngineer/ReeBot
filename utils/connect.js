import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
	} catch (error) {
		throw new Error("Connection failed!");
	}
};

export default connectDB;
