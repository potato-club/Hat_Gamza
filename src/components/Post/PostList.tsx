import React, { useState, useEffect } from "react";
import { Post } from "../../types/post";
import { fetchPost } from "../../api/posts";
import { fetchUser } from "../../api/userInfo";
import PostItem from "./PostItem";
import styled from "styled-components";
import usePagination from "../../hooks/usePaginate";

export interface PostUser extends Post {
  name: string;
}

function PostList() {
  const [posts, setPosts] = useState<PostUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const postsPerPage = 4;
  const { totalPages, jumpToPage, currentData, viewPageNumber, currentPage } =
    usePagination(posts, postsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUser();
        const postsData = await fetchPost();

        const postsWithUser: PostUser[] = postsData.map((post) => {
          const user = usersData.find((user) => user.id === post.UserId);
          return { ...post, name: user?.name || "Unknown" };
        });

        setPosts(postsWithUser);
      } catch (error) {
        setError("Error fetching data!");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <PostListContainer>
        <PostBox>
          {currentData.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </PostBox>
      </PostListContainer>

      <Pagination>
        {currentPage > 1 && (
          <button onClick={() => jumpToPage(currentPage - 1)}> {"<"} </button>
        )}
        {viewPageNumber.map((page, index) => (
          <button key={index} onClick={() => jumpToPage(page)}>
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => jumpToPage(currentPage + 1)}> {">"} </button>
        )}
      </Pagination>
    </div>
  );
}

const PostListContainer = styled.div`
  display: flex;
  width: 1243px;
  height: 491px;
  background-color: aliceblue;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
`;

export default PostList;
