import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { fetchPost } from '../../api/fetchPost';
import { fetchUser } from '../../api/fetchUser';
import { fetchComment } from '../../api/fetchComment';

const Showing = () => {

    const [posts,setPosts] = useState<Post[]>([]);
    const [user,setUser] = useState<User | null>(null);

    useEffect(()=>{
        const fetchData = async() => {
        try {
            const fetchPostData = await fetchPost();
            const fetchUserData = await fetchUser();
            setPosts(fetchPostData);
            setUser(fetchUserData);
        } catch (error) {
            throw error;
        }
    }
        fetchData();
    },[])

    const filterPost = user ? posts.filter(post => post.UserId === user.id) : [];

    return (
        <Container>
            <ItemBox>
                <div>

                </div>
            </ItemBox>
        </Container>
    );
};

export default Showing;

const Container = styled.div`
background-color: lightgray;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 500px;
width: 1080px;
margin-top: 50px;
margin-bottom:50px;
`
const ItemBox = styled.div`
background-color: white;
height: 450px;
width: 1000px;
`
