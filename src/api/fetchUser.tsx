import axios from "axios";
import { User } from "../types/User";

export const fetchUser = async() : Promise<User> => {
    try {
        const response = await axios.get('https://koreanjson.com/users/1');
        return response.data;
    } catch (error) {
        throw error;
    }
};
