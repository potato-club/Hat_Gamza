import axios from "axios";
import { Users } from "../types/users";

export const fetchUser = async (): Promise<Users[]> => {
  try {
    const response = await axios.get<Users[]>("https://koreanjson.com/users");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
