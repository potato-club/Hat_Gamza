import axios from "axios";
import { Post } from "../types/post";

export const fetchPost = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>("https://koreanjson.com/posts");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
