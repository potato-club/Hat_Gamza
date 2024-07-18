import React, { useEffect, useState } from "react";
import axios from "axios";
import { create } from "zustand";

interface User {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

interface StoreState {
  users: User[];
  setUsers: (users: User[]) => void;
}

const useStore = create<StoreState>((set) => ({
  users: [], // 초기 상태 빈 배열
  setUsers: (users) => set({ users }), // users 상태를 업데이트 하는 함수
}));

export default function Store() {
  const { setUsers } = useStore();

  useEffect(() => {
    axios
      .all([
        axios.get("https://koreanjson.com/users"),
        axios.get("https://koreanjson.com/posts"),
        axios.get("https://koreanjson.com/todos"),
        axios.get("https://koreanjson.com/comments"),
      ])
      .then(
        axios.spread((usersRes, postsRes, todosRes, commsRes) => {
          const users = usersRes.data;
          const posts = postsRes.data;
          const todos = todosRes.data;
          const comms = commsRes.data;

          setUsers(users);
          console.log("users:", users);

          console.log(posts[0].id); // []숫자 + 1 이 출력된다. [5]라면 6 출력.
          console.log(
            users.map((users) => {
              return users.id;
            })
          );
        })
      )
      .catch((error) => console.log(error));
  }, [setUsers]);
  return null;
}
