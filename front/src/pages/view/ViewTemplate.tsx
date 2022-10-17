import React from "react";
import styled from "styled-components";

const ViewTemplateBlock = styled.div`
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

interface Props {
  children?: React.ReactNode;
}

function ViewTemplate({ children, ...props }: Props) {
  return <ViewTemplateBlock {...props}>{children}</ViewTemplateBlock>;
}

export default ViewTemplate;
