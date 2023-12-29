import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";


export const loadUsers = async (page = 1) => {

    const url = `${import.meta.env.VITE_DB_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const users = data.map( localhostUserToModel);

    return users

}