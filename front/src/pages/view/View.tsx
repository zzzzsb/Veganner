import React from "react";
import * as S from "../view/View.styled";

function View() {
  return (
    <S.Layout>
      <S.TitleLayout>
        <S.Label>레시피</S.Label>
        <S.Title>토마토 파프리카 그린 샐러드</S.Title>
      </S.TitleLayout>
      <S.InfoLayout>
        <S.PostInfo>
          <S.UserPic></S.UserPic>
          <S.UserName>김현정</S.UserName>
          <S.InfoLine1></S.InfoLine1>
          <S.PostDate>2022-10-10</S.PostDate>
          <S.InfoLine2></S.InfoLine2>
          <S.PostCate></S.PostCate>
        </S.PostInfo>
        <S.Like>
          <S.LikeIcon></S.LikeIcon>
          <S.LikeCount>0</S.LikeCount>
        </S.Like>
      </S.InfoLayout>
    </S.Layout>
  );
}

export default View;
