import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import AuthService from "../services/AuthService";
function AdminLogin() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [togglePassword, setTogglePassword] = useState(false);
	const navigate = useNavigate();
	const loginHandler = async () => {
		let userData = await AuthService.login({
			email: userName,
			password: password,
		}).catch((err) => {
			console.log("SOME ERROR", err);
		});
		if (userData && userData.data) {
			localStorage.setItem(
				"userInfo",
				JSON.stringify({
					token: userData.data.token,
					refresh: userData.data.refreshToken,
				})
			);
			navigate("/");
		}
	};
	useEffect(() => {
		if (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).token) {
			navigate("/");
		} else {
			navigate("/login");
		}
	}, []);
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="font-black xs:text-4xl text-6xl my-11">Admin Login Here</div>
			<div className="w-full xs:max-w-xs max-w-lg flex flex-col justify-center">
				<div className="w-full mb-8">
					<label htmlFor="username1" className="block">
						Username
					</label>
					<InputText
						id="username1"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						aria-describedby="username1-help"
						className="w-full"
					/>
					<small id="username1-help" className="block">
						Enter your username.
					</small>
				</div>
				<div className="w-full mb-8">
					<label htmlFor="password" className="block">
						Password
					</label>
					<span className="p-input-icon-right w-full">
						<i
							className={togglePassword ? " cursor-pointer pi pi-eye" : "cursor-pointer pi pi-eye-slash"}
							onClick={() => setTogglePassword(!togglePassword)}
						/>
						<InputText
							type={togglePassword ? "text" : "password"}
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							aria-describedby="password-help"
							className="w-full"
						/>
					</span>

					<small id="password-help" className="block">
						Enter your password given to you.
					</small>
				</div>

				<Button label="Login" onClick={loginHandler} />
			</div>
		</div>
	);
}

export default AdminLogin;
