import { Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
import LayoutContainer from "./containers/LayoutContainer";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<AdminLogin />} />
			<Route path="/" element={<LayoutContainer />}>
				<Route index element={<Dashboard />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

export default App;
