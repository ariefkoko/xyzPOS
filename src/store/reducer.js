import {
	CHANGE_ISLOGIN,
	CHANGE_PAGE,
	CHANGE_SECTION,
	FETCH_PAKET,
	PAKET_LOADING,
} from "./types";

const initialState = {
	paket: [],
	paketLoading: true,
	landingSection: "hero",
	page: "landing",
	isLogin: "false",
};

export default function reducer(state = initialState, action) {
	const newState = { ...state };

	switch (action.type) {
		case FETCH_PAKET:
			newState.paket = action.payload;
			break;

		case PAKET_LOADING:
			newState.paketLoading = action.payload;
			break;

		case CHANGE_SECTION:
			newState.landingSection = action.payload;
			break;

		case CHANGE_PAGE:
			newState.page = action.payload;
			break;

		case CHANGE_ISLOGIN:
			newState.isLogin = action.payload;
			break;

		default:
			break;
	}

	return newState;
}
