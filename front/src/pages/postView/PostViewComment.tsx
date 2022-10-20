import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Api from "../../api/api";
import userState from "../../atoms/user";
import { useRecoilValue } from "recoil";

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

const InputBox = styled.div`
  border: 0.5px solid;
  width: 100%;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 20px;
  // padding: 20px 0 20px 0;
  position: relative;

  display: flex;

  align-items: center;
  text-align: justify;

  textarea {
    width: 100%;
    height: 110px;
    // display: block;
    padding: 5px;
    border: none;
    &:focus {
      outline: none;
    }
    resize: none;
    white-space: pre;
    background-color: #f1f1f1;
  }

  textarea::placeholder {
    margin: 15px 0 0 15px;
    color: #21212180;
    font-size: 14px;
  }

  button {
    width: 60px;
    height: 30px;
    border: 1px solid #21212180;
    border-radius: 30px;
    color: #21212180;
    box-sizing: border-box;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Line = styled.div`
  width: 100%;
  border: 0.5px solid #21212180;
`;

const CommentsWrapper = styled.div`
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

interface postProps {
  post: any;
}

function PostViewComment({ post }: postProps) {
  const user = useRecoilValue(userState);
  interface Comment {
    CommentId?: number;
    User_id: string;
    Comment: string;
    CreationTime?: string;
    PostId: number;
  }

  const [comment, setComment] = useState<Comment>({
    User_id: post.User,
    PostId: post.ID,
    Comment: "",
  });

  const [comments, setComments] = useState<Array<Comment>>([]);

  useEffect(() => {
    async function getComments() {
      try {
        const res = await Api.get(`board/${post.ID}/comments`);
        setComments([...res.data]);
        console.log(res);
      } catch (err) {
        console.log("댓글 불러오기에 실패했습니다.\n", err);
      }
    }
    getComments();
  }, [post]);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    setComment({
      CommentId: comments.length + 1,
      ...comment,
      Comment: text,
    });
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();

    try {
      let res = await Api.post(`board/${post.ID}/comments/`, comment);
      console.log("댓글 작성에 성공했습니다.\n", res);

      res = await Api.get(`board/${post.ID}/comments`);
      console.log(res.data);
      setComments([...res.data]);
    } catch (err) {
      console.log("댓글 작성에 실패했습니다.\n", err);
    }

    setComment({
      User_id: post.User,
      PostId: post.ID,
      Comment: "",
    });
  }

  return (
    <ViewCommentBlock>
      <CommentLabel>
        <span className="label">댓글</span>
        <span className="count">{comments.length}</span>
      </CommentLabel>
      <Line></Line>
      <InputBox>
        <textarea
          placeholder="로그인하고 댓글을 입력해보세요."
          onChange={handleInput}
          value={comment.Comment}
        />
        {user ? (
          <button type="button" onClick={handleSubmit}>
            작성
          </button>
        ) : (
          <button
            type="button"
            onClick={() => alert("로그인하고 댓글을 남겨주세요.")}
          >
            작성
          </button>
        )}
      </InputBox>
      {comments.map((comment: Comment, index): any => {
        return (
          <CommentsWrapper>
            <CommentsInfo>
              <span className="pic"></span>
              <p>{comment.User_id}</p>
              <span className="date">
                {typeof comment.CreationTime === "string"
                  ? comment.CreationTime.split("T")[0]
                  : comment.CreationTime}
              </span>
              <span className="date">
                {typeof comment.CreationTime === "string"
                  ? comment.CreationTime.split("T")[1].substring(0, 5)
                  : comment.CreationTime}
              </span>
            </CommentsInfo>
            <div className="comment">{comment.Comment}</div>
            <button>답글</button>
          </CommentsWrapper>
        );
      })}
    </ViewCommentBlock>
  );
}

export default PostViewComment;

// {addComment.map((element,index) => {
//   return <Comment
//     value={element}
//     isLogined={isLogined}
//     key={element.date+JSON.stringify(index)}
//     onDelete={onClickDeleteHandler}
//     />
// })}
