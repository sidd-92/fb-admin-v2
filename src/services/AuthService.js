import axios from "axios";

const DEFAULT_API_URL = "https://auth-api-express.onrender.com/api";
//192.168.1.47:3001
class AuthService {
	setDevURL() {
		const data = {
			_id: "Obj",
			isAdmin: false,
			browserLoggedIn: null,
			isLoggedIn: false,
			googleSignUp: false,
			lastLoggedIn: null,
			email: "reactdev123",
			password: "$2b$10$ty94TFXqYsIELIC0cDK6m.moW1ShPofPfPQtvr6FEoewlc2sqXGz6",
		};
		return process.env.NODE_ENV === "development" ? "http://192.168.1.16:3001/api" : DEFAULT_API_URL;
	}

	login(credentials) {
		return axios.post(`${this.setDevURL()}/user/login`, credentials);
	}
	google(code) {
		return axios.post(`${this.setDevURL()}/user/auth/google`, code);
	}
	decode(tokenObj) {
		const config = {
			headers: {
				Authorization: `Bearer ${tokenObj.token}`,
			},
		};
		return axios.post(`${this.setDevURL()}/user/decode`, tokenObj, config);
	}
	logout(tokenObj) {
		return axios.post(`${this.setDevURL()}/user/logout`, tokenObj);
	}
	signup(details) {
		return axios.post(`${this.setDevURL()}/user/signup`, details);
	}
}

export default new AuthService();
