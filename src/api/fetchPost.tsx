import { Post } from '../types/Post';
import axios from 'axios';

export const fetchPost = async() : Promise<Post[]> => {
    try {
        const response = await axios.get('https://koreanjson.com/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
};
