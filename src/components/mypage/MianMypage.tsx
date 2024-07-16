import React from 'react';
import ProfileInfo from './ProfileInfo';
import styled from 'styled-components';
import ChangeProfile from './ChangeProfile';
import PostCommentButton from './PostCommentButton';
import Showing from './Showing';

const MianMypage = () => {
    return (
        <Container>
            <ProContainer>
                <ProfileInfo/>
                <ChangeProfile/>
           </ProContainer>
           <PostCommentButton/>
           <Showing/>
        </Container>
        
    );
};

export default MianMypage;

const ProContainer = styled.div`
display: flex;
flex-direction: row;
width: 500px;
justify-content: space-evenly;
align-items: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`