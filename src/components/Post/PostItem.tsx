import React from "react";
import { Post } from "../../types/post";
import styled from "styled-components";

interface PostItemProps {
  post: Post & { name: string };
}

function PostItem({ post }: PostItemProps) {
  return (
    <PostItemLi>
      작성자: {post.name} | {post.title} <br /> 작성일: {post.createdAt} <br />{" "}
      수정일: {post.updatedAt}
    </PostItemLi>
  );
}

const PostItemLi = styled.li`
  display: flex;
  background-color: gray;
  width: 1000px;
  list-style: none;
  margin: 0px;
  padding: 16px;
`;

export default PostItem;
