import { Manrope } from "next/font/google";
import "./globals.css";
import Provider from "./context/Provider";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ session, children }) {
	return (
		<html lang="en">
			<Provider session={session}>
				<body className={manrope.className}>{children}</body>
			</Provider>
		</html>
	);
}
