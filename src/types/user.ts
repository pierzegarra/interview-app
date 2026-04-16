import RolesData from "./roles";

export default interface UserData {
    id?: number;
    username?: string;
    password?: string;
    enabled?: boolean;
    roles?: RolesData[];
}