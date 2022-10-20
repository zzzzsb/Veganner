import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

const ViewContentBlock = styled.pre`
  line-height: 27px;

  display: flex;
  align-items: center;
  text-align: justify;
  white-space: pre-line;
  margin-top: 80px;
  margin-bottom: 100px;
`;

const ViewBottomBlock = styled.div`
  width: 100%;
  display: flex;
`;

const HashtagBlock = styled.div`
  flex: none;
  margin: 0 0 25px 5px;

  .hashtag {
    display: inline-block;
    padding: 6px 10px 5px 10px;
    border: 1px solid #212121;
    border-radius: 20px;
    color: #212121;
    box-sizing: border-box;
    font-size: 12px;
  }
`;

export const ButtonBlock = styled.div`
  margin-left: auto;

  button {
    width: 60px;
    height: 30px;
    border: 1px solid #004d43;
    border-radius: 30px;
    color: #004d43;
    box-sizing: border-box;
  }
`;

interface postProps {
  post: any;
}
function PostViewContent({ post }: postProps) {
  return (
    <>
      <ViewContentBlock>
        {<div dangerouslySetInnerHTML={{ __html: post.Content }}></div>}
      </ViewContentBlock>
      <ViewBottomBlock>
        <HashtagBlock>
          <div className="hashtag">{post.Hashtag ? post.Hashtag : "#"}</div>
        </HashtagBlock>
        <ButtonBlock>
          <button type="button">수정</button>
          <button>삭제</button>
        </ButtonBlock>
      </ViewBottomBlock>
    </>
  );
}

export default PostViewContent;
