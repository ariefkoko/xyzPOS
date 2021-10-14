import { useEffect } from "react";
import { useSelector } from "react-redux";
import Berlangganan from "../components/Berlangganan";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

export default function LandingPage() {
	const landingSection = useSelector((state) => state.landingSection);
	const page = useSelector((state) => state.page);

	useEffect(() => {
		scrollTo();
	}, [landingSection]);

	function scrollTo() {
		const element = document.getElementById(landingSection);
		element.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div className="relative">
			<Navbar />
			<section id={"hero"} className="h-screen bg-white flex">
				<Hero />
			</section>
			<section id={"berlangganan"} className="h-screen bg-white flex relative">
				<Berlangganan />
				<Footer />
			</section>
			<Register page={page} />
			<Login page={page} />
		</div>
	);
}
