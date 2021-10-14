import { useDispatch } from "react-redux";
import { changePage } from "../store/action";

export default function Card({ detail }) {
	const dispatch = useDispatch();

	function changingPage(page) {
		dispatch(changePage(page));
	}

	return (
		<div
			className={`flex flex-col w-custom-30 rounded-3xl ${
				detail.bestSeller ? "shadow-2xl" : "shadow-xl"
			}`}
		>
			{detail.bestSeller && (
				<div className="h-12 rounded-t-3xl text-white text-2xl font-extrabold flex bg-custom-red w-full">
					<h3 className="m-auto">Best Seller!</h3>
				</div>
			)}

			<h2 className="font-extrabold text-3xl text-custom-red mx-auto mt-10">
				{detail.name}
			</h2>

			<div className="mx-auto mt-3 ">
				<div className="flex flex-col">
					<div className="flex space-x-2">
						<p className="text-3xl">Rp</p>
						<h1 className="text-6xl font-black">
							{detail.price.toLocaleString("id-ID")}
						</h1>
					</div>
					<p className="text-3xl self-end">/bulan</p>
				</div>
			</div>

			<div className="mt-6 mx-6 space-y-4">
				{detail.fitur.map((fitur, index) => (
					<div key={index} className="flex space-x-4">
						<img src={"./check_circle-24px.svg"} width="50px" />
						<h3 className="text-2xl">{fitur}</h3>
					</div>
				))}
			</div>

			<button
				onClick={(e) => changingPage("register")}
				className="mt-10 mx-auto mb-8 py-2 w-2/3 rounded-full shadow-md text-2xl font-extrabold bg-custom-red text-white "
			>
				Aku mau!
			</button>
		</div>
	);
}
