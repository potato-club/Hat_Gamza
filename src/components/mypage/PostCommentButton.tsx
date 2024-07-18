import React from 'react';
import styled from 'styled-components';

interface ButtonTypeProps{
    SelectType: (type:string) => void;
}

const PostCommentButton: React.FC<ButtonTypeProps> = ({SelectType}) => {

    const handleSelectedType = (type:string) => {
        SelectType(type);
    }

    return (
        <Container>
            <Buttons onClick={() => handleSelectedType('post')}>개시물</Buttons>
            <Buttons onClick={() => handleSelectedType('comment')}>댓글</Buttons>
            <Buttons onClick={() => handleSelectedType('todo')}>할일</Buttons>
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