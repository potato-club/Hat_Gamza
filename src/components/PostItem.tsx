import React from "react";
import { Post } from "../types/post";
import styled from "styled-components";

interface PostItemProps {
  post: Post & { koreanName: string };
}

function PostItem({ post }: PostItemProps) {
  return (
    <PostItemLi>
      <p>
        작성자: {post.koreanName} | {post.title} <br /> 작성일: {post.createdAt}{" "}
        <br /> 수정일: {post.updatedAt}
      </p>
    </PostItemLi>
  );
}

const PostItemLi = styled.li`
  display: flex;
  background-color: gray;
  width: 1200px;
  height: 130px;
  list-style: none;
`;

export default PostItem;
