import http from "../http-common";
import User from "../types/user";

const getUser = () => {
    return http.get<Array<User>>("/user", {
        params: { "username": "admin"}
    });
}

const UserService = {
    getUser
}

export default UserService;