import { useEffect, useState } from "react";
import { Post } from "../../../types/Post";
import { Comment } from "../../../types/Comment";
import { fetchPost } from "../../../api/fetchPost";
import { fetchComment } from "../../../api/fetchComment";
import styled, { keyframes } from "styled-components";

const YesterdayPostComment = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [comments,setComments] = useState<Comment[]>([]);
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                const fetchPostData = await fetchPost();
                const fetchCommentData = await fetchComment();
                
                setComments(fetchCommentData);
                setPosts(fetchPostData);
            } catch (error) {
                throw error;
            }
        }
        fetchData();
    },[]);

    return (
        <Yesterday>
            <Wrapper>
                <Divs>모든 개시물 갯수 : {posts.length}개</Divs>
                <Divs>모든 댓글 갯수 : {comments.length}개</Divs>
                <Divs>모든 개시물 갯수 : {posts.length}개</Divs>
                <Divs>모든 댓글 갯수 : {comments.length}개</Divs>
                <Divs>모든 개시물 갯수 : {posts.length}개</Divs>
            </Wrapper>
        </Yesterday>
    );
};

export default YesterdayPostComment;

const Yesterday = styled.div`
    height: 25px;
    overflow: hidden;
`

const scroll = keyframes`
    0%, 20%{transform: translateY(0%)}
    25%, 45%{transform: translateY(-20%)}
    50%, 70%{transform: translateY(-40%)}
    75%,95%{transform: translateY(-60%)}
    100%{transform: translateY(-80%)}
`

const Wrapper = styled.div`
    animation: ${scroll} 12s linear infinite;
`

const Divs = styled.div`
font-size: 20px;
font-weight: bold;
`