import React from "react";
import styled from "styled-components";

const ViewContentBlock = styled.pre`
  line-height: 27px;

  display: flex;
  align-items: center;
  text-align: justify;
  white-space: pre-line;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #004d43;
  border-radius: 30px;
  color: #004d43;
  box-sizing: border-box;
`;

function ViewContent() {
  return (
    <>
      <ViewContentBlock></ViewContentBlock>
      <Button>수정</Button>
      <Button>삭제</Button>
    </>
  );
}

export default ViewContent;
