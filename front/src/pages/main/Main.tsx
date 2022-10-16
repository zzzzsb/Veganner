import React from "react";
import * as S from "../main/Main.styled";

function Main() {
  return (
    <>
      <S.Main1Layout>
        <S.Main1Box>
          <S.Text1>나와 지구를 위한 채식 문화,</S.Text1>
          <S.Text1>비거너와 함께 시작해요!</S.Text1>
          <S.Button1 />
        </S.Main1Box>
      </S.Main1Layout>

      <S.PageLayout height={800}>
        <S.MediumTitleText>“오늘도 고기 드셨나요?”</S.MediumTitleText>
        <S.Text>일주일에 하루만 고기를 먹지 않아도</S.Text>
        <S.Text>
          자동차가 1.6km를 달리면서 뿜어내는 것과 동일한 온실가스를 감축할 수
          있어요.
        </S.Text>
        <S.ChartBox>
          <S.ImageBox
            backgroundImg={"../../assets/img/data/chart_1.png"}
          ></S.ImageBox>
        </S.ChartBox>
      </S.PageLayout>
    </>
  );
}

export default Main;
