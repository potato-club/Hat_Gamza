import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import { fetchUser } from "../api/fetchUsers";
import { Users } from "../types/users";
import Pagination from "./Pagination";

export default function UsersInfo() {
  const [users, setUsers] = useState<Users[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 몇 페이지인지 설정
  const [postsPerPage, setPostsPerPage] = useState(4); // 한페이지에 몇개씩 보여줄 건지 설정
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUser();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log(users);
  }, []);

  return (
    <>
      {currentPosts.map((item) => (
        <>
          <UserInfoBox>
            <LeftBox number={item.id - 1} />
            <RightBox number={item.id - 1} />
          </UserInfoBox>
        </>
      ))}
      <Pagination
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

const UserInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgreen;
  border-radius: 20px; // 자식요소에 설정
  width: 650px;
  height: 300px;
  margin: 40px;
  background-color: beige;
`;
