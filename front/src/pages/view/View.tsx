import React from "react";
import { createGlobalStyle } from "styled-components";
import ViewTemplate from "./ViewTemplate";
import ViewHead from "./ViewHead";
import ViewContent from "./ViewContent";
import ViewComment from "./ViewComment";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f1f1;
  }
`;

function View() {
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
