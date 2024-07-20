import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchUser } from "../api/fetchUsers";
import { Users } from "../types/users";

interface RightBoxProps {
  number: number;
}

const RightBox: React.FC<RightBoxProps> = ({ number }) => {
  const [users, setUsers] = useState<Users[]>([]);
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
  }, []);

  return (
    <>
      <UserRightBox>
        <p>이름: {users[number]?.name}</p>
        <p>주소지: {users[number]?.city}</p>
        <p>전화번호: {users[number]?.phone}</p>
        <p>email: {users[number]?.email} </p>
        <p>website: {users[number]?.website} </p>
      </UserRightBox>
    </>
  ); //[ && ]
};

const UserRightBox = styled.div`
  /* display: flex; */
  width: 400px;
  height: 100%;
  background-color: darkcyan;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 22px;

  p {
    white-space: pre-line;
    margin: 24px;
  }
`;

export default RightBox;
