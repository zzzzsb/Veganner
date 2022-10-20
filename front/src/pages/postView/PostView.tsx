import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import PostViewHead from "./PostViewHead";
import PostViewContent from "./PostViewContent";
import PostViewComment from "./PostViewComment";
import * as Api from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
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
  interface Post {
    ID?: number;
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
  }

  const [post, setPost] = useState<Post>({
    User: "",
    Title: "",
    Content: "",
    Type: "",
    Hashtag: "#",
    Groups: 0,
  });

  const [like, setLike] = useState();

  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    async function getPost() {
      try {
        let res = await Api.get(`board/${postId}`);
        console.log(res.data);
        setPost(res.data);

        res = await Api.get(`board/${postId}/like`);
        console.log("좋아요 개수:", res.data);
        setLike(res.data);

        setIsValid(true);
      } catch (err) {
        console.log("글 불러오기를 실패했습니다.\n", err);
        setIsValid(false);
      }
    }

    getPost();
  }, [postId]);

  const navigate = useNavigate();

  if (!isValid) {
    navigate("/share");
  }

  if (isValid) {
    return (
      <>
        <GlobalStyle />
        <PostViewLayout>
          <PostViewHead post={post} like={like}></PostViewHead>
          <PostViewContent post={post} setPost={setPost}></PostViewContent>
          <PostViewComment post={post}></PostViewComment>
        </PostViewLayout>
      </>
    );
  } else {
    return null;
  }
}

export default PostView;
