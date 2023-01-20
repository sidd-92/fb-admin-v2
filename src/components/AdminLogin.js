import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function AdminLogin() {
	const [value, setValue] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).loggedIn) {
			navigate("/");
		} else {
			navigate("/login");
		}
	}, []);
	return (
		<div>
			<div className="font-black text-3xl">Admin Login Here</div>
			<div className="flex flex-col w-1/3">
				<InputText value={value} onChange={(e) => setValue(e.target.value)} />
				<Button
					label="Login"
					onClick={() => {
						localStorage.setItem("userInfo", JSON.stringify({ loggedIn: true }));
						navigate("/");
					}}
				/>
			</div>
		</div>
	);
}

export default AdminLogin;
