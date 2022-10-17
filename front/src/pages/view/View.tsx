import React from "react";
import Search from "../view/Search";
import List from "../view/List";
import { createGlobalStyle } from "styled-components";
import ViewTemplate from "./ViewTemplate";
import ViewHead from "./ViewHead";
import ViewContent from "./ViewContent";
import ViewComment from "./ViewComment";
// import * as S from "../view/View.styled";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f1f1;
  }
`;


function View() {
  return (
    <>

    <Search/>
    <List/>

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
