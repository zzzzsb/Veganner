import React, { useState, useEffect } from "react";
// import Search from "../list/Search";
// import List from "../list/List";
import { createGlobalStyle } from "styled-components";
import PostViewHead from "./PostViewHead";
import PostViewContent from "./PostViewContent";
import PostViewComment from "./PostViewComment";
import * as Api from "../../api/api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f1f1;
  }
`;

const PostViewLayout = styled.div`
  width: 70%;

  margin: auto;
  padding-top: 75px;
  padding-bottom: 75px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Noto Sans", sans-serif;
  font-weight: 400px;
  font-size: 16px;
  color: #212121;
`;

function PostView() {
  const { postId } = useParams();
  // console.log(postId); // 1
  // console.log(typeof postId); // string
  interface Post {
    // ID: string;
    User: string;
    Title: string;
    Content: string;
    Thumbnail?: string;
    Type?: string;
    Hashtag?: string;
    CreationTime?: string;
    Groups: number;
    RestaurantId?: number;
    Address?: string;
    // Likes: number;
  }

  const [post, setPost] = useState<Post>({
    // ID: postId,
    User: "",
    Title: "",
    Content: "",
    Type: "",
    Hashtag: "#",
    Groups: 0,
    // Likes: 0
  });

  async function getPost() {
    try {
      const res = await Api.get(`board/${postId}`);
      // console.log(res.data);
      setPost(res.data);
    } catch (err) {
      console.log("글 불러오기를 실패했습니다.\n", err);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <GlobalStyle />
      <PostViewLayout>
        <PostViewHead post={post}></PostViewHead>
        <PostViewContent post={post}></PostViewContent>
        <PostViewComment post={post}></PostViewComment>
      </PostViewLayout>
    </>
  );
}

export default PostView;
