import Link from "next/link";

import "./globals.css";
import "./fonts.css";

export const metadata = {
	title: "Mahakali Saw Mill - Manufacture of Wooden Packing Material",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header className="mainHeader">
					<h1>Mahakali Saw Mill</h1>
				</header>
				<nav className="mainNavigation">
					<Link href="/">Home</Link>
					<Link href="/products" className="dropdown">
						Our Products
						<div className="dropdown-content">
							<Link href="/">Link 1</Link>
							<Link href="/">Link 2</Link>
							<Link href="/">Link 3</Link>
						</div>
					</Link>
					<Link href="/contact-us">Contact Us</Link>
					<Link href="/enquiry">Enquiry</Link>
				</nav>
				<div className="content">{children}</div>
			</body>
		</html>
	);
}
