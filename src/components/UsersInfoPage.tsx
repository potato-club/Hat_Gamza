import React from "react";
import styled from "styled-components";

import UsersInfo from "./UsersInfo";

export default function UsersInfoPage() {
  return (
    <>
      <UserInfoWrap>
        <UsersInfo />
      </UserInfoWrap>
    </>
  );
}

const UserInfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;
