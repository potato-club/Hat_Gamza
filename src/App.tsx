import React from "react";
import styled from "styled-components";
import PostList from "./components/Post/PostList";

function App() {
  return (
    <div>
      <AppBody>
        <PostList />
      </AppBody>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  width: 1440px;
  height: 978px;
  background-color: #444444;
  align-items: center;
  justify-content: center;
`;

export default App;
