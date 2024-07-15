import React from 'react';
import './global.css';
import Header from './components/header/Header';
import styled from 'styled-components';

function App() {
  return (
    <Container>
        <Header/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`