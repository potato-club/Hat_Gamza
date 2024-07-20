import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { fetchUser } from "../api/fetchUsers";
import { Users } from "../types/users";

interface LeftBoxProps {
  number: number;
}

const LeftBox: React.FC<LeftBoxProps> = ({ number }) => {
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
      <UserLeftBox>
        <Avatar></Avatar>
        <AvatarName>{users[number]?.username}</AvatarName>
      </UserLeftBox>
    </>
  );
};

const UserLeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100%;
  background-color: cornflowerblue;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  flex-wrap: wrap;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 30px 25px auto 25px;
  border-radius: 100%;
  background-color: pink;
`;

const AvatarName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 40px;
  font-size: 32px;
  background-color: skyblue;
  border-radius: 10px;
  border: 1px blue solid;
  margin-bottom: auto;
  padding: 5px;
`;

export default LeftBox;
