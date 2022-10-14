import styled from "styled-components";

export const Layout = styled.div`
  position: absolute;
  width: 1020px;
  height: 2057px;
  left: 198px;
  top: 57px;
`;

/* 제목 레이아웃 */
export const TitleLayout = styled.div`
  position: absolute;
  width: 1020px;
  height: 94.96px;
  left: 198px;
  top: 158px;
`;

/* 레시피 or 식당 */
export const Label = styled.div`
  position: absolute;
  height: 27.14px;
  left: 451px;
  right: 451px;
  top: 0px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #004d43;
`;

/* 제목 */
export const Title = styled.div`
  position: absolute;
  width: 1020px;
  height: 66.81px;
  left: 0px;
  top: 28.14px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 54px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #212121;
`;

/* 글 정보 레이아웃 */
export const InfoLayout = styled.div`
  position: absolute;
  width: 1020px;
  height: 56px;
  left: 198px;
  top: 313px;
`;

/* 유저, 작성일, 분류 */
export const PostInfo = styled.div`
  position: absolute;
  width: 261px;
  height: 31px;
  left: 220px;
  top: 313px;
`;

/* 유저 프로필 사진 */
export const UserPic = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 220px;
  top: 318px;

  background: #a5a5a5;
`;
/* 유저이름 */
export const UserName = styled.div`
  position: absolute;
  width: 48.59px;
  height: 17px;
  left: 251px;
  top: 320px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #212121;
`;

/* 작성일 */
export const PostDate = styled.div`
  position: absolute;
  width: 93px;
  height: 18px;
  left: 313px;
  top: 320px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #212121;
`;

/* 분류 */
export const PostCate = styled.div`
  position: absolute;
  width: 62px;
  height: 31px;
  left: 419px;
  top: 313px;
`;

/* 구분선 */
export const InfoLine1 = styled.div`
  position: absolute;
  width: 0.5px;
  height: 22.02px;
  left: 306px;
  top: 317px;

  border: 0.5px solid rgba(33, 33, 33, 0.5);
  transform: rotate(0.94deg);
`;
export const InfoLine2 = styled.div`
  position: absolute;
  width: 0.5px;
  height: 22.02px;
  left: 409.57px;
  top: 317.01px;

  border: 0.5px solid rgba(33, 33, 33, 0.5);
  transform: rotate(0.94deg);
`;

/* 좋아요 */
export const Like = styled.div`
  position: absolute;
  width: 34px;
  height: 18px;
  left: 1159px;
  top: 323px;
`;

/* 좋아요 아이콘 */
export const LikeIcon = styled.div`
  position: absolute;
  left: 81.91%;
  right: 16.96%;
  top: 15.33%;
  bottom: 84.07%;

  background: #000000;
`;

/* 좋아요 수 */
export const LikeCount = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 1175px;
  top: 323px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #212121;
`;
