import { useEffect, useState } from "react";
import { Outlet, Link, useMatch, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

function LayoutContainer() {
	const match = useMatch("*");
	const navigate = useNavigate();
	const [loggedIn, setloggedIn] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).token) {
			setloggedIn(true);
		} else {
			setloggedIn(false);
			navigate("/login", { replace: true });
		}
	}, []);
	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
  share across all the pages on your site, like navigation. */}
			<nav>
				<ul className="flex items-center">
					<li className={`m-2 ${match.pathname === "/" && "underline underline-offset-2"}`}>
						<Link to="/">Dashboard</Link>
					</li>
					{loggedIn && (
						<li className=" my-2 ml-auto mr-2">
							<Button
								label="Logout"
								className="p-button-danger"
								onClick={() => {
									localStorage.clear("userInfo");
									navigate("/login", { replace: true });
								}}
							/>
						</li>
					)}
				</ul>
			</nav>

			<hr />

			{/* An <Outlet> renders whatever child route is currently active,
  so you can think about this <Outlet> as a placeholder for
  the child routes we defined above. */}
			<div className="m-1">
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutContainer;
