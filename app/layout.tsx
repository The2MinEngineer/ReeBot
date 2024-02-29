import { Manrope } from "next/font/google";
import "./globals.css";
import Provider from "./context/Provider";

const manrope = Manrope({ subsets: ["latin"] });

interface RootLayoutProps {
	session?: any;
	children: React.ReactNode;
}

export default function RootLayout({ session, children }: RootLayoutProps) {
	return (
		<html lang="en">
			<Provider session={session}>
				<body className={manrope.className}>{children}</body>
			</Provider>
		</html>
	);
}
