import styled from "styled-components";
import main1 from "../../assets/img/메인1.png";
import button1 from "../../assets/img/btn_동참하기.png";

export interface MainStyledProps {
  height?: number;
  backgroundImg?: string;
}
export const Main1Layout = styled.div`
  display: flex;
  width: auto;
  height: 700px;
  font-family: "Noto Sans KR";
  background-image: url(${main1});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Main1Box = styled.div`
  width: 100%;
  margin-left: auto;
  margin-top: 250px;
  margin-right: 100px;
`;

export const Text1 = styled.div`
  font-size: 50px;
  font-weight: 800;
  text-align: right;
  margin: 18px 0;
  color: #212121;
`;

export const Button1 = styled.div`
  display: block;
  width: 180px;
  height: 45px;
  background-image: url(${button1});
  background-size: contain;
  background-repeat: no-repeat;
  float: right;
  margin-top: 15px;
`;

export const PageLayout = styled.div<MainStyledProps>`
  width: auto;
  height: ${(props) => `${props.height}px`};
  font-family: "Noto Sans KR";
  text-align: center;
`;

export const RowTextBox = styled.div`
  height: 150px;
  text-align: left;
  margin: 20px 100px;
  color: #212121;
`;

export const MediumTitleText = styled.div`
  font-size: 40px;
  font-weight: 800;
  text-align: left;
  margin: 18px 0;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  margin: 10px auto;
`;

export const ChartBox = styled.div`
  width: 450px;
  height: 400px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const ImageBox = styled.div<MainStyledProps>`
  width: 400px;
  height: 300px;
  text-align: center;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  display: flex;

  background-size: cover;
  background-repeat: no-repeat;
`;
