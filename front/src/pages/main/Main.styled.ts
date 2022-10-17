import styled from "styled-components";
import main1 from "../../assets/img/메인1.png";
import button1 from "../../assets/img/btn_동참하기.png";
import cardButton from "../../assets/img/바로가기Btn.png";
export interface MainStyledProps {
  height?: string;
  backgroundImg?: string;
  textAlign?: string;
  fontSize?: number;
  color?: string;
}

export const Main = styled.div`
  font-family: "Noto Sans KR";
`;
export const Main1Layout = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  font-family: "Noto Sans KR";
  background-image: url(${main1});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Main1Box = styled.div`
  width: 100%;
  margin-left: auto;
  margin-top: 30vh;
  margin-right: 15vh;
`;

export const Text1 = styled.div`
  font-size: 60px;
  font-weight: 800;
  text-align: right;
  margin: 18px 0;
  color: #212121;
`;

export const Button1 = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  border: none;
  background-color: transparent;
  background-image: url(${button1});
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  margin-top: 15px;
`;

export const PageLayout = styled.div<MainStyledProps>`
  width: auto;
  height: ${(props) => props.height};
  font-family: "Noto Sans KR";
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowTextBox = styled.div`
  width: 1000px;
  height: 120px;
  text-align: left;
  margin: 15vh auto 5vh auto;
  color: #212121;
`;

export const MediumTitleText = styled.div<MainStyledProps>`
  font-size: 40px;
  font-weight: 1000;
  text-align: ${(props) => props.textAlign};
  margin-bottom: 30px;
  color: ${(props) => props.color};
`;

export const TextBox = styled.div`
  width: 600px;
  height: 120px;
  /* margin: 0 auto; */
`;
export const Text = styled.div<MainStyledProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 500;
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  margin-bottom: 10px;
`;

export const ChartLayout = styled.div`
  display: flex;
  justify-content: center;
`;
export const ChartBox = styled.div`
  width: 450px;
  height: 400px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 30px 50px;
`;

export const ImageBox = styled.div<MainStyledProps>`
  width: 400px;
  height: 270px;
  text-align: center;
  margin: 30px auto;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ChartText = styled.div`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  margin: 0 auto 10px auto;
  color: #212121;
`;

export const CardLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 25vh auto;
`;
export const Card = styled.div`
  width: 450px;
  height: 350px;
  margin: 0 70px;
`;

export const CardImgBox = styled.div<MainStyledProps>`
  width: 450px;
  height: 170px;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
`;

export const CardButton = styled.button<MainStyledProps>`
  width: 150px;
  height: 35px;
  border: none;
  display: block;
  background-image: url(${cardButton});
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  margin-top: 30px;
  background-color: transparent;
`;