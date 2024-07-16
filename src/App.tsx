import React from 'react';
import './global.css';
import Header from './components/header/Header';
import styled from 'styled-components';
import MianMypage from './components/mypage/MianMypage';

function App() {
  return (
    <>
    <Container>
        <Header/>
        <MianMypage/>
    </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`