import React, { useState, useEffect } from "react";
import { Post } from "../../types/post";
import { fetchPost } from "../../api/posts";
import { fetchUser } from "../../api/userInfo";
import PostItem from "./PostItem";
import styled from "styled-components";

interface PostUser extends Post {
  name: string;
}

function PostList() {
  const [posts, setPosts] = useState<PostUser[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUser();
        const postsData = await fetchPost();

        const postsWithUser: PostUser[] = postsData.map((post) => {
          const user = usersData.find((user) => user.id === post.UserId);
          return { ...post, name: user?.name || "Unknown" };
        });
        setPosts(postsWithUser.slice(0, 4));
      } catch (error) {
        setError("errror !");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <PostListContainer>
      <PostBox>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </PostBox>
    </PostListContainer>
  );
}

const PostListContainer = styled.div`
  display: flex;
  width: 1243px;
  height: 491px;
  background-color: aliceblue;
  align-items: center;
`;

const PostBox = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default PostList;
