import { useDispatch } from "react-redux";
import { changePage, changeSection } from "../store/action";

export default function Hero() {
	const dispatch = useDispatch();

	function changeLandingSection(section) {
		dispatch(changeSection(section));
	}

	function changingPage(page) {
		dispatch(changePage(page));
	}

	return (
		<div className="flex lg:container mx-auto">
			<div className="my-auto flex-1 h-3/5 flex flex-col justify-between">
				<div className="text-6xl w-567px">
					<h1>
						Solusi terbaik untuk
						<span className="text-custom-red"> mengelola usaha </span>
						kamu!
					</h1>
				</div>

				<div className="flex flex-col items-start space-y-6">
					<button
						onClick={(e) => changingPage("register")}
						className="w-96 py-4 font-extrabold text-2xl rounded-full text-white bg-custom-red"
					>
						Daftar Sekarang
					</button>

					<button
						onClick={(e) => changeLandingSection("berlangganan")}
						className="w-96 py-3 font-extrabold text-2xl rounded-full border-custom-red text-custom-red"
					>
						Pelajari Dulu!
					</button>
				</div>
			</div>

			<div className="my-auto w-24 flex-1">
				<img src={"./hero-section-illustration.svg"} width="100%" />
			</div>
		</div>
	);
}
