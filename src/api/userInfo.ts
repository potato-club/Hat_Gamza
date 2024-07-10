import axios from "axios";
import { UsersInfo } from "../types/user";

export const fetchUser = async (): Promise<UsersInfo[]> => {
  try {
    const response = await axios.get<UsersInfo[]>(
      "https://koreanjson.com/users"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
