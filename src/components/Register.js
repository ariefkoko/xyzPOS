import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePage, registerAsync } from "../store/action";

export default function Register({ page }) {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function changingPage(page) {
		dispatch(changePage(page));
		setName("");
		setEmail("");
		setPassword("");
	}

	function processRegister() {
		const payload = {
			email,
			password,
			name,
		};

		dispatch(registerAsync(payload));
	}

	return (
		<div
			className={`fixed bg-custom-transparent inset-0 flex shadow-xl ${
				page === "register" ? "z-20" : "z-min-10"
			}`}
		>
			<div className="m-auto w-4/6 bg-white rounded-3xl relative p-14 flex">
				<button
					onClick={(e) => changingPage("landing")}
					className="absolute top-0 right-0 p-4"
				>
					<img src={"./close-24px.svg"} />
				</button>

				<div className="flex-1">
					<img src={"./login-illustration.svg"} width="100%" />
				</div>

				<div className="flex flex-col flex-1 pl-10">
					<h1 className="font-bold text-5xl mb-10">Buat Akun</h1>

					<form className="flex flex-col space-y-8">
						<div className=" border-custom-red rounded-full flex pl-5">
							<img src={"./face-24px.svg"} />
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Nama"
								className="h-16 w-full ml-5 rounded-full focus:outline-none text-2xl placeholder-red-400"
							/>
						</div>

						<div className=" border-custom-red rounded-full flex pl-5">
							<img src={"./email-24px.svg"} />
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								className="h-16 w-full ml-5 rounded-full focus:outline-none text-2xl placeholder-red-400"
							/>
						</div>

						<div className=" border-custom-red rounded-full flex pl-5">
							<img src={"./password-24px.svg"} />
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								className="h-16 w-full ml-5 rounded-full focus:outline-none text-2xl placeholder-red-400"
							/>
						</div>
					</form>

					<button
						onClick={processRegister}
						className="h-16 bg-custom-red rounded-full w-full mt-10 text-2xl font-extrabold text-white"
					>
						Daftar
					</button>

					<p className="mt-4 self-center text-lg font-black">
						Sudah punya akun?{" "}
						<span
							onClick={(e) => changingPage("login")}
							className="text-custom-red cursor-pointer"
						>
							Masuk
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
