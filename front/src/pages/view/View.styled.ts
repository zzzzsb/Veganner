import styled from "styled-components";

/* 전체 레이아웃 */
export const Layout = styled.div`
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

/* 제목 레이아웃 */
export const TitleLayout = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

/* 레시피 or 식당 */
export const Label = styled.div`
  height: 27px;
  font-weight: 600;
  color: #004d43;
`;

/* 제목 */
export const Title = styled.div`
  height: 67px;
  font-weight: 500;
  font-size: 40px;
`;

/* 글 정보 레이아웃 */
export const InfoLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 15px 15px 15px;
`;

/* 유저, 작성일, 분류 */
export const PostInfo = styled.div`
  flex: none;
`;

/* 유저 프로필 사진 */
export const UserPic = styled.span`
  width: 20px;
  height: 20px;
  background-color: #21212180;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
`;
/* 유저이름 */
export const UserName = styled.span`
  margin-right: 10px;
`;

/* 작성일 */
export const PostDate = styled.span`
  margin: 0 10px 0 10px;
`;

/* 분류 */
export const PostCate = styled.span`
  margin: 0 10px 0 10px;
`;

/* 구분선 */
export const InfoLine = styled.span`
  border: 0.5px solid #21212180;
  transform: rotate(0.95deg);
`;

/* 좋아요 */
export const Like = styled.div`
  margin-left: auto;
  flex: none;
  align-items: center;
`;

/* 좋아요 아이콘 */
export const LikeIcon = styled.span`
  margin-right: 5px;
`;

/* 좋아요 수 */
export const LikeCount = styled.span`
  color: #004d43;
`;

export const Line = styled.div`
  width: 1070px;
  border: 0.5px solid #21212180;
`;

export const Content = styled.pre`
  line-height: 27px;

  display: flex;
  align-items: center;
  text-align: justify;
  white-space: pre-line;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const CommentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

export const CommentLabel = styled.div`
  line-height: 19px;
  width: 100%;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const CommentWord = styled.span`
  margin-right: 5px;
`;

export const CommentCount = styled.span`
  color: #004d43;
`;

export const CommentInputBox = styled.div`
  border: 0.5px solid;
  width: 100%;
  height: 135px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const CommentInputText = styled.div`
  margin: 15px 0 0 15px;
  color: #21212180;
`;

export const CommentInfo = styled.div`
  display: flex;
  margin: 5px 5px 5px 5px;
`;

export const CommentDate = styled.span`
  margin: 0 5px 0 5px;
  color: #21212180;
`;

export const Comment = styled.div`
  margin: 10px 0 10px 5px;
`;

export const CommentButton = styled.div`
  color: #21212180;
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #004d43;
  border-radius: 30px;
  color: #004d43;
  box-sizing: border-box;
`;
