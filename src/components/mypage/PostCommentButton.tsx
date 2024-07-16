import React from 'react';
import styled from 'styled-components';

const PostCommentButton = () => {
    return (
        <Container>
            <Buttons>개시물</Buttons>
            <Buttons>댓글</Buttons>
            <Buttons>할일</Buttons>
        </Container>
    );
};

export default PostCommentButton;

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
height: 60px;
width:600px;
background-color: lightgray;
margin-top: 20px;
`

const Buttons = styled.button`
    width: 60px;
    height: 40px;
`