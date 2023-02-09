import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();
	const [loggedIn, setloggedIn] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).token) {
			setloggedIn(true);
		} else {
			setloggedIn(false);
			navigate("/login");
		}
	}, []);
	return <div className="text-4xl">We are at Dashboard Page</div>;
}

export default Dashboard;
