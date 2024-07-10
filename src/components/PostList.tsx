import React, { useState, useEffect } from "react";
import { Post } from "../types/post";
import { fetchPost } from "../api/posts";
import { fetchUser } from "../api/userInfo";
import PostItem from "./PostItem";
import styled from "styled-components";

interface PostUser extends Post {
  koreanName: string;
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
          console.log(usersData);
          const user = usersData.find(
            (user) => user.id === parseInt(post.Userid)
          );
          return { ...post, koreanName: user?.korean_name || "Unknown" };
        });

        setPosts(postsWithUser.slice(0, 10));
      } catch (error) {
        setError("errror !");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <PostListContainer>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </PostListContainer>
    </div>
  );
}

const PostListContainer = styled.div`
  width: 1243px;
  height: 491px;
  background-color: aliceblue;
`;

export default PostList;
