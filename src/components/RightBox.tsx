import React from "react";
import styled from "styled-components";
import useStore from "../Store";

interface User {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

export default function RightBox() {
  // const users = useStore((state) => state.users);

  return (
    <UserRightBox>
      <p>이름: </p>
      <p>주소지:</p>
      <p>전화번호:</p>
      <p>email:</p>
      <p>website:</p>
    </UserRightBox>
  );
}

const UserRightBox = styled.div`
  /* display: flex; */
  width: 400px;
  height: 100%;
  background-color: darkcyan;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 24px;

  p {
    white-space: pre-line;
    margin: 26px;
  }
`;
