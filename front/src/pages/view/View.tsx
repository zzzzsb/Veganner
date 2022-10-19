import React, { useState, useEffect } from "react";
import Search from "../list/Search";
import List from "../list/List";
import { createGlobalStyle } from "styled-components";
import ViewTemplate from "./ViewTemplate";
import ViewHead from "./ViewHead";
import ViewContent from "./ViewContent";
import ViewComment from "./ViewComment";
import * as Api from "../../api/api";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f1f1;
  }
`;

function View({ match }: any) {
  interface Post {
    Type: string;
    Title: string;
    Thumbnail?: string;
    CreationTime?: string;
    User: string;
    Likes: number;
    Hashtag?: string;
  }

  const [post, setPost] = useState<Post>({
    Type: "",
    Title: "",
    Thumbnail: "",
    User: "",
    Likes: 0,
    Hashtag: "#",
  });

  async function getPost(id: string) {
    try {
      const res = await Api.get(`board/${id}`);
      console.log(res.data);
      setPost(res.data);
    } catch (err) {
      console.log("글 불러오기를 실패했습니다.\n", err);
    }
  }

  // useEffect(() => {
  //   console.log(match);
  //   getPost(match.params.id);
  // }, []);

  return (
    <>
      <GlobalStyle />
      <ViewTemplate>
        <ViewHead></ViewHead>
        <ViewContent></ViewContent>
        <ViewComment></ViewComment>
      </ViewTemplate>
    </>
  );
}

export default View;
