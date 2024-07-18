import axios from "axios";
import { Comment } from "../types/Comment";

export const fetchComment = async (): Promise<Comment[]> => {
    try {
        const response = await axios.get('https://koreanjson.com/comments');
        return response.data;
    } catch (error) {
        throw error;
    }
};

