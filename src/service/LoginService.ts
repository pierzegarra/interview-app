import http from "../http-common";
import User from "../types/user";

const login = () => {
    const loginRequest = {
        username: "admin",
        password: "admin"
    }
    return http.post<Array<User>>("/login", loginRequest);
}

const LoginService = {
    login
}

export default LoginService;