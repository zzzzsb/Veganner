import React from "react";
import styled from "styled-components";

const ViewCommentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommentLabel = styled.div`
  line-height: 19px;
  width: 100%;
  margin-bottom: 10px;
  margin-left: 5px;

  .label {
    margin-right: 5px;
  }
  .count {
    color: #004d43;
  }
`;

const CommentInputBox = styled.div`
  border: 0.5px solid;
  width: 100%;
  height: 135px;
  margin-top: 15px;
  margin-bottom: 30px;

  .inputDefault {
    margin: 15px 0 0 15px;
    color: #21212180;
  }
`;

const Comments = styled.div`
  .comment {
    margin: 15px 0 15px 5px;
  }

  button {
    color: #21212180;
    border: none;
    margin-bottom: 15px;
  }
`;

const CommentsInfo = styled.div`
  display: flex;
  margin: 25px 5px 10px 5px;

  .pic {
    width: 20px;
    height: 20px;
    background-color: #21212180;
    border-radius: 50%;
    float: left;
    // margin-right: 10px;
  }
  p {
    margin: 0 10px 0 10px;
  }
  .date {
    margin: 0 5px 0 5px;
    color: #21212180;
  }
`;

const Line = styled.div`
  width: 1070px;
  border: 0.5px solid #21212180;
`;

function ViewComment() {
  return (
    <ViewCommentBlock>
      <CommentLabel>
        <span className="label">댓글</span>
        <span className="count">2</span>
      </CommentLabel>
      <Line></Line>
      <CommentInputBox>
        <div className="inputDefault">로그인하고 댓글을 입력해보세요.</div>
      </CommentInputBox>
      <Comments>
        <CommentsInfo>
          <span className="pic"></span>
          <p>지수빈</p>
          <span className="date">2022-10-10</span>
          <span className="date">12:26</span>
        </CommentsInfo>
        <div className="comment">와!!!! 이렇게 많은 메뉴가 있었다니!!!</div>
        <button>답글</button>
      </Comments>
      <Line></Line>
      <Comments>
        <CommentsInfo>
          <span className="pic"></span>
          <p>지수빈</p>
          <span className="date">2022-10-10</span>
          <span className="date">12:26</span>
        </CommentsInfo>
        <div className="comment">와!!!! 이렇게 많은 메뉴가 있었다니!!!</div>
        <button>답글</button>
      </Comments>
    </ViewCommentBlock>
  );
}

export default ViewComment;
