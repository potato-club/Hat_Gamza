import React, { useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo';
import styled from 'styled-components';
import ChangeProfile from './ChangeProfile';
import PostCommentButton from './PostCommentButton';
import Showing from './Showing';
import { User } from '../../types/User';
import { fetchUser } from '../../api/fetchUser';


const MianMypage: React.FC = () => {

    const [tpye,setType] = useState<string>('post');
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchUserData = await fetchUser();
                setUser(fetchUserData);
            } catch (error) {
                throw error;
            }
        }
        fetchData();
    },[])

    const handleType = (type:string) => {
        setType(type);
    }

    return (
        <Container>
            <ProContainer>
                <ProfileInfo user={user}/>
                <ChangeProfile user={user}/>
           </ProContainer>
           <PostCommentButton SelectType={handleType}/>
           <Showing type={tpye} user={user}/>
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