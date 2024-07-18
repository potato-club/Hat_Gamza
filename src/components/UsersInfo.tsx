import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import { fetchUser } from "../api/fetchUsers";
import { Users } from "../types/users";

export default function UsersInfo() {
  const [users, setUsers] = useState<Users[]>([]);
  const [currentPage, setCurrnetPage] = useState(); // 현재 몇 페이지인지 설정
  const [postPerPage, setPostPerPage] = useState(); // 한페이지에 몇개씩 보여줄 건지 설정
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

  // useEffect 안에서 데이터를 가져와야하는 이유
  // 초기 데이터 로드 : 처음 렌더링 될 때 필요한 데이터를 가져와야 함

  //fetchUser 불러오기 -> 4개/4개/2개씩 자르기 (slice) /
  return (
    <>
      {users.map((item) => (
        <>
          <UserInfoBox>
            <LeftBox />
            <RightBox number={item.id - 1} />
          </UserInfoBox>
        </>
      ))}
    </>
  );
}

const UserInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgreen;
  /* border-radius: 20px; */ // 자식요소에 설정
  width: 650px;
  height: 300px;
  margin: 40px;
  background-color: beige;
`;
