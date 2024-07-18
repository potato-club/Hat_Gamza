import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import styled from 'styled-components';
import ChangeProfile from './ChangeProfile';
import PostCommentButton from './PostCommentButton';
import Showing from './Showing';


const MianMypage = () => {

    const [tpye,setType] = useState<string>('post');

    const handleType = (type:string) => {
        setType(type);
    }

    return (
        <Container>
            <ProContainer>
                <ProfileInfo/>
                <ChangeProfile/>
           </ProContainer>
           <PostCommentButton SelectType={handleType}/>
           <Showing type={tpye}/>
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