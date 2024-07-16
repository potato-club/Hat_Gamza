import React from "react";
import styled from "styled-components";

import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

export default function UsersInfo() {
  return (
    <>
      <UserInfoBox>
        <LeftBox />
        <RightBox />
      </UserInfoBox>
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
