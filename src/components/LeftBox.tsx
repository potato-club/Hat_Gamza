import React from "react";
import styled from "styled-components";

export default function LeftBox() {
  return (
    <UserLeftBox>
      <Avata></Avata>
      <AvataName>테스트</AvataName>
    </UserLeftBox>
  );
}

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

const Avata = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 30px 25px auto 25px;
  border-radius: 100%;
  background-color: pink;
`;

const AvataName = styled.div`
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
`;
