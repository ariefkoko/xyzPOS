import {
	CHANGE_ISLOGIN,
	CHANGE_PAGE,
	CHANGE_SECTION,
	FETCH_PAKET,
	PAKET_LOADING,
} from "./types";

function fetchPaket(payload) {
	return {
		type: FETCH_PAKET,
		payload,
	};
}

function paketLoading(payload) {
	return {
		type: PAKET_LOADING,
		payload,
	};
}

function changeIsLogin(payload) {
	return {
		type: CHANGE_ISLOGIN,
		payload,
	};
}

export function changeSection(payload) {
	return {
		type: CHANGE_SECTION,
		payload,
	};
}

export function changePage(payload) {
	return {
		type: CHANGE_PAGE,
		payload,
	};
}

export function fetchPaketAsync() {
	return async function (dispatch) {
		try {
			dispatch(paketLoading(true));
			// fetch data from API in here

			// example paket is data that already fetched
			const paket = [
				{
					name: "Basic",
					price: 45000,
					fitur: [
						"Kelola stok produk dengan mudah",
						"Laporan penjualan",
						"Jual produk digital",
					],
					bestSeller: false,
				},
				{
					name: "Premium",
					price: 50000,
					fitur: [
						"Semua fitur pada paket Basic",
						"Dukungan printer struk",
						"Live support 24 jam",
					],
					bestSeller: true,
				},
				{
					name: "Super POS!",
					price: 70000,
					fitur: [
						"Semua fitur pada paket Premium",
						"Laporan penjualan",
						"Jual produk digital",
					],
					bestSeller: false,
				},
			];

			await new Promise((resolve) => {
				setTimeout(resolve, 2000);
			});

			dispatch(fetchPaket(paket));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(paketLoading(false));
		}
	};
}

export function loginAsync(payload) {
	return async function (dispatch) {
		try {
			console.log(payload);
			dispatch(changeIsLogin(true));
		} catch (error) {
			console.log(error);
		}
	};
}

export function registerAsync(payload) {
	return async function (dispatch) {
		try {
			console.log(payload);
			dispatch(changeIsLogin(true));
		} catch (error) {
			console.log(error);
		}
	};
}
