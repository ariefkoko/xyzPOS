import { useSelector, useDispatch } from "react-redux";
import { fetchPaketAsync } from "../store/action";
import { useEffect } from "react";
import Card from "./Card";

export default function Berlangganan() {
	const dispatch = useDispatch();
	const paket = useSelector((state) => state.paket);
	const paketLoading = useSelector((state) => state.paketLoading);

	useEffect(() => {
		dispatch(fetchPaketAsync());
	}, []);

	if (paketLoading) {
		return <div className="m-auto font-bold text-5xl">Loading...</div>;
	}

	return (
		<div className="flex lg:container mx-auto ">
			<div className="my-auto w-full">
				<h1 className="font-bold text-5xl mb-10">
					Daftar sekarang dan nikmati fiturnya!
				</h1>

				<div className="flex w-full space-x-14 justify-center items-center">
					{paket?.map((detailPaket, index) => (
						<Card key={index} detail={detailPaket} />
					))}
				</div>
			</div>
		</div>
	);
}
