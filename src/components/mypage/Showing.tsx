import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { fetchPost } from '../../api/fetchPost';
import { fetchComment } from '../../api/fetchComment';
import { Comment } from '../../types/Comment';
import { Todo } from '../../types/Todo';
import { fetchTodo } from '../../api/fetchTodo';

interface ShowingProp{
    type:string;
    user: User | null;
}

const Showing: React.FC<ShowingProp> = ({type, user}) => {

    console.log({type});

    const [posts,setPosts] = useState<Post[]>([]);
    const [comments,setComments] = useState<Comment[]>([]);
    const [currentpage, setCurrentpage] = useState<number>(1);
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(()=>{
        const fetchData = async() => {
        try {
            const fetchPostData = await fetchPost();
            const fetchCommentData = await fetchComment();
            const fetchTodoData = await fetchTodo();
            setPosts(fetchPostData);
            setComments(fetchCommentData);
            setTodos(fetchTodoData);
        } catch (error) {
            throw error;
        }
    }
        fetchData();
    },[])

    const filterPost = user ? posts.filter(post => post.UserId === user.id) : [];
    const filterComment = user ? comments.filter(comment => comment.UserId === user.id):[];
    const filterTodo = user ? todos.filter(todo => todo.UserId === user.id):[];
    // 2차원 배열을 만드는 함수
    const MakeTDArray = (arr:any[], size:number):any[][] => {
        const result: any[][] = [];
        for(let i =0;i<arr.length;){
            result.push(arr.slice(i,i+=size));
        }
        return result;
    };

    let DataArray : any[][] = [];
    if(type === 'post'){
        DataArray = MakeTDArray(filterPost,5);
    } else if (type === 'comment') {
        DataArray = MakeTDArray(filterComment,5);
    } else if(type === 'todo'){
        DataArray = MakeTDArray(filterTodo,5);
    }

    const handleCurrentPage = (index:number) => {
        setCurrentpage(index);
    }

    return (
        <Container>
            <Selected>{type === 'post' ? '개시물' : type === 'comment' ? '댓글' : '할일'}</Selected>
            <ItemBox>
                {DataArray.length > 0 ? (
                    DataArray[currentpage].map(data => (
                        <Datatitle>{data.id} : {data.title || data.content}</Datatitle>
                    ))
                ):<Datatitle>아직 아무것도 작성하지 않았어요</Datatitle>}
            </ItemBox>
            <ButtonBox>
                {DataArray.length > 0? (
                    DataArray.map((data, pageidx) => (
                        <PageBtn onClick={() => 
                            handleCurrentPage(pageidx)}>{pageidx+1}</PageBtn>
                    ))
                    ):<PageBtn>1</PageBtn>}
            </ButtonBox>
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
overflow: hidden;
display: flex;
flex-direction: column;
`
const ButtonBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const PageBtn = styled.button`
font-size: 10px;
border: none;
cursor: pointer;
`

const Datatitle = styled.div`
font-size: 20px;
margin-bottom:10px;
`
const Selected = styled.div`
    font-size: 20px;
    font-weight: bold;
`