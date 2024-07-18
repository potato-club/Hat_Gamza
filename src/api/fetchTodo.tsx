import axios from "axios";
import { Todo } from "../types/Todo";

export const fetchTodo = async() : Promise<Todo[]> => {
    try {
        const response = await axios.get('https://koreanjson.com/todos');
        return response.data
    } catch (error) {
        throw error;
    }
};
