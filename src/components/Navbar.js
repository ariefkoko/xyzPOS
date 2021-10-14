import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSection, changePage } from "../store/action";

export default function Navbar() {
	const dispatch = useDispatch();
	const landingSection = useSelector((state) => state.landingSection);
	const [navbar, setNavbar] = useState(false);

	function changeLandingSection(section) {
		dispatch(changeSection(section));
	}

	function changingPage(page) {
		dispatch(changePage(page));
	}

	function changeNavbar() {
		if (window.scrollY > 0) {
			setNavbar(true);
		} else {
			setNavbar(false);
			changeLandingSection("hero");
		}
	}

	window.addEventListener("scroll", changeNavbar);

	return (
		<nav className={navbar ? "navbar-two" : "navbar-one"}>
			<div className="lg:container flex justify-between m-auto items-center">
				<h1 className="font-black text-5xl">xyzPOS</h1>
				<ul className=" text-2xl flex space-x-10 items-center">
					<li>
						<button className="font-semibold">Fitur</button>
					</li>
					<li>
						<button
							onClick={(e) => changeLandingSection("berlangganan")}
							className={`font-semibold ${
								landingSection === "berlangganan" ? "border-custom-bottom" : ""
							}`}
						>
							Berlangganan
						</button>
					</li>
					<li>
						<button
							onClick={(e) => changingPage("login")}
							className={`font-semibold border-2 rounded-full px-12 py-2 ${
								navbar
									? "text-white border-white"
									: "border-custom-red text-custom-red"
							}`}
						>
							Masuk
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
